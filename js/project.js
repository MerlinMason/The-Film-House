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
            $(".slides").superslides({
                slide_speed: 600,
                pagination: false
            });
        },

        bindUIActions: function () {
            $("a[href*=#]").on("click", function (e) { filmhouse.launchPageModal(e); });
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
        },

        windowLoaded: function () {
            $(".spinner").fadeOut("slow", function () {
                $(this).spin(false);
            });
        },

        launchPageModal: function (e) {
            // stop url from changing
            e.preventDefault();

            // hide existing
            $(".modal:visible").hide();

            // show this modal
            var hash = $(e.currentTarget).attr("href").split("#")[1];
            var modal = $(".modal." + hash);
            $(modal).fadeIn("fast");

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
            var info = $(e.currentTarget);
            var offset = "-" + $(info).height() + "px";

            $(info).css({ "marginTop" : offset });
        },

        slideInfoShouldBeInactive: function (e) {
            $(e.currentTarget).attr("style", "");
        },

        videoShouldPlay: function (e) {
            var vimeoid = $(e.currentTarget).data("video");
            var vw = $(window).width() - 72 + "px";
            var vh = $(window).height() - 90 + "px";
            var size = " width=\"" + vw + "\" height=\"" + vh + "\"";
            var modal = $(".modal.video");

            $(modal).prepend("<iframe class=\"player-frame\" src=\"//player.vimeo.com/video/" + vimeoid + vimeoquery + size + " frameborder=\"0\"></iframe>");
            $(modal).fadeIn("fast");
        }
    };

    // DOM Ready
    $(function () { filmhouse.init(); });
    // Images Loaded
    $(window).load(function () { filmhouse.windowLoaded(); });

} (jQuery));
