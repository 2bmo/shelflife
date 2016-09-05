$(document).ready(function(){
    $('#carousel').slick({
        dots: true,
        infinite: true,
        speed: 500
    });
    removeText();
});
function removeText() {
    let arrows = document.getElementsByClassName("slick-arrow"),
        dots = $(".slick-dots li button");
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].innerHTML = "<div class='line'></div>";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].innerHTML = "";
    }
}
$("#searchButton").click(function(){
    $("#searchField").toggle("slow");
});
let promo = $(".promo").height(),
    main = document.getElementsByTagName("main");
main[0].style.paddingTop = (promo - 40) + "px";
if (document.body.clientWidth  <= 1280) {
    $(".cross").removeClass("cross");
}
