(function ($) {
    "use strict";

    // OPTIONS
    // spin.js
    $.fn.spin.presets.standard = {
        lines: 15, // The number of lines to draw
        length: 40, // The length of each line
        width: 2, // The line thickness
        radius: 60, // The radius of the inner circle
        corners: 0.5, // Corner roundness (0..1)
        rotate: 54, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: "#fff", // #rgb or #rrggbb or array of colors
        speed: 1.4, // Rounds per second
        trail: 84, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: "spinner", // The CSS class to assign to the spinner
        zIndex: 1, // The z-index (defaults to 2000000000)
        top: "auto", // Top position relative to parent in px
        left: "auto" // Left position relative to parent in px
    };
    // Vimeo options
    var vimeoquery = "?title=0&byline=0&portrait=0&color=ffffff&autoplay=1&loop=0\"";

    var filmhouse = {

        init: function () {
            this.bindUIActions();
            $(".spinner").spin("standard");

            // init slideshow for homepage
            if ($("body").hasClass("home")) { this.initSlideshow(); }

            // init isotope
            $(".isotope-content").isotope({
                filter: ".post",
                resizable: false,
                masonry: { columnWidth: $(".isotope-content").width() / 2 }
            });
        },

        bindUIActions: function () {
            $(".menu a[href*=#]").on("click", function (e) { filmhouse.launchPageModal(e); });
            $(".close-modal").on("click", function () { filmhouse.pageModalShouldClose(); });
            $(".slides-pagination").on({
                mouseenter: function () { filmhouse.menuShouldBeActive(); },
                mouseleave: function () { filmhouse.menuShouldBeInactive(); }
            });
            $(".slide-info").on({
                mouseenter: function (e) { filmhouse.slideInfoShouldBeActive(e); },
                mouseleave: function (e) { filmhouse.slideInfoShouldBeInactive(e); }
            });
            $(".slides-pagination a").on("click", function (e) { filmhouse.paginationShouldToggle(e); });
            $(".play-video").on("click", function (e) { filmhouse.videoShouldPlay(e); });
            $(".sitename a").on("click", function (e) { filmhouse.logoWasActioned(e); });
            $(".touch-info").on("click", function (e) { filmhouse.touchInfoWasActioned(e); });
            $(".close-touch-info").on("click", function (e) { filmhouse.closeTouchInfoWasActioned(e); });
            $(".isotope-filters button").on("click", function (e) { filmhouse.filterIsotope(e); });
        },

        windowLoaded: function () {
            $(".spinner").fadeOut("slow", function () {
                $(this).spin(false);
            });
        },

        windowResized: function () {
            if ($(window).width() > 729) {
                $(".isotope-content").isotope({ masonry: { columnWidth: $(".isotope-content").width() / 2 } });
            } else {
                $(".isotope-content").isotope({ masonry: { columnWidth: $(".isotope-content").width() / 1 } });
            }
        },

        // utility function to throttle the amount of times a function is called
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

        launchPageModal: function (e) {
            // stop url from changing
            e.preventDefault();

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

            // vert-center content to browser window
            var contentHeight = $(modal).find(".container").height();
            var windowHeight = $(window).height();
            var offset = (windowHeight / 2) - (contentHeight / 2);
            $(modal).find(">.container").css({ marginTop : offset });

            // persist menu
            filmhouse.menuShouldBeActive();
        },

        pageModalShouldClose: function () {
            filmhouse.menuShouldBeInactive();
            $(".modal:visible").fadeOut("fast", function () {
                $(this).find("iframe").remove();
            });
        },

        menuShouldBeActive: function () {
            $(".page-header").addClass("is-active");
        },

        menuShouldBeInactive: function () {
            $(".page-header").removeClass("is-active");
        },

        paginationShouldToggle: function (e) {
            $(".slides-pagination .current").removeClass("current");
            $(e.currentTarget).addClass("current");
        },

        slideInfoShouldBeActive: function (e) {
            if (!Modernizr.touch && $(window).width() > 729) {
                var info = $(e.currentTarget);
                var offset = "-" + $(info).height() + "px";

                $(info).css({ "marginTop" : offset });
            }
        },

        slideInfoShouldBeInactive: function (e) {
            if (!Modernizr.touch && $(window).width() > 729) {
                $(e.currentTarget).attr("style", "");
            }
        },

        videoShouldPlay: function (e) {
            var vimeoid = $.trim($(e.currentTarget).data("video"));
            var vw = 0;
            var vh = 0;

            if ($(window).width() < 729) {
                vw = $(window).width() + "px";
                vh = $(window).height() - 50 + "px";
            } else {
                vw = $(window).width() - 72 + "px";
                vh = $(window).height() - 90 + "px";
            }

            var size = " width=\"" + vw + "\" height=\"" + vh + "\"";
            var modal = $(".modal.video");

            $(modal).prepend("<iframe class=\"player-frame\" src=\"//player.vimeo.com/video/" + vimeoid + vimeoquery + size + " frameborder=\"0\"></iframe>");
            $(modal).fadeIn("fast");
        },

        initSlideshow: function () {

            // init slideshow
            $(".slides").superslides({
                slide_speed: 600,
                pagination: false
            });

            // build menu
            var pagination = $(".slides-pagination");
            var i = 0;

            $(".slides-container li").each(function () {
                var title = $(this).data("title");
                $(pagination).find(".title[data-title=" + i + "]").text(title).parent().css({ "display" : "block" });
                i++;
            });

            // Load in secondary images for hover devices and init hover image toggle
            if (!Modernizr.touch && Modernizr.opacity) {
                Echo.init();
                $(".img-swap").fadeTo(0, 0);
                $(".slides-container li").mousemove(filmhouse.debounce(function (e) {
                    filmhouse.hoverSlideshow(e);
                }, 100));
            }
        },

        logoWasActioned: function (e) {
            if (Modernizr.touch || $(window).width() < 729) {
                e.preventDefault();
                $(".modal.touch").fadeIn("fast");
            }
        },

        touchInfoWasActioned: function (e) {
            if (Modernizr.touch || $(window).width() < 729) {
                e.preventDefault();
                $(e.currentTarget).closest(".container").find(".slide-info").addClass("show-touch");
                $(".slides-navigation").fadeOut("fast");
            }
        },

        closeTouchInfoWasActioned: function (e) {
            e.preventDefault();
            $(e.currentTarget).closest(".container").find(".slide-info").removeClass("show-touch");
            $(".slides-navigation").fadeIn("fast");
        },

        hoverSlideshow: function (e) {
            var vw = $(window).width();
            var slide = $(".slides-container li:visible");
            var speed = 800;

            $(".slides").superslides("update");

            // left
            if (e.pageX <= vw / 3) {
                $(slide).find(".img-swap.left").fadeTo(speed, 1, function () {
                    $(slide).find(".img-swap.right").fadeTo(speed, 0);
                });
            // right
            } else if (e.pageX >= (vw / 3) * 2) {
                $(slide).find(".img-swap.right").fadeTo(speed, 1, function () {
                    $(slide).find(".img-swap.left").fadeTo(speed, 0);
                });
            // middle
            } else {
                $(slide).find(".img-swap").fadeTo(speed, 0);
            }
        },

        filterIsotope: function (e) {
            // add class for selected filter buttons
            $(".isotope-filters .selected").removeClass("selected");
            $(e.currentTarget).addClass("selected");

            // filter items
            var selector = $(e.currentTarget).data("filter");
            $(".isotope-content").isotope({ filter: selector });
        }
    };

    // DOM Ready
    $(function () { filmhouse.init(); });
    // Images Loaded
    $(window).load(function () { filmhouse.windowLoaded(); });
    // Window Resized
    $(window).smartresize(function () { filmhouse.windowResized(); });

} (jQuery));
