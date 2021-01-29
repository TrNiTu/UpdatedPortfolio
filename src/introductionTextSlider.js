var slideIndex = 1;
showExperienceSlides(slideIndex);

function increaseExperienceSlides(n) {
  showExperienceSlides(slideIndex += n);
}

function experienceSlides(n) {
  showExperienceSlides(slideIndex = n);
}

function showExperienceSlides(n) {
  var i;
  var slides = document.getElementsByClassName("introduction-slides");
  var dots = document.getElementsByClassName("introduction-dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}