// This is optional, but can be used for pausing or controlling the slider in the future
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.hero-slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeSlide, 5000); // Change image every 5 seconds



