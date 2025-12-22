# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Static single-page website for Garg Industries, a manufacturer of tinplate easy open ends (EOE) and metal can lids based in Uttarakhand, India.

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
├── index.html      # Main website (single page)
├── css/            # Stylesheets
├── js/             # JavaScript
└── images/         # Product images, logos
    ├── EOE-401.png
    ├── EOE-300.png
    └── ...
```

## Key Sections

- **Hero** - Company intro with EOE-401 product image
- **About** - Company history, stats (10+ years, 100% quality, Pan-India)
- **Products** - EOE 401 (99mm) and EOE 300 (73mm)
- **Capabilities** - Manufacturing info
- **Clients** - Vadilal Industries, Bharat Dairy Products
- **Contact** - Address, phone, email, contact form

## Styling

- Primary color: `#C41E3A` (red)
- Fonts: Bebas Neue (headings), Outfit (body)
- Responsive breakpoints: 992px, 768px

## Deployment

Hosted on GitHub Pages. To deploy:

```bash
git add .
git commit -m "message"
git push
```

Changes go live automatically at https://csxa22.github.io
