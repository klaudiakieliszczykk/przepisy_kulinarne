document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    setInterval(nextSlide, 3000); // Automatyczne przewijanie co 3 sekundy
});