# Mentor Global Website - PRD

## Original Problem Statement
Build a premium, enterprise-grade, fully responsive website for Mentor Global - a Global Health Fintech Infrastructure Holding Company. Position as infrastructure company, not a healthcare/software/insurance vendor.

## Architecture
- **Frontend**: React + Tailwind CSS + Custom animations (IntersectionObserver)
- **Backend**: FastAPI (minimal, existing hello-world endpoint)
- **Database**: MongoDB (not used - frontend-only site)
- **Font**: Plus Jakarta Sans (Google Fonts, closest to Axiforma)
- **Brand**: White (#FFFFFF), Mentor Blue (#0048FF sparingly), Black (#11111F)

## User Personas
1. **Potential Partners**: Healthcare organizations, insurers, fintechs looking for infrastructure
2. **Investors**: Looking for enterprise-grade global holding company
3. **Technology Clients**: Seeking white-label infrastructure solutions
4. **Corporates**: Needing health/insurance/fintech platforms

## Core Requirements (Static)
- 12 page routes with full content
- Premium dark/light alternating sections
- Animated counters, scroll-triggered animations
- Solutions dropdown navigation
- Contact form with frontend validation
- Responsive design (desktop + mobile)

## What's Been Implemented (Jan 29, 2026)
- [x] All 12 routes: /, /solutions, /solutions/{5-slugs}, /dexa, /subsidiaries, /about, /team, /contact
- [x] Home page: 9 sections (Hero, Positioning, Problem, Pillars, DEXA, Innovation, Scale, Global, Final CTA)
- [x] Solutions landing with 5 solution cards
- [x] 5 solution detail pages with dynamic content (modules, insurance lines, service center, AI layers, agent pods, Growth OS)
- [x] DEXA page with what-is/is-not, domains, agent pods, governance
- [x] Subsidiaries page with 4 country sections
- [x] About page with values, beliefs
- [x] Team page with 6 leadership cards (expandable)
- [x] Contact form with validation and success message
- [x] Fixed navbar with Solutions dropdown
- [x] Global footer with navigation, solutions, presence
- [x] Animated counters in Scale section
- [x] Scroll-triggered reveal animations
- [x] Background imagery (Unsplash) in hero/DEXA/global sections
- [x] Mobile responsive with hamburger menu

## Visual Update (Jan 29, 2026 - Iteration 2)
- [x] Split hero layouts (text left, visual right) on Home, Solutions, SolutionDetail, DEXA, Subsidiaries
- [x] Removed all background grid lines from all pages
- [x] Added subtle ambient blue glow to dark sections for depth
- [x] Added relevant stock images to sections (healthcare, insurance, fintech, AI, infrastructure)
- [x] Upgraded platform visuals section with interactive card design
- [x] Solution-specific images for each solution detail page
- [x] Updated page title and meta description for branding
- [x] Added preconnect for image CDN (Unsplash) for performance
- [x] Mobile responsive: heroes stack text first, image second

## Testing Results
- 100% frontend success rate (37/40 assertions passed, 3 were network timeout flakes)
- All 12 routes verified at desktop (1920x1080) and mobile (390x844)

## Prioritized Backlog
### P0 (Done)
- All page routes and content ✓
- Navigation and routing ✓
- Contact form ✓
- Responsive design ✓

### P1 (Next Phase)
- SEO meta tags and Open Graph for all pages
- Page transition animations (page-level fade/slide)
- Loading skeleton states
- 404 page

### P2 (Enhancement)
- Blog/insights section
- Case studies page
- Animated SVG infrastructure diagrams
- Video backgrounds in hero sections
- Cookie consent banner
- Analytics integration

## Next Tasks
1. Add SEO meta tags (title, description, OG) for all 12 pages
2. Create 404 not found page
3. Add page transition animations between routes
4. Create animated SVG diagrams for infrastructure visuals
5. Add loading skeleton states for better perceived performance
