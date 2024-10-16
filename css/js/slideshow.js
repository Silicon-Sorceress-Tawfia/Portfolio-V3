let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-image");

function showSlides() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Initial call
showSlides();
