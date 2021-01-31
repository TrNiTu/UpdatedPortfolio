var slideIndex = 1;
showCourseSlides(slideIndex);

function increaseCourseSlides(n) {
  showCourseSlides(slideIndex += n);
}

function courseSlides(n) {
  showCourseSlides(slideIndex = n);
}

function showExperienceSlides(n) {
  var i;
  var slides = document.getElementsByClassName("course-slides");
  var dots = document.getElementsByClassName("course-dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" course-active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " course-active";
}