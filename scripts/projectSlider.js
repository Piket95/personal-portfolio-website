document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.getElementById('projects-left-arrow');
    const arrowRight = document.getElementById('projects-right-arrow');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Set initial state of arrows
    updateArrows();
    
    // Function to update arrow visibility
    function updateArrows() {
        if (currentSlide === 0) {
            arrowLeft.style.opacity = '0';
            arrowLeft.style.pointerEvents = 'none';
        } else {
            arrowLeft.style.opacity = '1';
            arrowLeft.style.pointerEvents = 'all';
        }

        if (currentSlide === totalSlides - 1) {
            arrowRight.style.opacity = '0';
            arrowRight.style.pointerEvents = 'none';
        } else {
            arrowRight.style.opacity = '1';
            arrowRight.style.pointerEvents = 'all';
        }
    }
    
    // Function to handle slide changes
    window.changeSlide = function(direction) {
        const newIndex = currentSlide + direction;
        if (newIndex >= 0 && newIndex < totalSlides) {
            goToSlide(newIndex);
        }
    };
    
    // Function to move to a specific slide
    function goToSlide(index) {
        // Ensure index is within bounds
        index = Math.max(0, Math.min(index, totalSlides - 1));
        
        // Update current slide
        currentSlide = index;
        
        // Calculate the transform value
        const slideWidth = 100; // 100% of the container
        const translateX = -currentSlide * slideWidth;
        
        // Apply the transform with smooth transition
        sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update arrow states
        updateArrows();
    }
    
    // Event listeners for arrow buttons
    if (arrowLeft) {
        arrowLeft.addEventListener('click', () => changeSlide(-1));
    }
    
    if (arrowRight) {
        arrowRight.addEventListener('click', () => changeSlide(1));
    }
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (sliderTrack) {
        sliderTrack.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        sliderTrack.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to consider it a swipe
        
        // Swipe left (next slide)
        if (touchStartX - touchEndX > swipeThreshold && currentSlide < totalSlides - 1) {
            changeSlide(1);
        } 
        // Swipe right (previous slide)
        else if (touchEndX - touchStartX > swipeThreshold && currentSlide > 0) {
            changeSlide(-1);
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
            changeSlide(1);
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Force a reflow of the slider to prevent layout issues
            sliderTrack.style.transition = 'none';
            const translateX = -currentSlide * 100;
            sliderTrack.style.transform = `translateX(${translateX}%)`;
            
            // Force a reflow
            void sliderTrack.offsetHeight;
            
            // Re-enable transitions
            sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        }, 250);
    });
});
