var slideIndex = 1;
showCourseSlides(slideIndex);

function increaseCourseSlides(n) {
  showCourseSlides(slideIndex += n);
}

function courseSlides(n) {
  showCourseSlides(slideIndex = n);
}

function showCourseSlides(n) {
  var i;
  var slides = document.getElementsByClassName("coursePortfolio-slides");
  var dots = document.getElementsByClassName("coursePortfolio-dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" coursePortfolio-active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " coursePortfolio-active";
}