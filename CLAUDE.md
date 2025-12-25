# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Static single-page website for Garg Industries, a manufacturer of tinplate easy open ends (EOE) and aerosol can components based in Uttarakhand, India.

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
├── CLAUDE.md           # This file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Navigation, animations, form handling
└── images/
    ├── EOE-401.png     # EOE 401 product (99mm)
    ├── EOE-300.png     # EOE 300 product (73mm)
    ├── dome-cone-52.jpg # 52 Dia Dome & Cone
    └── dome-cone-65.jpg # 65 Dia Dome & Cone
```

## Key Sections

- **Hero** - Company intro with EOE-401 product image
- **About** - Company history, stats (10+ years, 100% quality, Pan-India)
- **Products** - 2x2 grid layout:
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
- Products grid: 2x2 on desktop, 1 column on mobile

## Deployment

Hosted on GitHub Pages. To deploy:

```bash
git add .
git commit -m "message"
git push
```

Changes go live automatically at https://csxa22.github.io
