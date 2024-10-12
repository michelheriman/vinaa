let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Wrap around
    const translateXValue = -currentSlide * 100; // Move by 100% of the width
    document.querySelector('.slider').style.transform = `translateX(${translateXValue}%)`;
}
