# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for GargCans India Pvt Ltd, a manufacturer of aluminum and tinplate easy open ends (EOE) and lids. Single-page marketing website with product showcase, team information, and contact form.

## Development

This is a static HTML/CSS/JS website with no build process. To develop:

1. Open `index.html` in a browser, or serve with any local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

2. Edit files directly - changes are reflected on browser refresh

## Architecture

**Single-page structure (`index.html`):**
- Fixed header with navigation (smooth scroll to sections)
- Hero section with product slider
- About, Products, Technical Specs, Team, Contact sections
- Mobile-responsive hamburger menu

**External dependencies (loaded via CDN):**
- jQuery 3.6.0
- Slick Carousel 1.8.1 (all sliders)
- Font Awesome 4.7.0 (icons)
- Animate.css 4.1.1 (scroll animations)
- Google Fonts (Poppins)

**Key JavaScript functionality (`js/script.js`):**
- Slick slider initialization for: hero, products, background, team, and specs sliders
- Tab system for technical specifications (EOE 202/209/300/307/401)
- Mobile menu toggle
- Scroll-to-top button visibility
- Modal system for team member details
- Contact form with client-side validation only (no backend)

**Styling (`css/style.css`):**
- Brand color: `#d9a200` (gold)
- Mobile breakpoints: 1200px, 992px, 768px, 480px
- Flexbox layout throughout

## Content

Product types: EOE-202 (52mm), EOE-209 (63mm), EOE-300 (73mm), EOE-307 (83mm), EOE-401 (99mm)

Technical specification images in `/images/` follow naming convention:
- `dimensional_XXX.svg`
- `Material Specification_XXX.svg`
- `critical lab parameter_XXX.svg`
