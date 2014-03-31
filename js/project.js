(function ($) {
    "use strict";

    // OPTIONS
    // spin.js
    $.fn.spin.presets.standard = {
        lines: 13, // The number of lines to draw
        length: 0, // The length of each line
        width: 2, // The line thickness
        radius: 24, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: "#fff", // #rgb or #rrggbb or array of colors
        speed: 1.5, // Rounds per second
        trail: 32, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: "spinner", // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: "auto", // Top position relative to parent in px
        left: "auto" // Left position relative to parent in px
    };

    var filmhouse = {

        touchInfoIsVisible: false,

        init: function () {
            // Start spinner
            $(".spinner").spin("standard");

            // Init slideshow for homepage
            if ($("body").hasClass("home")) { this.initSlideshow(); }

            // Progressive enhancement for mailchimp forms
            filmhouse.mailchimpInit();

            // Bind all events
            this.bindUIActions();
        },

        bindUIActions: function () {
            $(".menu a[href*=#]").on("click", function (e) { filmhouse.launchPageModal(e); });
            $(".close-modal").on("click", function () { filmhouse.pageModalShouldClose(); });
            $(".page-header").on({
                mouseenter: function () { filmhouse.menuShouldBeActive(); },
                mouseleave: function () { filmhouse.menuShouldBeInactive(); }
            });
            $(".slide-info, .play-icon-container").on({
                mouseenter: function (e) { filmhouse.slideInfoShouldBeActive(e); },
                mouseleave: function (e) { filmhouse.slideInfoShouldBeInactive(e); }
            });
            $(".slides-pagination a").on("click", function (e) { filmhouse.paginationShouldToggle(e); });
            $(".play-media").on("click", function (e) { filmhouse.mediaShouldPlay(e); });
            $(".sitename a").on("click", function (e) { filmhouse.logoWasActioned(e); });
            $(".touch-info").on("click", function (e) { filmhouse.touchInfoWasActioned(e); });
            $(".tab-container button").on("click", function (e) { filmhouse.tabWasAction(e); });
        },

        windowLoaded: function () {
            $(".spinner").fadeOut("slow", function () {
                $(this).spin(false);
            });
        },

        // utility function to limit the amount of times a function is called
        debounce: function (fn, delay) {
            var timer = null;
            return function () {
                var context = this, args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            };
        },

        mailchimpInit: function () {

            // Get rid of some stuff we don't need
            $(".mc_required, .modal.touch #mc-indicates-required, .modal.follow #mc-indicates-required").remove();

            // If we have placeholder support ditch the labels
            if (Modernizr.input.placeholder) {
                $(".mc_var_label").remove();
                $(".modal.touch #mc_mv_EMAIL, .modal.follow #mc_mv_EMAIL").attr("placeholder", "YOUR EMAIL");
                $(".modal.touch #mc_mv_FNAME, .modal.follow #mc_mv_FNAME").attr("placeholder", "FIRST NAME");
                $(".modal.touch #mc_mv_LNAME, .modal.follow #mc_mv_LNAME").attr("placeholder", "LAST NAME");
            }

            var mailchimpSF = { "ajax_url": "http:\/\/thefilmhouse.qa" };

            // Change our submit type from HTML (default) to JS
            $("#mc_submit_type").val("js");

            function beforeSubmit() {
                // Disable the submit button
                $("#mc_signup_submit").attr("disabled", "disabled");
            }

            function onSuccess(data) {
                // Re-enable the submit button
                $("#mc_signup_submit").removeAttr("disabled");

                // Put the response in the message div
                $("#mc_message").html(data);

                // See if we're successful, if so, wipe the fields
                var reg = new RegExp("class=\"mc_success_msg\"", "i");
                if (reg.test(data)) {
                    $("#mc_signup_form").each(function () {
                        this.reset();
                    });
                    $("#mc_submit_type").val("js");
                }
            }

            // Attach our form submitter action
            $("#mc_signup_form").ajaxForm({
                url: mailchimpSF.ajax_url,
                type: "POST",
                dataType: "text",
                beforeSubmit: beforeSubmit,
                success: onSuccess
            });

        },

        launchPageModal: function (e) {
            // stop url from changing
            e.preventDefault();

            // highlight current page
            $(".menu-header .current-menu-item").removeClass("current-menu-item");
            $(e.currentTarget).parent().addClass("current-menu-item");

            // work out which modal to show
            var hash = $(e.currentTarget).attr("href").split("#")[1];
            var modal = $(".modal." + hash);

            // if there's already a modal active just switch them
            if ($(".modal").is(":visible")) {
                $(".modal:visible").hide();
                $(modal).show();
            // if not then fade them
            } else {
                $(modal).fadeIn("fast");
            }

            $(".close-modal").fadeIn("fast");

            // stop the rest of the page being scrollable
            $("body").css({ "overflow" : "hidden" });

            // vert-center content to browser window
            var contentHeight = $(modal).find(".container").height();
            var windowHeight = $(window).height();
            var offset = (windowHeight / 2) - (contentHeight / 2);
            $(modal).find(">.container").css({ marginTop : offset });

            // persist menu
            filmhouse.menuShouldBeActive();
        },

        pageModalShouldClose: function () {

            if (filmhouse.touchInfoIsVisible) {
                filmhouse.closeTouchInfoWasActioned();
            } else {
                filmhouse.menuShouldBeInactive();

                // scroll the div to the top then fade out and reset
                $(".modal.touch").animate({
                    scrollTop: 0
                }, 400, function () {
                    $(".modal:visible").fadeOut("fast", function () {
                        // Remove video player if it's a video modal
                        if ($(this).hasClass("media")) {
                            $(this).empty();
                        }
                        // reset the scroll stopper
                        $("body").css({ "overflow" : "auto" });
                        // hide the close button
                        $(".close-modal").fadeOut("fast");
                    });
                });

                // Reset menu
                $(".menu-header .current-menu-item").removeClass("current-menu-item");

                // Reset header
                $(".page-header").attr("style", "");

                // If it's the library we need to reset the current item to libary
                if ($("body").hasClass("page-template-default")) {
                    $(".menu-header li:last-child").addClass("current-menu-item");
                }

            }
        },

        menuShouldBeActive: function () {
            if (!Modernizr.touch && $(window).width() > 728) {
                $(".page-header").addClass("is-active");
                $(".header-grad").fadeIn("fast");
            }
        },

        menuShouldBeInactive: function () {
            $(".page-header").removeClass("is-active");
            $(".header-grad").fadeOut("fast");
        },

        paginationShouldToggle: function (e) {
            $(".slides-pagination .current").removeClass("current");
            $(e.currentTarget).addClass("current");
        },

        slideInfoShouldBeActive: function (e) {
            if (!Modernizr.touch && $(window).width() > 729) {
                var info = $(e.currentTarget).closest(".container").find(".slide-info");
                var offset = "-" + $(info).outerHeight() + "px";

                $(info).css({ "marginTop" : offset });
            }
        },

        slideInfoShouldBeInactive: function (e) {
            if (!Modernizr.touch && $(window).width() > 729) {
                $(e.currentTarget).closest(".container").find(".slide-info").attr("style", "");
            }
        },

        mediaShouldPlay: function (e) {

            var modal = $(".modal.media");

            // if media is a video...
            if ($(e.currentTarget).is("[data-video]")) {
                // Vimeo options
                var vimeoquery = "?title=0&byline=0&portrait=0&color=ffffff&autoplay=1&loop=0\"";
                var vimeoid = $.trim($(e.currentTarget).data("video"));
                var winW = $(window).width();
                var winH = $(window).height();
                var playerHeight;

                // work out 9:16 ratio
                var ratioHeight = winW * 9 / 16;

                // check 9:16 ratio height isn't bigger than our window
                if (ratioHeight > winH * 0.75) {
                    playerHeight = winH * 0.75;
                } else {
                    playerHeight = ratioHeight;
                }

                var size = " width=\"" + winW + "\" height=\"" + playerHeight + "\"";
                var embed = "<iframe class=\"player-frame\" src=\"//player.vimeo.com/video/" + vimeoid + vimeoquery + size + " frameborder=\"0\"></iframe>";

                $(modal).prepend(embed);
                $(modal).fadeIn("fast", function () {
                    $(modal).fitVids();
                });
            }

            // if media is a slideshow...
            if ($(e.currentTarget).is("[data-slideshow]")) {

                // set spinner going
                $(".spinner").show().spin("standard");

                // slideshow markup
                var markup = $.trim($(e.currentTarget).data("slideshow"));

                // ajax it in
                $.ajax({
                    cache: false,
                    url: markup,
                    success: function (data) {
                        $(modal).html(data).waitForImages(function () {

                            $(modal).show();

                            $(modal).find(".flexslider").flexslider({
                                easing: "easeInOutCubic",
                                animation: "slide",
                                animationSpeed: Modernizr.touch ? 200 : 600,
                                controlNav: false,
                                slideshow: false
                            });

                            $(".spinner").fadeOut("slow", function () {
                                $(this).spin(false);
                            });
                        });
                    }
                });
            }

            $(".close-modal").fadeIn("fast");
            $("body").css({ "overflow" : "hidden" });
        },

        initSlideshow: function () {
            // build menu
            var pagination = $(".slides-pagination");
            var i = 0;

            $(".slides-container li").each(function () {
                var title = $(this).data("title");
                var slug = "#" + $(this).data("href");

                $(pagination).find(".title[data-title=" + i + "]")
                    .text(title)
                        .parent()
                            .attr("href", slug)
                                .css({ "display" : "inline-block" });

                i++;
            });

            // Set current item (by default it's 1)
            var hash = window.location.hash;
            if (hash.length > 0) {
                $(pagination).find(".current").removeClass("current");
                $(pagination).find("a[href=" + hash + "]").addClass("current");
            }

            // Load in secondary images for hover devices
            if (!Modernizr.touch && $(window).width() > 728) {
                Echo.init();
                $(".img-swap").fadeTo(0, 0);
            }

            // Init slideshow
            $(".slides").superslides({
                slide_easing: "easeInOutCubic",
                slide_speed: Modernizr.touch ? 200 : 600,
                pagination: false,
                hashchange: true,
                texthash: true,
                scrollable: true
            });

            // Bind swipe events to slideshow
            $(".slides").hammer().on("swipeleft", function () {
                $(this).superslides("animate", "next");
            });
            $(".slides").hammer().on("swiperight", function () {
                $(this).superslides("animate", "prev");
            });

            // Stop the plugin automatically showing navigation
            // We want to control this with CSS
            $(".slides-navigation").attr("style", "");

            // Init hover image toggle
            if (!Modernizr.touch && $(window).width() > 728) {
                $(".slides-container li").mousemove(filmhouse.debounce(function (e) {
                    filmhouse.hoverSlideshow(e);
                }, 50));
            }

        },

        logoWasActioned: function (e) {

            // if we already have a modal or post info showing we should hide it
            if ($(".modal").is(":visible") || filmhouse.touchInfoIsVisible) {
                if ($(".modal").is(":visible")) {
                    e.preventDefault();
                    filmhouse.pageModalShouldClose();
                }

                if (filmhouse.touchInfoIsVisible) {
                    e.preventDefault();
                    filmhouse.closeTouchInfoWasActioned();
                }
            // but if we don't, and we're on a small device
            // we pop up the touch info
            } else {
                if (Modernizr.touch || $(window).width() < 729) {
                    e.preventDefault();
                    $(".close-modal").fadeIn("fast");
                    $(".modal.touch").fadeIn("fast", function () {
                        // stop the rest of the page being scrollable
                        $("body").css({ "overflow" : "hidden" });
                        // block out header
                        $(".page-header").css({
                            "width" : "100%",
                            "background" : "#000",
                            "margin" : "0",
                            "left" : "0",
                            "zIndex" : "11"
                        });
                    });

                }
            }
            // if none of these conditions are met, we assume the link should
            // function as default and return to the home page

        },

        touchInfoWasActioned: function (e) {
            if (Modernizr.touch || $(window).width() < 729) {
                e.preventDefault();
                $(e.currentTarget).closest(".container").find(".slide-info").addClass("show-touch");
                $(".slides-navigation").fadeOut("fast");
                $(".close-modal").fadeIn("fast");
                // stop the rest of the page being scrollable
                $("body").css({ "overflow" : "hidden" });
                // block out the header
                $(".page-header").css({
                    "width" : "100%",
                    "background" : "#000",
                    "margin" : "0",
                    "left" : "0"
                });
                filmhouse.touchInfoIsVisible = true;
            }
        },

        closeTouchInfoWasActioned: function () {
            // Reset scroll and remove modal
            $(".slide-info.show-touch").animate({
                scrollTop: 0
            }, 400, function () {
                // Reset header styles
                $(".page-header").attr("style", "");

                filmhouse.touchInfoIsVisible = false;

                $(this).removeClass("show-touch");

                $(".slides-navigation").fadeIn("fast", function () {
                    $(".close-modal").fadeOut("fast");
                    // reset page scroll
                    $("body").css({ "overflow" : "auto" });
                });
            });
        },

        hoverSlideshow: function (e) {
            var winW = $(window).width();
            var slide = $(".slides-container li:visible");
            var speed = 800;

            // left
            if (e.pageX <= winW / 3) {
                $(slide).find(".img-swap.left").fadeTo(speed, 1);
                $(slide).find(".img-swap.right").fadeTo(speed, 0);
            // right
            } else if (e.pageX >= (winW / 3) * 2) {
                $(slide).find(".img-swap.right").fadeTo(speed, 1);
                $(slide).find(".img-swap.left").fadeTo(speed, 0);
            // middle
            } else {
                $(slide).find(".img-swap").fadeTo(speed, 0);
            }
        },

        tabWasAction: function (e) {
            var scope = $(e.currentTarget).closest(".tab-container");
            var target = "." + $(e.currentTarget).data("action");

            // switch tabs
            $(scope).find(".tab").hide();
            $(scope).find(target).show();

            // switch button state
            $(scope).find(".selected").removeClass("selected");
            $(e.currentTarget).addClass("selected");
        }
    };

    // DOM Ready
    $(function () { filmhouse.init(); });
    // Images Loaded
    $(window).load(function () { filmhouse.windowLoaded(); });

} (jQuery));
