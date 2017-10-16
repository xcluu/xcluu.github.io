/**
 * Created by Claudia on 17.07.2017.
 */
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides);
    console.log(slides[(slideIndex - 1)]);
    console.log(slideIndex);
    slides[(slideIndex - 1)].style.display = "block";
    dots[(slideIndex - 1)].className += " active";
}
//ruft Funktion nicht auf? in Konsole wird nichts angezeigt egal wie ich die Funktion aufrufe
window.onscroll = function () {
    arrowHide();
};
function arrowHide() {
    var height = window.innerHeight;
    console.log("test");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block";
    }
    else {
        document.getElementById("to-top").style.display = "none";
    }
}
