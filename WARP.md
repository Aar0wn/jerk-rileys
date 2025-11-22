# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **mobile-first, single-page website** for Jerk Riley's Billiards & Irish Pub in Ashland, Kentucky. The site is built with **pure HTML, CSS, and vanilla JavaScript** (no frameworks) for maximum performance and simplicity.

**Key Characteristics:**
- Zero build process - edit files directly and refresh browser
- Optimized for mobile users (primary audience)
- Deployed via GitHub Pages at: https://github.com/Aar0wn/jerk-rileys.git
- Total deployable size: ~2.2MB

## Development Commands

### Local Development Server
```bash
# Start the local development server (Python 3)
python3 serve.py

# Server runs at http://localhost:8000
# Test on mobile: http://YOUR_LOCAL_IP:8000
```

### Testing
This is a static site with no automated tests. Manual testing workflow:
1. Start local server with `python3 serve.py`
2. Open http://localhost:8000 in browser
3. Test mobile view using browser DevTools (Cmd/Ctrl+Shift+M)
4. Test on actual mobile device using local IP address

### Deployment
Site deploys automatically to GitHub Pages when pushed to `main` branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Pages URL will be: `https://Aar0wn.github.io/jerk-rileys/`

## Code Architecture

### File Structure
```
jerks/
├── index.html          # Main single-page website
├── menu.html           # Separate full menu page (secondary)
├── styles.css          # All website styles (mobile-first)
├── script.js           # Main navigation and interaction logic
├── carousel.js         # Gallery carousel functionality
├── logo.png            # Optimized logo (797KB)
├── gallery/            # Gallery images
│   ├── bar-interior.jpg
│   ├── hero-1.jpeg
│   └── hero-2.jpeg
└── serve.py            # Local development server
```

### Key Files to Understand

**index.html** - Single-page application structure:
- Hero section with logo and CTA buttons
- About section (4 feature cards)
- Gallery section (static image grid)
- Menu section (links to menu.html and DoorDash)
- Events section (email signup)
- Contact section (unified contact card + signup form)
- Comprehensive SEO meta tags and JSON-LD structured data

**styles.css** - Mobile-first responsive styles:
- CSS variables define color palette (lines 4-34)
- Mobile styles are default (< 768px)
- Tablet breakpoint: 768px
- Desktop breakpoint: 1024px
- Uses Playfair Display for headings, Inter for body

**script.js** - Core functionality:
- Mobile hamburger navigation with auto-hide on scroll down
- Smooth scrolling for anchor links
- Form submission handler (lines 84-128) - **currently logs to console only**
- Intersection Observer for scroll animations
- iOS viewport height fix
- Performance tracking

**carousel.js** - Gallery image carousel:
- Dynamically loads images from `galleryImages` array (lines 6-10)
- Touch/swipe support for mobile
- Keyboard navigation (arrow keys)
- Auto-play with 5-second intervals
- Pause on hover

### Design System

**Color Palette** (defined in styles.css):
- `--color-cream`: #F5F0E8 (background)
- `--color-green-dark`: #1B4332 (primary brand color)
- `--color-green-medium`: #2D6A4F (accents)
- `--color-gold`: #D4A574 (CTAs, highlights)

**Typography:**
- Headings: Playfair Display (serif, 600-900 weight)
- Body: Inter (sans-serif, 300-600 weight)

**Spacing System:**
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 2rem
- `--spacing-lg`: 3rem
- `--spacing-xl`: 4rem

## Common Development Tasks

### Adding Gallery Images
1. Add optimized image to `gallery/` directory
2. Update `galleryImages` array in `carousel.js` (lines 6-10)
3. Image will automatically appear in carousel

### Connecting the Signup Form
The form currently logs data to console. To connect to Zapier or another backend:

1. Open `script.js`
2. Find the form handler (lines 102-108)
3. Uncomment and update the fetch URL:
```javascript
await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### Updating Content
All content is in `index.html`. Key sections:
- **Hero**: Lines 109-143 (logo, tagline, CTAs)
- **About**: Lines 146-182 (welcome text, feature cards)
- **Menu**: Lines 185-200 (menu intro, CTA buttons)
- **Gallery**: Managed via `carousel.js`
- **Contact**: Lines in contact section (location, phone, hours)

### Changing Colors
Edit CSS variables in `styles.css` (lines 4-12):
```css
--color-cream: #F5F0E8;
--color-green-dark: #1B4332;
--color-green-medium: #2D6A4F;
--color-gold: #D4A574;
```

### Optimizing Images
Images should be optimized before adding:
- Use WebP format when possible (with PNG/JPG fallback)
- Compress to reasonable file sizes (< 500KB for photos)
- Logo is already optimized at 797KB

## Mobile-First Approach

This site is designed **mobile-first** because most pub visitors browse on phones:

1. **Default styles target mobile** (< 768px)
2. **Tablet/desktop styles are progressive enhancements**
3. **Touch-friendly targets** (44×44px minimum)
4. **Auto-hiding navbar** on scroll down (mobile only)
5. **Hamburger menu** slides in from right side
6. **Viewport height fix** for iOS Safari

When adding features, always test mobile view first.

## SEO and Performance

### SEO Features (in index.html)
- Comprehensive meta tags (lines 8-36)
- Open Graph tags for social sharing (lines 16-23)
- JSON-LD structured data for Google (lines 43-81)
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)

### Performance Optimizations
- **Zero frameworks** - pure vanilla JS
- **Lazy loading** on gallery images
- **Preconnect** to Google Fonts
- **Intersection Observer** for animations (more performant than scroll events)
- **Hardware detection** reduces animations on low-end devices (script.js lines 158-161)

## Navigation Behavior

### Mobile Navigation (< 768px)
- Hamburger menu icon in top-right
- Clicking opens full-screen overlay menu from right
- Menu auto-hides when scrolling **down** (past 100px)
- Menu reappears when scrolling **up**
- Clicking any link closes the menu
- Clicking outside menu closes it

### Desktop Navigation (≥ 768px)
- Horizontal navigation bar
- No auto-hide behavior
- Links always visible

## Browser Support

Targets modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari 12+
- Chrome Mobile

**Does NOT support:** IE11 or older browsers

## Contact Information

When updating contact details in code:
- **Address**: 1612 Greenup Avenue, Ashland, KY 41101
- **Phone**: (606) 212-3418
- **DoorDash**: https://www.doordash.com
- **Coordinates**: 38.4784, -82.6379

Update in both `index.html` (multiple locations) and structured data (lines 53-65).

## Files NOT to Commit

- `logo-original.png` (unoptimized 1.3MB version)
- `README.md` (development documentation)
- `SUMMARY.md` (project summary)
- `serve.py` (local dev server only)

These are useful for development but not needed in production deployment.
