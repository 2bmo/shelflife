"use strict";

$(document).ready(function () {
    $('#carousel').slick({
        dots: true,
        infinite: true,
        speed: 500
    });
    removeText();
});
function removeText() {
    var arrows = document.getElementsByClassName("slick-arrow"),
        dots = $(".slick-dots li button");
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].innerHTML = "<div class='line'></div>";
    }
    for (var _i = 0; _i < dots.length; _i++) {
        dots[_i].innerHTML = "";
    }
}
$("#searchButton").click(function () {
    $("#searchField").toggle("slow");
});
var promo = $(".promo").height(),
    main = document.getElementsByTagName("main");
main[0].style.paddingTop = promo - 40 + "px";
if (document.body.clientWidth <= 1280) {
    $(".cross").removeClass("cross");
}