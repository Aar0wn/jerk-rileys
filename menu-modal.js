// Menu Modal JavaScript
(function() {
    'use strict';
    
    let currentCategory = 'appetizers';
    
    // Initialize modal when DOM is ready
    function initMenuModal() {
        createModalHTML();
        attachEventListeners();
        renderMenuItems(currentCategory);
    }
    
    // Create modal HTML structure dynamically
    function createModalHTML() {
        const modalHTML = `
            <div class="menu-modal" id="menuModal">
                <div class="menu-modal-backdrop"></div>
                <div class="menu-modal-container">
                    <div class="menu-modal-header">
                        <h2 class="menu-modal-title">Our Menu</h2>
                        <button class="menu-modal-close" id="menuModalClose" aria-label="Close menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="menu-modal-tabs" id="menuModalTabs">
                        <button class="menu-modal-tab active" data-category="appetizers">Appetizers</button>
                        <button class="menu-modal-tab" data-category="wings">Wings</button>
                        <button class="menu-modal-tab" data-category="burgers">Burgers</button>
                        <button class="menu-modal-tab" data-category="sandwiches">Sandwiches</button>
                        <button class="menu-modal-tab" data-category="pizzas">Pizzas</button>
                        <button class="menu-modal-tab" data-category="entrees">Irish Classics</button>
                        <button class="menu-modal-tab" data-category="desserts">Desserts</button>
                    </div>
                    
                    <div class="menu-modal-body">
                        <div class="menu-modal-grid" id="menuModalGrid"></div>
                    </div>
                    
                    <div class="menu-modal-footer">
                        <a href="https://www.doordash.com" target="_blank" class="menu-modal-cta">
                            Order on DoorDash
                        </a>
                        <a href="tel:+16062123418" class="menu-modal-cta btn-outline" style="background: transparent; border: 2px solid var(--color-green-dark); color: var(--color-green-dark);">
                            Call for Pickup
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Attach all event listeners
    function attachEventListeners() {
        const modal = document.getElementById('menuModal');
        const closeBtn = document.getElementById('menuModalClose');
        const backdrop = modal.querySelector('.menu-modal-backdrop');
        const tabs = document.querySelectorAll('.menu-modal-tab');
        
        // Close button
        closeBtn.addEventListener('click', closeModal);
        
        // Backdrop click
        backdrop.addEventListener('click', closeModal);
        
        // ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        // Category tabs
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                switchCategory(category);
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Open modal
    window.openMenuModal = function() {
        const modal = document.getElementById('menuModal');
        document.body.classList.add('menu-modal-open');
        modal.classList.add('active');
    };
    
    // Close modal
    function closeModal() {
        const modal = document.getElementById('menuModal');
        document.body.classList.remove('menu-modal-open');
        modal.classList.remove('active');
    }
    
    // Switch category
    function switchCategory(category) {
        currentCategory = category;
        renderMenuItems(category);
    }
    
    // Render menu items for a category
    function renderMenuItems(category) {
        const grid = document.getElementById('menuModalGrid');
        const items = menuData[category] || [];
        
        grid.innerHTML = items.map(item => createMenuItemCard(item)).join('');
        
        // Lazy load images
        lazyLoadImages();
    }
    
    // Create menu item card HTML
    function createMenuItemCard(item) {
        const tagsHTML = item.tags.length > 0 
            ? `<div class="menu-item-tags">
                ${item.tags.map(tag => `<span class="menu-item-tag tag-${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`).join('')}
               </div>`
            : '';
        
        const saucesHTML = item.sauces 
            ? `<div class="menu-item-sauces">Sauces: ${item.sauces}</div>`
            : '';
        
        return `
            <div class="menu-item-card">
                <div class="menu-item-image-wrapper loading">
                    <img 
                        class="menu-item-image" 
                        data-src="${item.image}" 
                        alt="${item.name}"
                        loading="lazy"
                    />
                    <div class="menu-item-overlay">
                        <h3 class="menu-item-name-overlay">${item.name}</h3>
                        <span class="menu-item-price-badge">$${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="menu-item-content">
                    <p class="menu-item-description">${item.description}</p>
                    ${saucesHTML}
                    ${tagsHTML}
                </div>
            </div>
        `;
    }
    
    // Lazy load images
    function lazyLoadImages() {
        const images = document.querySelectorAll('.menu-item-image[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const wrapper = img.closest('.menu-item-image-wrapper');
                    
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    
                    img.onload = function() {
                        wrapper.classList.remove('loading');
                    };
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMenuModal);
    } else {
        initMenuModal();
    }
})();
