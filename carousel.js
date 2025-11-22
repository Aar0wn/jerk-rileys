// ===================================
// Carousel - Dynamic Image Loader
// ===================================

// List of images in the gallery folder
const galleryImages = [
    { src: 'gallery/bar-interior.jpg', alt: 'Cozy Bar Interior at Jerk Riley\'s' },
    { src: 'gallery/hero-1.jpeg', alt: 'Fun Times at Jerk Riley\'s Pub' },
    { src: 'gallery/hero-2.jpeg', alt: 'Live Music & Entertainment' }
];

let currentSlide = 0;
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

// Initialize carousel
function initCarousel() {
    // Create slides
    galleryImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? 'eager' : 'lazy'}">`;
        carouselTrack.appendChild(slide);
    });

    // Create dots
    galleryImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot${index === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }

    // Auto-play (optional)
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
}

function goToSlide(n) {
    currentSlide = n;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    updateCarousel();
}

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    initCarousel();
}
