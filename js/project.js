(function ($) {
    "use strict";

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

    var filmhouse = {

        init: function () {
            this.bindUIActions();
            $(".spinner").spin("standard");
        },

        bindUIActions: function () {
            $(".btn").on("click", function (e) { filmhouse.sayHello(e); });
        },

        windowLoaded: function () {
            $(".spinner").fadeOut("slow", function () {
                $(this).spin(false);
            });
        },

        sayHello: function () {
            console.log("Hello World");
        }

    };

    // DOM Ready
    $(function () { filmhouse.init(); });
    // Images Loaded
    $(window).load(function () { filmhouse.windowLoaded(); });

} (jQuery));
