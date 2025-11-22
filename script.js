// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===================================
// Navbar Hide on Scroll Down (Mobile)
// ===================================
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
let scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth < 768) {
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down & past threshold
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, { passive: true });

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Form Handling
// ===================================
const signupForm = document.getElementById('signupForm');
const formSuccess = document.getElementById('formSuccess');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(signupForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        promotions: formData.get('promotions') === 'on'
    };
    
    // TODO: Replace with actual API endpoint (Zapier webhook, etc.)
    console.log('Form submitted:', data);
    
    // Simulate API call
    try {
        // await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });
        
        // Show success message
        signupForm.classList.add('submitted');
        formSuccess.classList.add('active');
        
        // Reset form
        signupForm.reset();
        
        // Optional: scroll to success message on mobile
        if (window.innerWidth < 768) {
            setTimeout(() => {
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('Oops! Something went wrong. Please try again or call us at (606) 212-3418.');
    }
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.feature-card, .gallery-item, .contact-info-card, .contact-form-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Performance: Reduce animations on low-end devices
// ===================================
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    document.documentElement.style.setProperty('--transition-base', '0.15s');
    document.documentElement.style.setProperty('--transition-slow', '0.2s');
}

// ===================================
// Preload critical images
// ===================================
const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
};

preloadImage('logo.png');

// ===================================
// Add loading class to body when page loads
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Handle viewport height on mobile (fix for iOS)
// ===================================
const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setViewportHeight();
window.addEventListener('resize', setViewportHeight);

// ===================================
// Debug: Log page load performance
// ===================================
window.addEventListener('load', () => {
    if (performance && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});
