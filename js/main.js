$(document).ready(function () {

    $('#loader').fadeOut(500);
    $('.section-left').delay(500).hide("slide", { direction: "left" }, 500);
    $('.section-right').delay(500).hide("slide", { direction: "right" }, 500);

    setTimeout(function () {
        $('#loader-wrapper').remove();
    }, 1500);
});

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
    var animationSpeed = 500;

    $('html, body').animate({
        scrollTop: location
    }, animationSpeed);

});