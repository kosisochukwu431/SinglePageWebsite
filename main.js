$(document).ready(function () {

    $('html, body').animate({
        scrollTop: 0
    }, 0);

    hideLoader();

});

function hideLoader() {
    $('#loader').fadeOut(500);
    $('.section-left').delay(500).hide("slide", { direction: "left" }, 500);
    $('.section-right').delay(500).hide("slide", { direction: "right" }, 500);

    setTimeout(function () {
        $('#loader-wrapper').remove();
    }, 1500);
}

function collapse() {
    var x = $('#nav-collapse');
    var y = $('#icon');

    if (x.hasClass('responsive')) {
        x.removeClass('responsive');

        y.removeClass('glyphicon-remove');
        y.addClass('glyphicon-menu-hamburger');

    } else {
        x.addClass('responsive');

        y.removeClass('glyphicon-menu-hamburger');
        y.addClass('glyphicon-remove');
    }
}

$('.menu-item').click(function (event) {

    var headerOffset = 75;

    event.preventDefault();

    var tag = $(this).attr('href');
    var location = $(tag).offset().top - headerOffset;
    var current = window.pageYOffset;
    var animationSpeed = Math.abs(current - location) / 2.5;

    $('html, body').animate({
        scrollTop: location
    }, animationSpeed);

    collapse();

});

// Called when scrolling

var arr = ['#home', '#news', '#contact', '#about'];

var lastLocation = 0;

window.onscroll = function (e) {

    var currentLocation = window.pageYOffset + 115;

    if (Math.abs(lastLocation - currentLocation) >= 10) {

        var locArr = [];

        for (var i = 0; i < arr.length; i++) {
            var loc = $(arr[i]).offset().top;
            locArr.push(loc);
        }

        // Home include the banner as well
        locArr[0] = 0;
        locArr.push(locArr[locArr.length - 1] + 100);

        var section;

        for (var i = 0; i + 1 < locArr.length; i++) {
            if (currentLocation >= locArr[i] && currentLocation <= locArr[i + 1]) {
                section = arr[i];
                break;
            }
        }

        var menu = $('.menu-item');

        for (var i = 0; i < menu.length; i++) {

            var item = $(menu[i]);

            if (item.attr('href') == section) {

                var list = $('.menu-item');

                for (var i = 0; i < menu.length; i++) {

                    var t = $($(list[i]));

                    if (t.hasClass('active')) {
                        t.removeClass('active')
                    }
                }

                item.addClass('active');

            }
        }

    }

    lastLocation = currentLocation;
}
