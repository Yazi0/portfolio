# Design Guidelines for T.K. Yasiru Nimsara Portfolio Website

## Design Approach
**Reference-Based Approach** drawing inspiration from modern developer portfolios and productivity tools (GitHub Profiles, Notion, Linear, Vercel) with emphasis on clean information architecture, professional presentation, and visual impact.

**Core Design Principles:**
- Clarity and professionalism over decoration
- Strategic use of contrast to highlight achievements
- Information hierarchy that guides visitors naturally
- Modern minimalism with purposeful visual elements

---

## Color Palette

### Dark Mode (Primary)
- **Background Primary**: 222 12% 8%
- **Background Secondary**: 222 12% 12%
- **Background Elevated**: 222 12% 16%
- **Primary Brand**: 217 91% 60% (Professional blue)
- **Accent**: 142 71% 45% (Success green for CTAs)
- **Text Primary**: 210 20% 98%
- **Text Secondary**: 215 20% 65%
- **Border**: 217 33% 17%

### Light Mode
- **Background Primary**: 0 0% 100%
- **Background Secondary**: 220 13% 97%
- **Background Elevated**: 220 13% 95%
- **Primary Brand**: 217 91% 50%
- **Accent**: 142 71% 40%
- **Text Primary**: 222 47% 11%
- **Text Secondary**: 215 16% 47%
- **Border**: 214 32% 91%

---

## Typography

### Font Families
- **Primary (Headings)**: Inter (600, 700 weights) via Google Fonts
- **Body Text**: Inter (400, 500 weights)
- **Code/Tech**: JetBrains Mono (400 weight) for technology tags

### Type Scale
- **Hero Title**: text-5xl md:text-6xl lg:text-7xl, font-bold
- **Section Headings**: text-3xl md:text-4xl, font-semibold
- **Subsection Headings**: text-xl md:text-2xl, font-semibold
- **Body Large**: text-lg, font-normal
- **Body Regular**: text-base, font-normal
- **Body Small**: text-sm, font-normal
- **Tech Tags**: text-xs, font-mono

---

## Layout System

### Spacing Primitives
Primary spacing units: **2, 4, 6, 8, 12, 16, 20, 24, 32**
- Component padding: p-4, p-6, p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Grid gaps: gap-6, gap-8
- Card spacing: p-6 md:p-8

### Container Strategy
- **Max Width**: max-w-7xl for main content
- **Project Cards**: max-w-6xl
- **Text Content**: max-w-4xl for readability
- **Padding**: px-4 sm:px-6 lg:px-8

---

## Component Library

### Navigation
- **Fixed navbar** with backdrop blur (backdrop-blur-md bg-background/80)
- Logo/name on left (font-bold text-xl)
- Navigation links: About, Projects, Skills, Education, Contact
- Search icon button (triggers searchbar overlay)
- Theme toggle (sun/moon icon)
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16

### Hero Section
- **Full-width hero** (min-h-[85vh])
- Large profile image (rounded-2xl, w-64 h-64 md:w-80 md:h-80, subtle shadow)
- Name as primary heading with gradient text effect
- Professional title/role (text-xl text-muted-foreground)
- Brief objective statement (max-w-2xl)
- CTA buttons: "View Projects" (primary) and "Download Resume" (outline with blur backdrop)
- Subtle animated gradient background or geometric pattern
- Social links (GitHub, LinkedIn) as icon buttons

### Search Functionality
- **Overlay searchbar** (full-screen or top-section)
- Large search input with icon (h-14 text-lg)
- Real-time filtering of projects, skills, and education
- Results displayed as cards below search
- Escape to close, smooth fade in/out transitions
- Dark backdrop (bg-black/50 backdrop-blur-sm)

### Projects Section
- **Grid layout**: grid-cols-1 md:grid-cols-2 gap-8
- Project cards with:
  - Project thumbnail/icon area (h-48 with gradient background or mockup image)
  - Title (text-2xl font-semibold)
  - Technology stack as badges (rounded-full px-3 py-1 bg-secondary text-xs)
  - Key features as bullet list (text-sm)
  - "View Details" button (subtle, outline variant)
