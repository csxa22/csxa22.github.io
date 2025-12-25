# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Static single-page website for **Garg Industries** (brand: **Endo Cans**), a manufacturer of precision-engineered packaging for India's food and beverage industry, based in Uttarakhand, India.

**Live Site:** https://csxa22.github.io

## Development

No build process required. To develop locally:

```bash
python -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in browser.

## File Structure

```
├── index.html          # Main website (single page)
├── README.md           # Project readme
├── CLAUDE.md           # This file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Navigation, animations, form handling
└── images/
    ├── EOE-401.png     # EOE 401 product (99mm)
    ├── EOE-300.png     # EOE 300 product (73mm)
    ├── dome-cone-52.png # 52 Dia Dome & Cone
    └── dome-cone-65.jpg # 65 Dia Dome & Cone
```

## Key Sections

- **Hero** - "Endo Cans" branding with EOE-401 product image
- **About** - Company history (founded 2015), location (SIDCUL Pantnagar, Uttarakhand)
- **Products** - 2x2 grid layout (500px image height):
  - EOE 401 (99mm, 0.21mm thickness, Food Cans)
  - EOE 300 (73mm, 0.21mm thickness, Food Cans)
  - 52 Dia Dome & Cone (52mm, 0.28mm thickness, Aerosol Cans)
  - 65 Dia Dome & Cone (65mm, 0.28mm thickness, Aerosol Cans)
- **Capabilities** - Manufacturing info
- **Clients** - Vadilal Industries, Bharat Dairy Products
- **Contact** - Address, phone, email, contact form

## Styling

- Primary color: `#C41E3A` (red)
- Fonts: Bebas Neue (headings), Outfit (body)
- Responsive breakpoints: 992px, 768px
- Products grid: 2x2 on desktop (max-width 900px), 1 column on mobile
- Product image background: `linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)`

## Contact Info

- **Email:** gargindustries153@gmail.com
- **Phone:** +91 9412281207 (Rakesh Agarwal), +91 7409503128 (Aayush Agarwal)
- **Address:** Plot no. 15, Sector 3, IIE Pantnagar, Rudrapur (U.S.Nagar) - 263153, Uttarakhand

## Deployment

Hosted on GitHub Pages. To deploy:

```bash
git add .
git commit -m "message"
git push
```

Changes go live automatically at https://csxa22.github.io
