// ===================================
// Menu Page JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle (from main site)
    initMobileNav();
    
    // Menu Category Filtering
    initMenuFiltering();
    
    // Smooth Scroll
    initSmoothScroll();
    
    // Sticky Navigation Shadow
    initStickyNavShadow();
    
    // Menu Items Animation on Scroll
    initScrollAnimations();
});

// ===================================
// Mobile Navigation
// ===================================
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(event.target) && 
                !navToggle.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===================================
// Menu Filtering
// ===================================
function initMenuFiltering() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuSections = document.querySelectorAll('.menu-section');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu sections
            filterMenuSections(category, menuSections);
            
            // Scroll to first visible section
            setTimeout(() => {
                const firstVisibleSection = document.querySelector('.menu-section:not(.hidden)');
                if (firstVisibleSection) {
                    const offset = 150; // Account for sticky nav
                    const elementPosition = firstVisibleSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        });
    });
}

function filterMenuSections(category, menuSections) {
    if (category === 'all') {
        // Show all sections
        menuSections.forEach(section => {
            section.classList.remove('hidden');
            // Trigger reflow for animation
            void section.offsetWidth;
        });
    } else {
        // Show only matching category
        menuSections.forEach(section => {
            const sectionCategory = section.getAttribute('data-category');
            if (sectionCategory === category) {
                section.classList.remove('hidden');
                // Trigger reflow for animation
                void section.offsetWidth;
            } else {
                section.classList.add('hidden');
            }
        });
    }
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href === '#' || href.length <= 1) return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const offset = 150;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Sticky Navigation Shadow
// ===================================
function initStickyNavShadow() {
    const menuNavWrapper = document.querySelector('.menu-nav-wrapper');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (menuNavWrapper) {
            if (scrollTop > 200) {
                menuNavWrapper.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                menuNavWrapper.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        
        observer.observe(item);
    });
    
    // Observe section headers
    const sectionHeaders = document.querySelectorAll('.menu-section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(header);
    });
}

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add to cart functionality (placeholder for future implementation)
function addToCart(itemName, itemPrice) {
    console.log(`Adding to cart: ${itemName} - ${itemPrice}`);
    // This will be implemented when you build the ordering system
    alert(`${itemName} added to cart! (Cart functionality coming soon)`);
}

// Track menu interactions (for analytics)
function trackMenuInteraction(action, label) {
    // Placeholder for analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'Menu',
            'event_label': label
        });
    }
    console.log(`Track: ${action} - ${label}`);
}

// ===================================
// Export for potential use in other scripts
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterMenuSections,
        addToCart,
        trackMenuInteraction
    };
}
