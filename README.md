# Jerk Riley's Billiards & Irish Pub Website

A modern, mobile-first website for Jerk Riley's Billiards and Irish Pub in Ashland, Kentucky.

## ✨ Features

- **Mobile-First Design** - Optimized for mobile users with responsive layout
- **Lightweight & Fast** - Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- **Modern UI/UX** - Clean, artistic design with smooth animations
- **Customer Signup Form** - Ready for Zapier integration
- **Smooth Navigation** - Auto-hiding navbar on mobile, smooth scrolling
- **Performance Optimized** - Minimal dependencies, fast load times
- **Accessibility** - Semantic HTML and proper ARIA labels

## 🎨 Design

The design features:
- Vintage Irish pub aesthetic matching the logo
- Cream and deep green color palette (#F5F0E8, #1B4332)
- Playfair Display for headings, Inter for body text
- Subtle animations and micro-interactions
- Card-based sections with depth

## 📁 Project Structure

```
jerks/
├── index.html      # Main HTML file
├── styles.css      # All styles (mobile-first, responsive)
├── script.js       # Navigation, forms, animations
├── logo.png        # Pub logo (transparent)
├── images/         # Gallery images
│   ├── bar-interior.jpg
│   ├── hero-1.jpeg
│   └── hero-2.jpeg
├── serve.py        # Local dev server
└── README.md       # This file
```

## 🚀 Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jerk Riley's website"
   ```

3. Connect to GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/" (root) folder
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 🔧 Customization

### Form Integration

To connect the signup form to Zapier (or another service):

1. Open `script.js`
2. Find the form submission handler (line ~84)
3. Uncomment and update the fetch URL:
   ```javascript
   await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
   });
   ```

### Colors

Edit CSS variables in `styles.css` (lines 4-12):
```css
--color-cream: #F5F0E8;
--color-green-dark: #1B4332;
--color-green-medium: #2D6A4F;
--color-gold: #D4A574;
```

### Content

All content can be edited directly in `index.html`:
- Hero section: Hero logo and tagline
- About section: Welcome text and features
- Gallery section: Images from the pub
- Menu section: Menu links and info
- Contact info: Unified contact card with location, phone, hours

## 📱 Mobile Experience

The website is designed mobile-first with:
- Touch-friendly navigation
- Optimized typography for small screens
- Fast-loading images
- No horizontal scrolling
- Accessible tap targets (44×44px minimum)

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

Jerk Riley's Billiards & Irish Pub
- Address: 1612 Greenup Avenue, Ashland, KY 41101
- Phone: (606) 212-3418
- Online Ordering: [DoorDash](https://www.doordash.com)

## 📄 License

© 2025 Jerk Riley's. All rights reserved.