- Hover effect: subtle lift (hover:scale-105 transition) and border glow
- Card background: bg-card with border

### Skills Section
- **Three-column layout** on desktop
  - Technical Skills (Programming languages, frameworks)
  - Tools & Technologies
  - Soft Skills (Leadership, Time Management, etc.)
- Each skill as pill/badge (rounded-lg px-4 py-2 bg-secondary/50)
- Icons from Heroicons for visual interest
- Organized by category with clear headings

### Education Timeline
- **Vertical timeline** with connector line
- Timeline nodes with icons
- Each entry:
  - Institution name (font-semibold text-lg)
  - Degree/qualification
  - Year (text-muted-foreground)
  - Achievement highlights if applicable
- Alternating alignment for visual interest (desktop only)

### Contact Section
- **Two-column layout**
  - Left: Contact information cards (email, phone, GitHub, LinkedIn)
  - Right: Contact form (name, email, message fields)
- Contact info as clickable cards with icons
- Form with modern inputs (border-b focus styles, no heavy borders)
- Submit button (w-full primary variant)

### Footer
- **Three-column layout** (desktop) / stacked (mobile)
  - Left: Name and brief tagline
  - Center: Quick navigation links
  - Right: Social media icons
- Bottom: Copyright text (text-sm text-muted-foreground)
- Divider line above footer
- Background: bg-secondary/30
- Padding: py-12

---

## Visual Enhancements

### Cards & Containers
- Border radius: rounded-xl for cards, rounded-lg for smaller elements
- Border: border border-border
- Shadow: Subtle on cards (shadow-sm), elevated on hover (shadow-md)
- Background: bg-card

### Buttons
- Primary: bg-primary text-primary-foreground, rounded-md
- Outline: variant="outline" with backdrop-blur when on images
- Heights: h-10 for regular, h-11 for prominent CTAs
- Padding: px-6

### Badges/Tags
- Technology tags: rounded-full px-3 py-1 text-xs bg-primary/10 text-primary
- Skill badges: rounded-lg px-4 py-2 bg-secondary
- Border variants for different categories

### Animations
- **Minimal and purposeful only**
- Navbar: Smooth scroll reveal/hide
- Cards: hover:scale-[1.02] transition-transform duration-200
- Search overlay: Fade in/out (transition-opacity)
- Page transitions: Smooth scroll behavior
- NO unnecessary scroll animations or parallax

---

## Images

### Hero Image
- **Professional headshot or developer-themed illustration**
- Placement: Center or right side of hero section
- Size: 256x256 to 320x320 pixels (md:w-80 h-80)
- Style: Rounded-2xl with subtle shadow and border
- Alt text: "T.K. Yasiru Nimsara - Full Stack Developer"

### Project Thumbnails
- **Two project card images needed**
  1. Travelling Web Application - Travel/destination themed (beaches, maps, UI mockup)
  2. Food Ordering Application - Food/restaurant themed (food delivery UI, restaurant interface)
- Placement: Top section of each project card
- Size: Full card width, h-48
- Style: Rounded-t-xl (top corners only)
- Can use gradient overlays if images unavailable

### Background Elements
- Subtle geometric pattern or gradient mesh in hero section
- Optional: Dot grid pattern in background (low opacity)
- NO stock photos of random people or generic "technology" imagery

---

## Responsive Behavior

- **Mobile (< 768px)**: Single column, stack all content, full-width cards
- **Tablet (768px - 1024px)**: Two-column project grid, maintain readability
- **Desktop (> 1024px)**: Full multi-column layouts, max content width

### Breakpoint-Specific
- Navbar: Hamburger menu below md
- Hero: Stack image and text on mobile, side-by-side on desktop
- Skills: 1 column mobile, 2 tablet, 3 desktop
- Footer: Stack columns on mobile

---

## Accessibility

- High contrast ratios (WCAG AA minimum)
- Focus indicators on all interactive elements (ring-2 ring-primary)
- Semantic HTML (nav, main, section, article, footer)
- ARIA labels for icon-only buttons
- Keyboard navigation support throughout
- Skip-to-content link for screen readers