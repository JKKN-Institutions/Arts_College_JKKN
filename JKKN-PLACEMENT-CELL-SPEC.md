# JKKN Institutions Placement Cell — Complete Implementation Specification

> **Domain:** placements.jkkn.ac.in
> **Generated:** 2026-04-03
> **Skills Applied:** brand-styling, jkkn-terminologies, mobile-bottom-navbar, ultra-ui-ux-designer

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Application Understanding](#2-application-understanding)
3. [Tech Stack](#3-tech-stack)
4. [Design System Foundation](#4-design-system-foundation)
5. [Typography System](#5-typography-system)
6. [Spacing & Layout System](#6-spacing--layout-system)
7. [Component Library](#7-component-library)
8. [Global Components](#8-global-components)
9. [Mobile Bottom Navigation](#9-mobile-bottom-navigation)
10. [Page Specifications with Wireframes](#10-page-specifications-with-wireframes)
11. [User Flows](#11-user-flows)
12. [Responsive Design Specifications](#12-responsive-design-specifications)
13. [Animation & Interaction Patterns](#13-animation--interaction-patterns)
14. [JKKN Terminology Compliance](#14-jkkn-terminology-compliance)
15. [Accessibility Checklist](#15-accessibility-checklist)
16. [SEO & Schema Specifications](#16-seo--schema-specifications)
17. [Image Assets Required](#17-image-assets-required)
18. [Routing Structure](#18-routing-structure)
19. [Implementation Guide](#19-implementation-guide)
20. [Quality Assurance Checklist](#20-quality-assurance-checklist)

---

## 1. Executive Summary

The JKKN Institutions Placement Cell website (placements.jkkn.ac.in) is a campus recruitment, training, and career support portal connecting 1,200+ learners across 6 JKKN colleges with 500+ industry recruiters. The design follows JKKN's established brand identity with primary green (#0b6d41), accent gold (#7db247), and warm cream (#f9f7f2) — implementing a mobile-first, accessible, and performance-optimized experience using Next.js App Router with Tailwind CSS and shadcn/ui.

The specification integrates four core JKKN skills:
- **Brand Styling** — Standardized colors, typography, spacing, and design tokens
- **JKKN Terminologies** — Learner-centered language across all content and code
- **Mobile Bottom Navbar** — Accordion-based mobile navigation with icon grid submenus
- **Ultra UI/UX Designer** — Comprehensive wireframes, component specs, and user flows

---

## 2. Application Understanding

### 2.1 Domain & Purpose

| Attribute | Value |
|-----------|-------|
| Application Type | Campus Recruitment & Career Support Portal |
| Institution | JKKN Institutions (6 colleges) |
| Primary Domain | placements.jkkn.ac.in |
| Business Model | Educational institution placement services |

### 2.2 User Personas

| Persona | Role | Goals | Technical Level |
|---------|------|-------|-----------------|
| **Learners** | Current JKKN learners seeking placements | Browse drives, register for placements, view recruiters | Basic to Moderate |
| **Learning Partners (Parents)** | Family partners of learners | View placement stats, understand career prospects | Basic |
| **Recruiters** | Industry hiring managers | Find talent, partner with JKKN, post drives | Moderate |
| **Placement Team Members** | TPO & placement coordinators | Manage drives, track placements, update content | Moderate to Advanced |

### 2.3 Key User Flows

1. **Learner Discovery Flow**: Home → Colleges → Individual College Placement → Register
2. **Recruiter Partnership Flow**: Home → Recruiters/Contact → Partnership Inquiry
3. **Drive Discovery Flow**: Home → On-Campus Drives → Filter → View Details
4. **Internship Exploration Flow**: Home → Internships → College Tab → Register
5. **AI Workshop Registration Flow**: AI Workshop → Learn → Register

### 2.4 Technical Constraints

- Framework: Next.js 16+ (App Router) with Turbopack
- Component Library: shadcn/ui (Radix primitives)
- Styling: Tailwind CSS v4 with custom theme
- Image Storage: Supabase Storage (bucket: cms-media)
- Deployment: Vercel
- Font: Poppins (Google Fonts via next/font)
- No dark mode required (light theme only for public portal)

---

## 3. Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js (App Router) | 16.1.4+ | SSR, routing, API routes |
| Language | TypeScript | 5.x | Type safety |
| Styling | Tailwind CSS | v4 | Utility-first CSS |
| UI Components | shadcn/ui (Radix) | Latest | Accessible component primitives |
| Animations | Framer Motion | v12 | Scroll animations, transitions |
| State (Mobile Nav) | Zustand | v5 | Bottom navbar state persistence |
| Font | Poppins | Google Fonts | Primary typeface |
| Icons | Lucide React | Latest | Consistent icon system |
| Image Storage | Supabase Storage | v0.8 | CMS media bucket |
| Deployment | Vercel | Latest | Edge hosting |

### Dependencies to Install

```bash
# Core
npm install next@latest react@latest react-dom@latest typescript

# UI & Styling
npm install tailwindcss @tailwindcss/forms class-variance-authority clsx tailwind-merge

# shadcn/ui (install via CLI)
npx shadcn@latest init
npx shadcn@latest add button card accordion tabs sheet scroll-area badge separator input textarea select label checkbox dialog

# Animations & State
npm install framer-motion zustand

# Icons & Font
npm install lucide-react @next/font

# Utilities
npm install react-hot-toast
```

---

## 4. Design System Foundation

### 4.1 Color Palette

#### Brand Colors (CSS Custom Properties)

```css
:root {
  /* Primary Brand */
  --green: #0b6d41;
  --brand: #0b6d41;
  --green-light: #0f8f56;
  --brand-light: #0f8f56;
  --green-dark: #03311c;
  --brand-dark: #03311c;
  --green-darker: #085032;
  --brand-glow: #0b6d411a;

  /* Accent */
  --gold: #7db247;
  --accent: #7db247;
  --gold-bright: #7db247;
  --accent-light: #65a667;
  --success: #3eb75e;

  /* Neutral & Surface */
  --background: #f9f7f2;
  --cream: #f9f7f2;
  --cream-dark: #f0f7f2;
  --foreground: #111827;
  --dark: #03311c;
  --surface-0: #fff;
  --surface-1: #f9fafb;
  --surface-2: #f0f7f2;
  --surface-3: #e5e7eb;

  /* Text */
  --text-primary: #111827;
  --heading: #111827;
  --text-secondary: #4b5563;
  --body-text: #4b5563;
  --text-tertiary: #6b7280;

  /* Border & Shadow */
  --border: #e5e7eb;
  --border-light: #e8e8e8;

  /* Semantic */
  --error: #dc2626;
  --warning: #f59e0b;
  --info: #3b82f6;
}
```

#### Tailwind Color Configuration

```js
colors: {
  brand: {
    DEFAULT: '#0b6d41',
    light: '#0f8f56',
    dark: '#03311c',
    darker: '#085032',
    glow: '#0b6d411a',
    50: '#f0fdf7',
    100: '#d4f1e4',
    200: '#a8e3c9',
    300: '#6fcfa7',
    400: '#3bb583',
    500: '#0b6d41',
    600: '#085032',
    700: '#064025',
    800: '#05301a',
    900: '#042010',
  },
  accent: {
    DEFAULT: '#7db247',
    light: '#65a667',
    bright: '#7db247',
  },
  cream: {
    DEFAULT: '#f9f7f2',
    dark: '#f0f7f2',
  },
  surface: {
    0: '#ffffff',
    1: '#f9fafb',
    2: '#f0f7f2',
    3: '#e5e7eb',
  },
}
```

#### Color Usage Matrix

| Element | Color | Hex | Tailwind Class |
|---------|-------|-----|----------------|
| Primary Buttons | Brand Green | `#0b6d41` | `bg-brand text-white` |
| Button Hover | Brand Darker | `#085032` | `hover:bg-brand-darker` |
| Hero Background | Brand Dark | `#03311c` | `bg-brand-dark` |
| Top Info Bar | Brand Dark | `#03311c` | `bg-brand-dark` |
| CTA Accents | Accent Gold | `#7db247` | `text-accent` |
| Page Background | Cream | `#f9f7f2` | `bg-cream` |
| Card Background | White | `#ffffff` | `bg-surface-0` |
| Section Alt BG | Cream Dark | `#f0f7f2` | `bg-cream-dark` |
| Headings | Foreground | `#111827` | `text-heading` |
| Body Text | Secondary | `#4b5563` | `text-body-text` |
| Muted Text | Tertiary | `#6b7280` | `text-text-tertiary` |
| Borders | Border | `#e5e7eb` | `border-border` |
| Success Badge | Success | `#3eb75e` | `bg-success/10 text-success` |
| Stat Numbers | Accent | `#7db247` | `text-accent` |

#### Color Contrast Compliance (WCAG AA)

| Combination | Ratio | Status |
|-------------|-------|--------|
| Brand (#0b6d41) on White (#fff) | 6.8:1 | Pass |
| Brand (#0b6d41) on Cream (#f9f7f2) | 6.5:1 | Pass |
| White on Brand (#0b6d41) | 6.8:1 | Pass |
| White on Brand Dark (#03311c) | 16.1:1 | Pass |
| Body Text (#4b5563) on Cream (#f9f7f2) | 5.2:1 | Pass |
| Heading (#111827) on White (#fff) | 18.1:1 | Pass |
| Accent (#7db247) on Brand Dark (#03311c) | 5.6:1 | Pass |

---

## 5. Typography System

### 5.1 Font Family

```css
font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Next.js Font Loading:**
```tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});
```

### 5.2 Type Scale

| Level | Desktop | Mobile | Weight | Line Height | Letter Spacing | Usage |
|-------|---------|--------|--------|-------------|----------------|-------|
| Display | 48px (text-5xl) | 36px (text-4xl) | 800 (extrabold) | 1.1 | -0.02em | Hero headings |
| H1 | 36px (text-4xl) | 30px (text-3xl) | 700 (bold) | 1.2 | -0.01em | Page titles |
| H2 | 30px (text-3xl) | 24px (text-2xl) | 600 (semibold) | 1.2 | -0.01em | Section headings |
| H3 | 24px (text-2xl) | 20px (text-xl) | 600 (semibold) | 1.3 | -0.005em | Subsection headings |
| H4 | 20px (text-xl) | 18px (text-lg) | 500 (medium) | 1.4 | normal | Card headings |
| Body Large | 18px (text-lg) | 18px (text-lg) | 400 (normal) | 1.6 | normal | Lead paragraphs |
| Body | 16px (text-base) | 16px (text-base) | 400 (normal) | 1.6 | normal | Main body text |
| Body Small | 14px (text-sm) | 14px (text-sm) | 400 (normal) | 1.5 | normal | Secondary text, metadata |
| Caption | 12px (text-xs) | 12px (text-xs) | 400 (normal) | 1.4 | 0.01em | Labels, captions, top bar |

### 5.3 Responsive Typography Classes

```tsx
// Hero Heading
className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter"

// Page Title (H1)
className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight"

// Section Heading (H2)
className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight"

// Subsection (H3)
className="text-xl sm:text-2xl font-semibold leading-snug"

// Card Title (H4)
className="text-lg sm:text-xl font-medium leading-snug"

// Body Text
className="text-base leading-relaxed text-body-text"

// Small Text
className="text-sm leading-normal text-text-tertiary"
```

---

## 6. Spacing & Layout System

### 6.1 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px (1) | Tight inline spacing |
| sm | 8px (2) | Small gaps, icon spacing |
| md | 16px (4) | Default padding, card gaps |
| lg | 24px (6) | Medium sections |
| xl | 32px (8) | Large sections |
| 2xl | 48px (12) | Section vertical spacing |
| 3xl | 64px (16) | Major section spacing |
| 4xl | 96px (24) | Hero vertical padding |

### 6.2 Container System

```tsx
// Standard page container
className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// Full-width section with inner container
<section className="w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-7xl">
    {/* Content */}
  </div>
</section>
```

### 6.3 Section Spacing Patterns

```tsx
// Standard section padding
className="py-12 md:py-16 lg:py-20"

// Compact section (between related content)
className="py-8 md:py-12"

// Hero section (generous spacing)
className="py-16 md:py-20 lg:py-28"

// Card grid gap
className="gap-4 md:gap-6 lg:gap-8"

// Content spacing within sections
className="space-y-6 md:space-y-8"
```

### 6.4 Grid Systems

```tsx
// 3-column cards (colleges, features, team)
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"

// 4-column stats
className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"

// 6-column process steps
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// 2-column content + image
className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"

// Recruiter logo grid
className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
```

### 6.5 Z-Index Layers

| Layer | Z-Index | Element |
|-------|---------|---------|
| Base | 0 | Page content |
| Elevated | 10 | Cards with hover |
| Sticky | 20 | Sticky elements |
| Header | 50 | Navigation bar |
| Dropdown | 1000 | Nav dropdowns |
| Mobile Nav | 1020 | Bottom navbar |
| Overlay | 1040 | Backdrop overlays |
| Modal | 1050 | Modal dialogs |
| More Menu | 1060 | Bottom nav more menu sheet |
| Tooltip | 1070 | Tooltips |

---

## 7. Component Library

### 7.1 Buttons

#### Primary Button (CTA)
```tsx
<button className="
  inline-flex items-center justify-center gap-2
  bg-brand hover:bg-brand-darker
  text-white font-semibold
  px-6 py-3 rounded-full
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
  active:scale-95
  disabled:opacity-50 disabled:cursor-not-allowed
  min-h-[44px]
">
  Explore Placements
</button>
```

#### Secondary / Outline Button
```tsx
<button className="
  inline-flex items-center justify-center gap-2
  border-2 border-white text-white
  hover:bg-white hover:text-brand-dark
  font-semibold
  px-6 py-3 rounded-full
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-dark
  active:scale-95
  min-h-[44px]
">
  Contact Placement Cell
</button>
```

#### Ghost Button
```tsx
<button className="
  inline-flex items-center justify-center gap-2
  text-brand hover:bg-brand/10
  font-medium
  px-4 py-2 rounded-lg
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
  min-h-[44px]
">
  View Details
</button>
```

#### Button Sizes

| Size | Padding | Font Size | Min Height | Border Radius |
|------|---------|-----------|------------|---------------|
| Small | `px-4 py-2` | `text-sm` | 36px | `rounded-lg` |
| Medium | `px-6 py-3` | `text-base` | 44px | `rounded-full` |
| Large | `px-8 py-4` | `text-lg` | 52px | `rounded-full` |

### 7.2 Cards

#### Standard Card (College / Feature)
```tsx
<article className="
  bg-surface-0
  border border-border
  rounded-xl
  overflow-hidden
  shadow-sm hover:shadow-lg
  transition-all duration-300
  hover:-translate-y-1
  group
">
  {/* Image */}
  <div className="relative h-48 overflow-hidden">
    <Image
      src={imageUrl}
      alt={altText}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>
  {/* Content */}
  <div className="p-6 space-y-4">
    <h3 className="text-xl font-semibold text-heading">{title}</h3>
    <p className="text-sm text-body-text leading-relaxed">{description}</p>
    {/* Footer / CTA */}
    <div className="pt-4 border-t border-border">
      <Link href={href} className="text-brand font-medium hover:text-brand-light inline-flex items-center gap-1">
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
</article>
```

#### Stat Card
```tsx
<div className="
  bg-surface-0
  border border-border
  rounded-xl
  p-6
  text-center
  shadow-sm
">
  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{value}</div>
  <div className="text-sm text-body-text font-medium">{label}</div>
</div>
```

#### Testimonial Card
```tsx
<article className="
  bg-surface-0
  border border-border
  rounded-xl
  p-6
  shadow-sm
">
  {/* Star Rating */}
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
  {/* Quote */}
  <blockquote className="text-body-text text-sm leading-relaxed mb-4 italic">
    "{quote}"
  </blockquote>
  {/* Learner Info */}
  <div className="flex items-center gap-3 pt-4 border-t border-border">
    <Image src={photo} alt={name} width={40} height={40} className="rounded-full" />
    <div>
      <p className="text-sm font-semibold text-heading">{name}</p>
      <p className="text-xs text-text-tertiary">{programme} | Placed at {company}</p>
    </div>
  </div>
</article>
```

#### Faculty Card
```tsx
<article className="
  bg-surface-0
  border border-border
  rounded-xl
  overflow-hidden
  shadow-sm
  text-center
">
  <div className="relative h-56 overflow-hidden">
    <Image src={photo} alt={name} fill className="object-cover" />
  </div>
  <div className="p-5 space-y-2">
    <h3 className="text-lg font-semibold text-heading">{name}</h3>
    <p className="text-sm text-brand font-medium">{title}</p>
    <p className="text-xs text-text-tertiary">{qualification}</p>
    <div className="flex justify-center gap-3 pt-3">
      <a href={`mailto:${email}`} className="p-2 rounded-full bg-brand/10 text-brand hover:bg-brand/20">
        <Mail className="w-4 h-4" />
      </a>
      <a href={`tel:${phone}`} className="p-2 rounded-full bg-brand/10 text-brand hover:bg-brand/20">
        <Phone className="w-4 h-4" />
      </a>
    </div>
  </div>
</article>
```

### 7.3 Badges

```tsx
// Status Badge (Completed)
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand">
  <CheckCircle className="w-3 h-3" /> Completed
</span>

// Status Badge (Upcoming)
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
  <Clock className="w-3 h-3" /> Upcoming
</span>

// Section Badge / Subtitle
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand/10 text-brand border border-brand/20">
  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
  About Us
</span>
```

### 7.4 Accordion / FAQ

```tsx
<Accordion type="single" collapsible className="space-y-3">
  {faqs.map((faq, i) => (
    <AccordionItem
      key={i}
      value={`faq-${i}`}
      className="border border-border rounded-xl px-6 bg-surface-0 shadow-sm"
    >
      <AccordionTrigger className="text-left text-base font-medium text-heading hover:text-brand py-4">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-sm text-body-text leading-relaxed pb-4">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

### 7.5 Tab Navigation

```tsx
<div className="flex flex-wrap gap-2 mb-8">
  {tabs.map((tab) => (
    <button
      key={tab.value}
      onClick={() => setActiveTab(tab.value)}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px]",
        activeTab === tab.value
          ? "bg-brand text-white shadow-md"
          : "bg-surface-1 text-body-text hover:bg-brand/10 hover:text-brand"
      )}
    >
      {tab.label}
    </button>
  ))}
</div>
```

### 7.6 Form Elements

#### Text Input
```tsx
<div className="space-y-2">
  <label className="text-sm font-medium text-heading">{label}</label>
  <input
    type={type}
    className="
      w-full px-4 py-3
      bg-surface-0
      border border-border
      rounded-lg
      text-heading text-base
      placeholder:text-text-tertiary
      focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent
      transition-all duration-200
      min-h-[44px]
    "
    placeholder={placeholder}
  />
</div>
```

#### Select Dropdown
```tsx
<div className="space-y-2">
  <label className="text-sm font-medium text-heading">{label}</label>
  <select className="
    w-full px-4 py-3
    bg-surface-0
    border border-border
    rounded-lg
    text-heading text-base
    focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent
    cursor-pointer
    min-h-[44px]
  ">
    <option value="">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>{opt.label}</option>
    ))}
  </select>
</div>
```

#### Checkbox with Consent
```tsx
<label className="flex items-start gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="
      mt-1 w-5 h-5
      border-border rounded
      text-brand
      focus:ring-2 focus:ring-brand
      cursor-pointer
    "
  />
  <span className="text-sm text-body-text leading-relaxed">
    I consent to JKKN Institutions collecting and processing the above information...
  </span>
</label>
```

### 7.7 Process / Timeline Stepper

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {steps.map((step, i) => (
    <div key={i} className="relative bg-surface-0 border border-border rounded-xl p-6 shadow-sm">
      {/* Step Number */}
      <div className="
        w-10 h-10 rounded-full
        bg-brand text-white
        flex items-center justify-center
        text-sm font-bold
        mb-4
      ">
        {i + 1}
      </div>
      <h3 className="text-lg font-semibold text-heading mb-2">{step.title}</h3>
      <p className="text-sm text-body-text leading-relaxed">{step.description}</p>
    </div>
  ))}
</div>
```

### 7.8 Logo Marquee / Carousel

```tsx
<div className="relative overflow-hidden py-8">
  <div className="flex animate-scroll gap-8">
    {[...logos, ...logos].map((logo, i) => (
      <div
        key={i}
        className="
          flex-shrink-0 w-32 h-16
          bg-surface-0 border border-border
          rounded-lg
          flex items-center justify-center
          p-3
          shadow-sm
        "
      >
        <Image src={logo.src} alt={logo.name} width={100} height={40} className="object-contain" />
      </div>
    ))}
  </div>
</div>

/* CSS Animation */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-scroll {
  animation: scroll 30s linear infinite;
}
```

---

## 8. Global Components

### 8.1 Top Info Bar

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  📞 +91-9865910003  |  ✉ cdc@jkkn.ac.in  |  🕐 Mon–Sat: 8am–5pm          │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `bg-brand-dark` (#03311c)
- Text: `text-white text-xs`
- Layout: `flex justify-between items-center`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Height: `h-8` (32px)
- Hidden on mobile: `hidden sm:flex`

### 8.2 Navigation Bar (Sticky)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [JKKN Logo]  Home  About▾  Colleges  Placements▾  Drives  ...  [Contact] │
│  (80×80)                                                      (green pill) │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Position: `fixed top-0 w-full z-50`
- Background: `bg-white shadow-md`
- Height: `h-20` (80px)
- Container: `max-w-7xl mx-auto`
- Logo: 80×80px with `translate-y-2` overlap
- Nav Items: `text-[13px] font-medium text-heading`
- Active Item: `text-brand font-semibold`
- Hover: `text-brand transition-colors duration-200`
- CTA: `bg-brand text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-darker`
- Mobile: Hamburger toggle → slide-down menu

#### Navigation Items

| Label | Path | Type | Dropdown Items |
|-------|------|------|----------------|
| Home | `/` | Direct | — |
| About | `/about` | Dropdown | About Us |
| Colleges | `/colleges` | Direct | — |
| Placements | `/placements` | Dropdown | Overview, Dental, Pharmacy, Nursing, Allied Health, Engineering, Arts & Science |
| On-Campus Drives | `/on-campus-drives` | Direct | — |
| Internships | `/internships` | Direct | — |
| Our Recruiters | `/recruiters` | Direct | — |
| AI Workshop | `/ai-workshop` | Direct | — |
| More | `#` | Dropdown | Testimonials, FAQ |
| Contact Us | `/contact` | CTA Button | — |

#### Dropdown Menu Specs
```tsx
// Dropdown container
className="
  absolute top-full left-0
  bg-white
  border border-border
  rounded-lg
  shadow-lg
  py-2 min-w-[200px]
  z-[1000]
  animate-fade-in
"

// Dropdown item
className="
  block w-full text-left
  px-4 py-2.5
  text-sm text-heading
  hover:bg-brand/5 hover:text-brand
  transition-colors duration-150
"
```

### 8.3 Footer

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [JKKN Logo]                  Our Institutions       Our Location          │
│  JKKN Institutions            ├ Dental College        [Google Map Embed]   │
│  Excellence in Education      ├ Allied Health                              │
│                               ├ Pharmacy                                   │
│  Contact:                     ├ Nursing                                    │
│  📞 +91 9345855001           ├ Education                                  │
│  ✉ info@jkkn.ac.in           ├ Arts & Science                            │
│  📍 Natarajapuram, NH-544    ├ Engineering                               │
│     Komarapalayam, Namakkal  ├ Nattraja Vidhyalya                        │
│     Tamil Nadu               └ Matriculation School                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  © 2026 JKKN Institutions. All rights reserved.  Admin  [Social Icons]    │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `bg-brand-dark` (#03311c)
- Text: `text-white/90`
- Layout: 4-column grid on desktop → stacked on mobile
- Social Icons: Twitter/X, YouTube, Facebook, LinkedIn, Instagram
- Bottom Bar: `border-t border-white/10 py-4`

---

## 9. Mobile Bottom Navigation

### 9.1 Overview

The mobile bottom navbar follows the **accordion-based More menu with icon grid** pattern from the mobile-bottom-navbar skill. It appears on screens below 1024px width and provides quick access to primary navigation.

### 9.2 Navigation Structure

**Primary Items (Visible in Bottom Bar):**

| Order | Label | Icon | Path |
|-------|-------|------|------|
| 1 | Home | `Home` | `/` |
| 2 | Colleges | `GraduationCap` | `/colleges` |
| 3 | Placements | `Briefcase` | `/placements` |
| 4 | Drives | `CalendarCheck` | `/on-campus-drives` |
| 5 | More | `Menu` | Sheet trigger |

**More Menu Groups (Accordion with Icon Grid):**

| Group | Items |
|-------|-------|
| **Explore** | Internships (`BookOpen`), Recruiters (`Building2`), AI Workshop (`Brain`) |
| **Information** | About (`Info`), Contact (`Phone`), Testimonials (`MessageSquare`), FAQ (`HelpCircle`) |

### 9.3 Bottom Navbar Wireframe

```
┌─────────────────────────────────────────────────────┐
│  [🏠]     [🎓]     [💼]     [📅]     [≡]          │
│  Home   Colleges  Placements Drives   More          │
│   ─                                                  │  ← Active indicator
└─────────────────────────────────────────────────────┘
```

### 9.4 More Menu Sheet

```
┌─────────────────────────────────────┐
│ All Menus                        ✕  │
├─────────────────────────────────────┤
│ > Explore                     3  ▼  │ ← Accordion header
│                                     │
│   ┌─────┐  ┌─────┐  ┌─────┐        │
│   │ 📖  │  │ 🏢  │  │ 🧠  │        │ ← 3-column icon grid
│   │Intern│  │Recru│  │AI WS│        │
│   └─────┘  └─────┘  └─────┘        │
│                                     │
│ > Information                 4  ▼  │
│                                     │
│   ┌─────┐  ┌─────┐  ┌─────┐        │
│   │ ℹ️  │  │ 📞  │  │ 💬  │        │
│   │About│  │Conta│  │Testi│        │
│   └─────┘  └─────┘  └─────┘        │
│   ┌─────┐                           │
│   │ ❓  │                           │
│   │ FAQ │                           │
│   └─────┘                           │
│                                     │
└─────────────────────────────────────┘
```

### 9.5 Implementation Requirements

```tsx
// File structure
components/BottomNav/
├── bottom-navbar.tsx           // Main orchestrator
├── bottom-nav-item.tsx         // Individual nav button
├── bottom-nav-submenu.tsx      // 3-column grid dropdown
├── bottom-nav-more-menu.tsx    // Accordion + grid modal
├── types.ts                    // TypeScript definitions
└── index.ts                    // Barrel export

hooks/
├── use-bottom-nav.ts           // Zustand store
└── use-mobile.tsx              // Mobile detection (<1024px)
```

**Key Specs:**
- Visibility: `block lg:hidden`
- Position: `fixed bottom-0 w-full z-[1020]`
- Background: `bg-white border-t border-border`
- Height: `h-16` (64px) + iOS safe area
- Active Item: `text-brand` with underline indicator
- Inactive: `text-text-tertiary`
- More Menu: `Sheet` component, `h-[80vh]`, `rounded-t-3xl`
- Accordion: `type="multiple"`, all groups expanded by default
- Grid: `grid-cols-3 gap-2`
- Content padding: Add `pb-20` to main content on mobile
- Touch targets: Min 44x44px for all nav items

### 9.6 State Management (Zustand)

```tsx
interface BottomNavState {
  activeSubmenu: string | null;
  isMoreMenuOpen: boolean;
  setActiveSubmenu: (id: string | null) => void;
  toggleMoreMenu: () => void;
  closeAll: () => void;
}
```

---

## 10. Page Specifications with Wireframes

### 10.1 HOME PAGE ( / )

**Title:** JKKN Institutions Placement Cell — Campus Recruitment, Training & Career Support | Namakkal, Tamil Nadu

#### Wireframe (Desktop - 1280px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP INFO BAR                                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│ NAVIGATION BAR                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─── HERO SECTION (bg-brand-dark) ────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │  [Badge] JKKN Training & Placement Cell                                │ │
│ │                                                                         │ │
│ │  Empowering Careers              ┌──────────────────────┐              │ │
│ │  Across 6 Colleges               │                      │              │ │
│ │                                   │   [Hero Image]       │              │ │
│ │  Connecting 1,200+ learners...   │   Placement Event    │              │ │
│ │                                   │                      │              │ │
│ │  [Explore Placements]            │                      │              │ │
│ │  [Contact Placement Cell]        └──────────────────────┘              │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── STATS SECTION ──────────────────────────────────────────────────────┐ │
│ │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │ │
│ │  │  1,200+  │  │   500+   │  │  ₹12 LPA │  │ ₹4.5 LPA│  │    6    │ │ │
│ │  │ Learners │  │Recruiters│  │ Highest  │  │ Average  │  │Colleges │ │ │
│ │  │  Placed  │  │          │  │ Package  │  │ Package  │  │ Covered │ │ │
│ │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── ABOUT SECTION ──────────────────────────────────────────────────────┐ │
│ │  [Badge] About Us                                                      │ │
│ │  "About the JKKN Placement Cell"                                       │ │
│ │                                                                         │ │
│ │  Description text...               ┌────────────────────┐             │ │
│ │                                     │   [Team Image]     │             │ │
│ │  Our Mission:                      │   with caption     │             │ │
│ │  ...mission text...                └────────────────────┘             │ │
│ │                                                                         │ │
│ │  Training & Placement Officer:                                         │ │
│ │  ...TPO info...                                                        │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── INSTITUTIONS LIST ──────────────────────────────────────────────────┐ │
│ │  "List of Institutions"                                                │ │
│ │  ┌──────────┐  ┌──────────┐  ┌──────────┐                            │ │
│ │  │ Dental   │  │ Pharmacy │  │ Nursing  │                            │ │
│ │  └──────────┘  └──────────┘  └──────────┘                            │ │
│ │  ┌──────────┐  ┌──────────┐  ┌──────────┐                            │ │
│ │  │  Allied  │  │  Engg    │  │Arts & Sci│                            │ │
│ │  └──────────┘  └──────────┘  └──────────┘                            │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── COLLEGES SECTION ───────────────────────────────────────────────────┐ │
│ │  "Placements Across 6 Colleges"                                        │ │
│ │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                   │ │
│ │  │ [Campus Img] │ │ [Campus Img] │ │ [Campus Img] │                   │ │
│ │  │ College Name │ │ College Name │ │ College Name │                   │ │
│ │  │ Programmes   │ │ Programmes   │ │ Programmes   │                   │ │
│ │  │ Stats Grid   │ │ Stats Grid   │ │ Stats Grid   │                   │ │
│ │  │ Top Recruiters│ │ Top Recruiters│ │ Top Recruiters│                  │ │
│ │  │ [View Detail]│ │ [View Detail]│ │ [View Detail]│                   │ │
│ │  └──────────────┘ └──────────────┘ └──────────────┘                   │ │
│ │  (x2 rows = 6 cards total)                                            │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── RECRUITER MARQUEE ──────────────────────────────────────────────────┐ │
│ │  "Our Esteemed Recruiters"                                             │ │
│ │  [TCS] [Infosys] [Wipro] [Cognizant] [HCL] ... ← auto-scroll         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── PLACEMENT PROCESS ──────────────────────────────────────────────────┐ │
│ │  "How Does the Placement Process Work?"                                │ │
│ │  ① Registration → ② Pre-Placement Training → ③ Aptitude Tests →      │ │
│ │  ④ Technical Rounds → ⑤ HR Interview → ⑥ Offer Letter                │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── TESTIMONIALS ───────────────────────────────────────────────────────┐ │
│ │  "What Our Placed Learners Say"                                        │ │
│ │  [Card 1] [Card 2] [Card 3]  ← carousel/slider                       │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── TOP RECRUITERS BY SECTOR ───────────────────────────────────────────┐ │
│ │  6 industry categories with 5 companies each                           │ │
│ │  Healthcare | IT | Pharma | Manufacturing | Diagnostics | Education    │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── PRE-PLACEMENT TRAINING ────────────────────────────────────────────┐ │
│ │  6 training areas + side image                                         │ │
│ │  Aptitude | Soft Skills | Mock Interviews | Resume | Lectures | Tech   │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── TEAM SECTION ───────────────────────────────────────────────────────┐ │
│ │  "Our Awesome Team Members" — 3 member cards                           │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── GALLERY ────────────────────────────────────────────────────────────┐ │
│ │  "Placement Day Celebration 2025" — 6 images in grid                   │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── ALUMNI SECTION ─────────────────────────────────────────────────────┐ │
│ │  "Alumni" — 23 images in scrolling grid                                │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── PLACEMENT CELL LEARNING FACILITATORS ───────────────────────────────┐ │
│ │  6 facilitator cards with photos, titles, qualifications               │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── CAMPUS RECRUITMENT ─────────────────────────────────────────────────┐ │
│ │  7 recruitment event cards                                             │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── FAQ SECTION ────────────────────────────────────────────────────────┐ │
│ │  10 accordion items                                                    │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─── CTA / CONTACT SECTION ─────────────────────────────────────────────┐ │
│ │  "Ready to Launch Your Career with JKKN?"                              │ │
│ │  📞 +91 4288 234040  |  ✉ placements@jkkn.ac.in                       │ │
│ │  [Register for Placements]  [WhatsApp Us]                              │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ FOOTER                                                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Mobile Wireframe (375px)

```
┌──────────────────────────┐
│ NAVIGATION (hamburger)    │
├──────────────────────────┤
│                           │
│ ┌── HERO (full-width) ──┐│
│ │ [Badge]                ││
│ │ Empowering Careers     ││
│ │ Across 6 Colleges      ││
│ │                         ││
│ │ Description...          ││
│ │                         ││
│ │ [Explore Placements]   ││
│ │ [Contact Placement]    ││
│ │                         ││
│ │ [Hero Image]           ││
│ └─────────────────────────┘│
│                           │
│ ┌── STATS (2x2 grid) ──┐│
│ │ 1,200+  │  500+       ││
│ │ ₹12 LPA │  ₹4.5 LPA  ││
│ └─────────────────────────┘│
│                           │
│ ... sections stack ...    │
│                           │
│ ┌── CTA SECTION ────────┐│
│ │ [Register]             ││
│ │ [WhatsApp Us]          ││
│ └─────────────────────────┘│
│                           │
│ FOOTER                    │
│                           │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  │
│ 🏠  🎓  💼  📅  ≡       │ ← Bottom Nav
└──────────────────────────┘
```

### 10.2 ABOUT PAGE ( /about )

**Title:** About Us | JKKN Placement Cell

**Sections:**
1. About Section — Mission, TPO info, team image (same as homepage about section)
2. Learning Facilitators Section — 6 placement cell facilitator & coordinator cards

### 10.3 COLLEGES PAGE ( /colleges )

**Title:** Our Colleges | JKKN Placement Cell

```
┌─────────────────────────────────────────────────┐
│ "Our Colleges"                                   │
│                                                   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │[Campus]  │ │[Campus]  │ │[Campus]  │          │
│ │ Dental   │ │ Pharmacy │ │ Nursing  │          │
│ │ 5 progs  │ │ 3 progs  │ │ 4 progs  │          │
│ │ 95% rate │ │ 90% rate │ │ 92% rate │          │
│ │ ₹10 LPA  │ │ ₹8 LPA  │ │ ₹7 LPA  │          │
│ │ 120+ rec │ │ 80+ rec  │ │ 70+ rec  │          │
│ │[View ▸]  │ │[View ▸]  │ │[View ▸]  │          │
│ └──────────┘ └──────────┘ └──────────┘          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │  Allied  │ │  Engg    │ │Arts & Sci│          │
│ └──────────┘ └──────────┘ └──────────┘          │
└─────────────────────────────────────────────────┘
```

### 10.4 PLACEMENTS PAGE ( /placements )

**Title:** Placements | JKKN Placement Cell

**Sections:**
1. Placement Process — 6-step stepper
2. Pre-Placement Training — 6 training areas with image
3. Top Recruiters by Sector — 6 industry sector listings

### 10.5 INDIVIDUAL COLLEGE PLACEMENT PAGES ( /placements/[slug] )

**Slugs:** dental, pharmacy, nursing, allied-health, engineering, arts-science

```
┌─────────────────────────────────────────────────┐
│ Breadcrumb: Placements > [College Name]          │
│                                                   │
│ ┌── HERO ───────────────────────────────────────┐│
│ │ [Badge] [College Name] Placement Cell          ││
│ │ Heading + Description                          ││
│ │ Stats: Rate | Recruiters | Package | Alumni    ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── QUICK STATS BAR ────────────────────────────┐│
│ │ Rate | Recruiters | Avg Pkg | Highest | Specs  ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── ABOUT ──────────────────────────────────────┐│
│ │ College placement description + image          ││
│ │ Subsections: Clinical | Industry | Career      ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── PROGRAMMES ─────────────────────────────────┐│
│ │ Programme cards with degree, duration, badges   ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── RECRUITERS (Logo Grid) ─────────────────────┐│
│ ┌── PLACEMENT PROCESS (6 steps) ────────────────┐│
│ ┌── TESTIMONIALS (6 cards) ─────────────────────┐│
│ ┌── TRAINING (6 programmes + image) ────────────┐│
│ ┌── LEARNING FACILITATORS (3 cards) ────────────┐│
│ ┌── FAQ (8 accordion items) ────────────────────┐│
│ ┌── CONTACT CTA ────────────────────────────────┐│
└─────────────────────────────────────────────────┘
```

### 10.6 ON-CAMPUS DRIVES PAGE ( /on-campus-drives )

**Title:** On-Campus Drives 2025-2026 — JKKN Career Development Centre

```
┌─────────────────────────────────────────────────┐
│ ┌── HERO ───────────────────────────────────────┐│
│ │ "On-Campus Drives 2025–2026"                   ││
│ │ Stats: 10+ Companies | Positions | ₹10 LPA     ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── FILTER TABS ────────────────────────────────┐│
│ │ [All] [Completed] [Upcoming]                    ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── DRIVE CARDS ────────────────────────────────┐│
│ │ ┌──────────────────────────────────┐           ││
│ │ │ [Completed Badge]                │           ││
│ │ │ Company: Infronex IT             │           ││
│ │ │ Position: Software Developer     │           ││
│ │ │ Salary: ₹4.5 LPA                │           ││
│ │ │ Location: Chennai                │           ││
│ │ │ Date: March 15, 2026             │           ││
│ │ │ Eligible: Engineering, Arts&Sci  │           ││
│ │ │ [View Details ▸]                 │           ││
│ │ └──────────────────────────────────┘           ││
│ └────────────────────────────────────────────────┘│
│                                                   │
│ ┌── CONTACT CTA ────────────────────────────────┐│
│ │ "Want to Know About Upcoming Drives?"           ││
│ └────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

### 10.7 INTERNSHIPS PAGE ( /internships )

**Title:** Internship Opportunities | JKKN Placement Cell

**Sections (in order):**
1. Hero — Badge, heading, description, 2 CTAs
2. Stats Bar — 500+ Partners, 1,200+ Annual Interns, 6 Colleges, 40%+ PPO Rate
3. College Tabs — 7 tabs (Engineering, Pharmacy, Dental, Nursing, Allied Health, Arts & Science, Education)
4. Process — 6-step internship process
5. Industries — 6 sector cards with partner names
6. Partner Section — "Partner with JKKN" benefits
7. Testimonials — 3 intern testimonials
8. Registration Form — Inquiry form
9. FAQ — 6 accordion items
10. CTA — Register Now, WhatsApp Us

### 10.8 RECRUITERS PAGE ( /recruiters )

**Title:** Our Recruiters | JKKN Placement Cell

24 company logos in grid layout (4-col on mobile, 6-col on tablet, 8-col on desktop).

### 10.9 AI WORKSHOP PAGE ( /ai-workshop )

**Title:** Free AI Career Guidance Workshop for Rural School Learners | JKKN Institutions

**Special Features:**
- Bilingual content (English + Tamil)
- Separate navigation from main site
- WhatsApp floating button
- Custom navigation: About, Modules, Benefits, Schedule, FAQ + Language toggle + Register CTA

**Sections:**
1. Hero — Bilingual heading, badges (NAAC A+, 74+ Years, 50,000+ Alumni, FREE)
2. About — "Why AI Career Guidance for Rural Learners?"
3. Workshop Modules — 3 modules with bullet items
4. Benefits — "Your Future Starts Here"
5. Schedule — 6-step timeline (9 AM–4 PM)
6. Upcoming Workshops — 3 workshop cards
7. JKKN Info — "74+ Years of Educational Excellence"
8. Registration Form — Full form with validation
9. FAQ — 6 bilingual accordion items
10. Final CTA — "Register Free Now", "WhatsApp Us"

**Registration Form Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | Text | Yes | Min 2 chars |
| Phone Number | Tel | Yes | Indian phone format |
| Email | Email | No | Email format |
| School Name | Text | Yes | Min 2 chars |
| District | Select | Yes | 8 options (Namakkal, Salem, Erode, etc.) |
| Learner's Class | Select | Yes | 8th–12th |
| Consent | Checkbox | Yes | Must be checked |

### 10.10 CONTACT PAGE ( /contact )

**Title:** Contact Us | JKKN Placement Cell

**CTA Section:**
- "Ready to Launch Your Career with JKKN?"
- Phone: +91 4288 234040
- Email: placements@jkkn.ac.in
- Address: Komarapalayam, Namakkal, Tamil Nadu
- [Register for Placements] — Primary CTA
- [WhatsApp Us] — Secondary CTA with WhatsApp deep link

---

## 11. User Flows

### 11.1 Learner Placement Discovery

```
Landing (/)
  ↓
  [Browse Stats] → See placement numbers and stats
  ↓
  [Explore Colleges] → /colleges
  ↓
  [Select College] → /placements/dental (or other slug)
  ↓
  [View Programmes, Recruiters, Stats]
  ↓
  [Contact / Register] → /contact OR WhatsApp
```

### 11.2 Recruiter Partnership

```
Landing (/)
  ↓
  [View Recruiter Logos] → Scroll to recruiters section
  ↓
  [Navigate to Recruiters] → /recruiters
  ↓
  [Contact] → /contact
  ↓
  [Phone / Email / WhatsApp]
```

### 11.3 Drive Discovery

```
Landing (/)
  ↓
  [On-Campus Drives] → /on-campus-drives
  ↓
  [Filter: All / Completed / Upcoming]
  ↓
  [View Drive Details]
  ↓
  [Contact for Info] → Phone / Email
```

### 11.4 AI Workshop Registration

```
/ai-workshop
  ↓
  [Read About Workshop] → Scroll through sections
  ↓
  [Toggle Language] → EN / Tamil
  ↓
  [Fill Registration Form]
  ↓
  [Submit] → Success confirmation
  ↓
  OR [WhatsApp Us] → Pre-filled WhatsApp message
```

---

## 12. Responsive Design Specifications

### 12.1 Breakpoints

| Breakpoint | Width | Layout | Navigation |
|------------|-------|--------|------------|
| Mobile | < 640px | 1 column, stacked | Hamburger + Bottom Nav |
| Small Tablet | 640px–767px | 2 columns | Hamburger + Bottom Nav |
| Tablet | 768px–1023px | 2-3 columns | Hamburger + Bottom Nav |
| Desktop | 1024px–1279px | 3-4 columns | Top Nav (horizontal) |
| Large Desktop | 1280px+ | Full layout (max-w-7xl) | Top Nav (horizontal) |

### 12.2 Responsive Behavior per Section

| Section | Mobile (< 640px) | Tablet (640-1023px) | Desktop (1024px+) |
|---------|-------------------|---------------------|---------------------|
| Top Info Bar | Hidden | Visible | Visible |
| Navigation | Hamburger menu | Hamburger menu | Horizontal nav |
| Bottom Nav | Visible (fixed) | Visible (fixed) | Hidden |
| Hero | Stack (image below text) | Stack | Side-by-side (2 col) |
| Stats | 2x2 grid | 2x3 grid | 5 columns inline |
| College Cards | 1 column | 2 columns | 3 columns |
| FAQ | Full width accordion | Full width | Max-w-3xl centered |
| Footer | Stacked (1 col) | 2 columns | 4 columns |
| CTA Buttons | Full width, stacked | Side-by-side | Side-by-side |

### 12.3 Touch Target Requirements

- All clickable elements: min 44x44px (WCAG 2.5.5)
- Button padding: `py-3` (48px height) on mobile
- Nav items in bottom bar: min 48x48px
- Spacing between touch targets: min 8px
- Form inputs: min height 44px

### 12.4 Mobile-Specific Patterns

```tsx
// Content padding for bottom nav
<main className="pb-20 lg:pb-0">

// Full-width buttons on mobile
<button className="w-full sm:w-auto">

// Stack to horizontal
<div className="flex flex-col sm:flex-row gap-3">

// Hide on mobile, show on desktop
<div className="hidden lg:block">

// Show on mobile, hide on desktop
<div className="block lg:hidden">
```

---

## 13. Animation & Interaction Patterns

### 13.1 Scroll Animations (Framer Motion)

```tsx
// Section fade-up on scroll
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeUpVariants}
>
```

### 13.2 Counter Animation

```tsx
// Animated stat counter (count up on scroll into view)
// Use framer-motion's useMotionValue + useTransform
// Duration: 2 seconds
// Easing: easeOut
// Trigger: viewport intersection
```

### 13.3 Card Hover Effects

```tsx
// Card lift on hover
className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"

// Image zoom in card
className="group-hover:scale-105 transition-transform duration-500"

// Button press effect
className="active:scale-95 transition-transform duration-100"
```

### 13.4 Navigation Transitions

```tsx
// Dropdown menu
className="animate-fade-in" // 300ms fadeIn

// Mobile menu slide
<AnimatePresence>
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
  />
</AnimatePresence>

// Bottom nav submenu
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
```

### 13.5 Marquee / Carousel

```css
/* Logo marquee - infinite scroll */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-scroll {
  animation: scroll 30s linear infinite;
}
.animate-scroll:hover {
  animation-play-state: paused;
}
```

### 13.6 Accordion Animation

```tsx
// FAQ accordion - smooth expand/collapse
// shadcn AccordionContent handles animation
// Additional: rotate chevron icon 180deg on open
className="transition-transform duration-200 data-[state=open]:rotate-180"
```

---

## 14. JKKN Terminology Compliance

### 14.1 Critical Replacements for This Project

All user-facing content MUST use JKKN-approved terminology:

| Context | NEVER Use | ALWAYS Use |
|---------|-----------|------------|
| Referring to placed individuals | students, pupils | **learners** |
| Placement cell staff | faculty, teachers | **learning facilitators** |
| Administrative staff | staff, employees | **team members** |
| Parents viewing site | parents, guardians | **learning partners** |
| Learning spaces | classrooms | **learning studios** |
| Labs / workshops | labs, laboratories | **learning labs** |
| Academic content | syllabus, curriculum | **learning pathway, learning framework** |
| Grades / marks | grades, marks, scores | **learning assessments** |
| Tests / exams | test, exam | **learning assessment** |
| Failed | failed, failure | **did not meet learning outcomes** |
| Passed | passed | **achieved learning outcomes** |
| Enrollment | enrollment, enroll | **learning journey registration** |
| Alumni achievements | graduated | **achieved learning milestone** |

### 14.2 Content Application Examples

**Hero Section:**
- WRONG: "Connecting 1,200+ students with recruiters"
- CORRECT: "Connecting 1,200+ learners with recruiters"

**Stats Section:**
- WRONG: "1,200+ Students Placed"
- CORRECT: "1,200+ Learners Placed"

**Testimonials:**
- WRONG: "What Our Placed Students Say"
- CORRECT: "What Our Placed Learners Say"

**Faculty Section:**
- WRONG: "Placement Cell Faculty & Coordinators"
- CORRECT: "Placement Cell Learning Facilitators & Coordinators"

**FAQ:**
- WRONG: "What is the placement rate for students?"
- CORRECT: "What is the placement rate for learners?"

### 14.3 Code-Level Compliance

```tsx
// Variable naming
const learnerCount = 1200;        // NOT studentCount
const facilitatorList = [...];    // NOT facultyList
const learnerTestimonials = [...]; // NOT studentTestimonials

// Component naming
<LearnerTestimonials />           // NOT <StudentTestimonials />
<PlacementFacilitators />         // NOT <PlacementFaculty />
<LearnerRegistrationForm />       // NOT <StudentRegistrationForm />

// API routes
/api/learners                     // NOT /api/students
/api/learning-facilitators        // NOT /api/faculty
```

### 14.4 Exception: External/Legal Context

For recruiter-facing sections where "student" is industry standard, use JKKN terms with parenthetical clarification:
- "Our learners (students) are prepared for..."
- For SEO purposes, use "students" in meta descriptions only where search intent requires it

---

## 15. Accessibility Checklist

### 15.1 Color & Contrast
- [x] All text meets WCAG AA 4.5:1 contrast ratio
- [x] Large text (18px+) meets 3:1 ratio
- [x] Interactive elements meet 3:1 against adjacent colors
- [x] Information not conveyed by color alone (icons + text for badges)
- [x] Focus indicators visible (2px ring with offset)

### 15.2 Keyboard Navigation
- [ ] All interactive elements reachable via Tab key
- [ ] Logical tab order (top-to-bottom, left-to-right)
- [ ] Skip-to-main-content link as first focusable element
- [ ] Dropdown menus navigable with Arrow keys
- [ ] Escape closes modals and dropdowns
- [ ] Enter/Space activates buttons and links
- [ ] FAQ accordion navigable with keyboard

### 15.3 Screen Reader Support
- [ ] Semantic HTML: `nav`, `main`, `section`, `article`, `footer`
- [ ] Proper heading hierarchy: single `h1` per page, logical h2-h6
- [ ] All images have descriptive `alt` text
- [ ] Form inputs have associated `label` elements
- [ ] ARIA labels on icon-only buttons
- [ ] `aria-live="polite"` for dynamic content (counter animations)
- [ ] `aria-expanded` on accordion triggers
- [ ] `role="tablist"` on tab navigation

### 15.4 Motion & Visual
- [ ] Respect `prefers-reduced-motion` media query
- [ ] No flashing content (>3 flashes/second)
- [ ] Support browser zoom up to 200%
- [ ] Text resizable without breaking layout
- [ ] Marquee pausable on hover/focus

### 15.5 Touch & Mobile
- [ ] All touch targets minimum 44x44px
- [ ] Adequate spacing between targets (8px+)
- [ ] iOS safe area support (`env(safe-area-inset-bottom)`)
- [ ] No hover-only interactions (all have touch alternatives)

---

## 16. SEO & Schema Specifications

### 16.1 Page Titles & Meta

| Page | Title | Meta Description |
|------|-------|------------------|
| Home | JKKN Institutions Placement Cell — Campus Recruitment, Training & Career Support \| Namakkal, Tamil Nadu | Connect with 500+ recruiters across 6 JKKN colleges. 1,200+ learners placed with packages up to ₹12 LPA. |
| About | About Us \| JKKN Placement Cell | Learn about JKKN's Training & Placement Cell, our mission, and dedicated team. |
| Colleges | Our Colleges \| JKKN Placement Cell | Explore placement opportunities across 6 JKKN colleges — Dental, Pharmacy, Nursing, Allied Health, Engineering, Arts & Science. |
| Placements | Placements \| JKKN Placement Cell | Discover the placement process, training programmes, and top recruiters at JKKN Institutions. |
| /placements/[slug] | [College Name] Placements \| JKKN Placement Cell | Placement details, recruiters, and career support for [College Name] learners. |
| On-Campus Drives | On-Campus Drives 2025-2026 — JKKN Career Development Centre | Browse upcoming and completed campus recruitment drives at JKKN Institutions. |
| Internships | Internship Opportunities \| JKKN Placement Cell | Explore internship programmes across 7 JKKN colleges with 500+ partner companies. |
| Recruiters | Our Recruiters \| JKKN Placement Cell | View 24+ esteemed recruiters partnering with JKKN Institutions for campus placements. |
| AI Workshop | Free AI Career Guidance Workshop for Rural School Learners \| JKKN Institutions | Free AI career guidance workshop for rural school learners. Learn AI tools, career paths, and more. |
| Contact | Contact Us \| JKKN Placement Cell | Get in touch with JKKN Placement Cell for career support and recruitment partnerships. |

### 16.2 JSON-LD Schemas

**Organization Schema (Root Layout):**
```json
{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "JKKN Institutions",
  "url": "https://placements.jkkn.ac.in",
  "logo": "https://[supabase-url]/storage/v1/object/public/cms-media/jkkn-logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-4288-234040",
    "contactType": "placement cell",
    "email": "placements@jkkn.ac.in"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4454",
    "longitude": "77.7306"
  }
}
```

**BreadcrumbList (Sub-pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://placements.jkkn.ac.in" },
    { "@type": "ListItem", "position": 2, "name": "Placements", "item": "https://placements.jkkn.ac.in/placements" },
    { "@type": "ListItem", "position": 3, "name": "[College Name]" }
  ]
}
```

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the placement rate at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN maintains a 90%+ placement rate across all 6 colleges..."
      }
    }
  ]
}
```

### 16.3 Semantic HTML Structure

```html
<!-- Every page -->
<body>
  <header>
    <div><!-- Top info bar --></div>
    <nav><!-- Main navigation --></nav>
  </header>

  <main id="main-content">
    <section aria-label="Hero">...</section>
    <section aria-label="Statistics">...</section>
    <section aria-label="About">...</section>
    <!-- ... -->
  </main>

  <footer>
    <nav aria-label="Footer navigation">...</nav>
    <div><!-- Copyright --></div>
  </footer>

  <nav aria-label="Mobile navigation"><!-- Bottom Nav (mobile only) --></nav>
</body>
```

---

## 17. Image Assets Required

| Category | Count | Format | Dimensions | Storage |
|----------|-------|--------|------------|---------|
| JKKN Logo | 1 | SVG | Vector | Supabase |
| Hero Images (per page) | 10 | WebP/JPG | 1200×800 | Supabase |
| Campus Photos (6 colleges) | 6 | WebP/JPG | 800×500 | Supabase |
| Recruiter Logos | 24+ | PNG/SVG | 200×80 | Supabase / placehold.co |
| Team/Learning Facilitator Photos | 9+ | WebP/JPG | 400×500 | Supabase |
| Alumni Photos | 23 | WebP/JPG | 200×200 | Supabase |
| Gallery Images | 6 | WebP/JPG | 800×600 | Supabase |
| Training Session Image | 1 | WebP/JPG | 800×600 | Supabase |
| Testimonial Learner Photos | 36+ | WebP/JPG | 100×100 | Supabase |
| College Programme Approval Badges | Various | SVG/PNG | 60×60 | Static |

**Image Optimization:**
- Use Next.js `<Image>` component for all images
- Provide `width` and `height` or `fill` with `sizes` prop
- Use `priority` for above-the-fold hero images
- Format: WebP with JPG fallback
- Lazy load below-fold images (default behavior)

---

## 18. Routing Structure

```
/                           → Homepage (all sections)
/about                      → About page
/colleges                   → Colleges listing
/placements                 → Placements overview
/placements/dental          → Dental college placements
/placements/pharmacy        → Pharmacy college placements
/placements/nursing         → Nursing college placements
/placements/allied-health   → Allied Health Sciences placements
/placements/engineering     → Engineering college placements
/placements/arts-science    → Arts & Science college placements
/on-campus-drives           → On-campus recruitment drives
/internships                → Internship opportunities
/recruiters                 → Recruiter logos page
/ai-workshop                → AI Workshop (standalone layout)
/contact                    → Contact page
```

### File Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (Poppins font, OrgSchema)
│   ├── page.tsx                      # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── colleges/
│   │   └── page.tsx
│   ├── placements/
│   │   ├── page.tsx                  # Overview
│   │   └── [slug]/
│   │       └── page.tsx              # Individual college (template-based)
│   ├── on-campus-drives/
│   │   └── page.tsx
│   ├── internships/
│   │   └── page.tsx
│   ├── recruiters/
│   │   └── page.tsx
│   ├── ai-workshop/
│   │   ├── layout.tsx                # Custom layout (separate nav)
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── TopInfoBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ClientLayoutWrapper.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── AboutSection.tsx
│   │   ├── InstitutionsList.tsx
│   │   ├── CollegesSection.tsx
│   │   ├── RecruiterMarquee.tsx
│   │   ├── PlacementProcess.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── TopRecruitsBySector.tsx
│   │   ├── PrePlacementTraining.tsx
│   │   ├── TeamSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── AlumniSection.tsx
│   │   ├── PlacementFacilitators.tsx
│   │   ├── CampusRecruitment.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactCTA.tsx
│   ├── placements/
│   │   ├── CollegePlacementTemplate.tsx  # Reusable template for all /placements/[slug]
│   │   ├── QuickStatsBar.tsx
│   │   └── ProgrammeCard.tsx
│   ├── drives/
│   │   ├── DriveCard.tsx
│   │   └── DriveFilters.tsx
│   ├── internships/
│   │   ├── CollegeTabs.tsx
│   │   └── InternshipProcess.tsx
│   ├── ai-workshop/
│   │   ├── WorkshopNav.tsx
│   │   ├── RegistrationForm.tsx
│   │   └── BilingualToggle.tsx
│   ├── shared/
│   │   ├── SectionBadge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── StatCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── FacilitatorCard.tsx
│   │   └── ProcessStep.tsx
│   ├── seo/
│   │   ├── OrganizationSchema.tsx
│   │   ├── BreadcrumbSchema.tsx
│   │   └── FAQSchema.tsx
│   ├── BottomNav/
│   │   ├── bottom-navbar.tsx
│   │   ├── bottom-nav-item.tsx
│   │   ├── bottom-nav-submenu.tsx
│   │   ├── bottom-nav-more-menu.tsx
│   │   ├── types.ts
│   │   └── index.ts
│   └── ui/                            # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       ├── tabs.tsx
│       ├── sheet.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── label.tsx
│       ├── checkbox.tsx
│       └── separator.tsx
├── data/
│   ├── colleges.ts                    # College metadata & content
│   ├── recruiters.ts                  # Recruiter logos & info
│   ├── drives.ts                      # On-campus drive listings
│   ├── testimonials.ts                # Learner testimonials
│   ├── facilitators.ts                # Learning facilitator profiles
│   ├── faqs.ts                        # FAQ content
│   └── navigation.ts                  # Nav link configuration
├── hooks/
│   ├── use-bottom-nav.ts
│   ├── use-mobile.tsx
│   ├── use-counter-animation.ts
│   └── use-intersection-observer.ts
├── lib/
│   ├── utils.ts                       # cn() helper
│   ├── site-config.ts                 # Site identity config
│   └── supabase/
│       ├── client.ts
│       └── server.ts
└── styles/
    └── globals.css                    # CSS variables, custom animations
```

---

## 19. Implementation Guide

### 19.1 Implementation Order

| Phase | Tasks | Priority |
|-------|-------|----------|
| **Phase 1: Foundation** | Project setup, Tailwind config, design tokens, CSS variables, font loading | Critical |
| **Phase 2: Layout** | TopInfoBar, Navbar (desktop + mobile hamburger), Footer, ClientLayoutWrapper | Critical |
| **Phase 3: Homepage** | All 17 homepage sections (Hero through CTA) | Critical |
| **Phase 4: Sub-pages** | About, Colleges, Placements overview | High |
| **Phase 5: Dynamic Pages** | /placements/[slug] template, On-Campus Drives (with filters) | High |
| **Phase 6: Complex Pages** | Internships (tabs), AI Workshop (bilingual, custom nav, form) | High |
| **Phase 7: Simple Pages** | Recruiters, Contact | Medium |
| **Phase 8: Mobile Nav** | Bottom Navbar with More menu, submenu, state management | High |
| **Phase 9: Animations** | Counter animations, scroll reveals, marquee, hover effects | Medium |
| **Phase 10: SEO** | JSON-LD schemas, meta tags, semantic HTML audit | Medium |
| **Phase 11: Accessibility** | Keyboard nav, ARIA labels, contrast audit, screen reader testing | High |
| **Phase 12: Performance** | Image optimization, lazy loading, Core Web Vitals audit | Medium |

### 19.2 Reusable Component Strategy

**Template Pattern (for /placements/[slug]):**
Create a single `CollegePlacementTemplate` component that accepts college data as props and renders all sections. Each slug page imports the template with college-specific data.

```tsx
// src/components/placements/CollegePlacementTemplate.tsx
interface CollegePlacementData {
  name: string;
  slug: string;
  description: string;
  stats: { placementRate: string; recruiters: number; highestPackage: string; avgPackage: string; };
  programmes: Programme[];
  recruiters: Recruiter[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  facilitators: Facilitator[];
  contact: ContactInfo;
}

export default function CollegePlacementTemplate({ data }: { data: CollegePlacementData }) {
  return (
    <>
      <Breadcrumb />
      <HeroSection data={data} />
      <QuickStatsBar stats={data.stats} />
      <AboutSection description={data.description} />
      <ProgrammesSection programmes={data.programmes} />
      <RecruitersGrid recruiters={data.recruiters} />
      <PlacementProcess college={data.name} />
      <TestimonialsSection testimonials={data.testimonials} />
      <TrainingSection college={data.name} />
      <FacilitatorsSection facilitators={data.facilitators} />
      <FAQSection faqs={data.faqs} />
      <ContactCTA contact={data.contact} />
    </>
  );
}
```

### 19.3 Shared Section Components

Many sections repeat across pages. Build these as reusable components:

| Component | Used On | Props |
|-----------|---------|-------|
| `SectionBadge` | All pages | `text`, `variant` |
| `SectionHeading` | All pages | `badge`, `title`, `description` |
| `StatCard` | Home, Colleges, Individual | `value`, `label`, `icon` |
| `TestimonialCard` | Home, Individual | `testimonial` object |
| `FacilitatorCard` | Home, About, Individual | `facilitator` object |
| `ProcessStep` | Home, Placements, Individual | `step`, `index` |
| `FAQSection` | Home, Individual, Internships, AI Workshop | `faqs` array |
| `ContactCTA` | Home, Individual, Drives, Internships, Contact | `contact` object |
| `RecruiterMarquee` | Home, Individual | `logos` array |

---

## 20. Quality Assurance Checklist

### 20.1 Visual QA

- [ ] All pages match wireframe layouts
- [ ] Brand colors applied consistently (no hardcoded hex)
- [ ] Typography hierarchy is consistent across all pages
- [ ] Spacing follows the design token system
- [ ] Cards have consistent border-radius and shadows
- [ ] Buttons follow the defined variants (primary, secondary, ghost)
- [ ] Icons are from Lucide React, consistent sizes (16, 20, 24px)

### 20.2 Responsive QA

- [ ] Mobile (320px): Single column, stacked, readable
- [ ] Mobile (375px): Standard mobile layout
- [ ] Small Tablet (640px): 2-column where appropriate
- [ ] Tablet (768px): Balanced layout
- [ ] Desktop (1024px): Full layout, no bottom nav
- [ ] Large (1280px): max-w-7xl container centered
- [ ] Extra Large (1536px): No layout overflow

### 20.3 Functionality QA

- [ ] All navigation links work correctly
- [ ] Dropdown menus open/close properly
- [ ] Bottom nav shows on mobile, hidden on desktop
- [ ] More menu accordion expands/collapses
- [ ] Tab switching works (Drives filter, Internship colleges)
- [ ] FAQ accordion expands/collapses with animation
- [ ] Marquee scrolls continuously, pauses on hover
- [ ] Counter animation triggers on scroll into view
- [ ] WhatsApp links open with pre-filled messages
- [ ] AI Workshop form validates all required fields
- [ ] Bilingual toggle shows both languages

### 20.4 JKKN Terminology QA

- [ ] Zero instances of "student/students" in user-facing content
- [ ] Zero instances of "teacher/faculty" in user-facing content
- [ ] Zero instances of "classroom" in user-facing content
- [ ] All variable names use JKKN conventions
- [ ] All component names use JKKN terminology

### 20.5 Performance QA

- [ ] Lighthouse Performance score > 90
- [ ] Largest Contentful Paint < 2.5s
- [ ] First Input Delay < 100ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] All images optimized with Next.js Image
- [ ] Fonts loaded with `display: swap`
- [ ] No render-blocking resources

### 20.6 Accessibility QA

- [ ] Lighthouse Accessibility score > 95
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces content correctly
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA

### 20.7 SEO QA

- [ ] Each page has unique `<title>` tag
- [ ] Each page has meta description
- [ ] JSON-LD schemas valid (test with Google Rich Results Test)
- [ ] Breadcrumbs on sub-pages
- [ ] Internal links between related pages
- [ ] Semantic HTML structure (h1-h6 hierarchy)
- [ ] Alt text contains relevant keywords

---

## Appendix A: CSS Custom Properties (Full)

```css
:root {
  /* Brand Colors */
  --green: #0b6d41;
  --brand: #0b6d41;
  --green-light: #0f8f56;
  --brand-light: #0f8f56;
  --green-dark: #03311c;
  --brand-dark: #03311c;
  --green-darker: #085032;
  --brand-glow: #0b6d411a;

  /* Accent */
  --gold: #7db247;
  --accent: #7db247;
  --gold-bright: #7db247;
  --accent-light: #65a667;
  --success: #3eb75e;

  /* Neutral & Surface */
  --background: #f9f7f2;
  --cream: #f9f7f2;
  --cream-dark: #f0f7f2;
  --foreground: #111827;
  --dark: #03311c;
  --surface-0: #ffffff;
  --surface-1: #f9fafb;
  --surface-2: #f0f7f2;
  --surface-3: #e5e7eb;

  /* Text */
  --text-primary: #111827;
  --heading: #111827;
  --text-secondary: #4b5563;
  --body-text: #4b5563;
  --text-tertiary: #6b7280;

  /* Border */
  --border: #e5e7eb;
  --border-light: #e8e8e8;

  /* Semantic */
  --error: #dc2626;
  --error-light: #fecaca;
  --warning: #f59e0b;
  --warning-light: #fef3c7;
  --info: #3b82f6;
  --info-light: #dbeafe;

  /* Spacing */
  --section-padding-y: 3rem;       /* py-12 */
  --section-padding-y-md: 4rem;    /* md:py-16 */
  --section-padding-y-lg: 5rem;    /* lg:py-20 */
  --container-padding-x: 1rem;     /* px-4 */
  --container-padding-x-sm: 1.5rem;/* sm:px-6 */
  --container-padding-x-lg: 2rem;  /* lg:px-8 */

  /* Typography */
  --font-family: 'Poppins', system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-body: 1.6;
  --line-height-heading: 1.2;

  /* Border Radius */
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;

  /* Z-Index */
  --z-header: 50;
  --z-dropdown: 1000;
  --z-bottom-nav: 1020;
  --z-overlay: 1040;
  --z-modal: 1050;
  --z-tooltip: 1070;
}
```

---

## Appendix B: Recruiter List (24 Companies)

| # | Company | Sector |
|---|---------|--------|
| 1 | TCS | IT |
| 2 | Infosys | IT |
| 3 | Wipro | IT |
| 4 | Cognizant | IT |
| 5 | HCL | IT |
| 6 | Apollo | Healthcare |
| 7 | Fortis | Healthcare |
| 8 | Cipla | Pharma |
| 9 | Sun Pharma | Pharma |
| 10 | L&T | Manufacturing |
| 11 | Zoho | IT |
| 12 | Accenture | IT |
| 13 | Dr.Reddy's | Pharma |
| 14 | Lupin | Pharma |
| 15 | Biocon | Pharma |
| 16 | Amazon | IT |
| 17 | Flipkart | IT |
| 18 | HDFC Bank | Finance |
| 19 | Manipal | Healthcare |
| 20 | Thyrocare | Diagnostics |
| 21 | KIMS | Healthcare |
| 22 | Concentrix | IT |
| 23 | Hetero | Pharma |
| 24 | Kauvery | Healthcare |

---

## Appendix C: Top Recruiters by Sector

| Sector | Companies |
|--------|-----------|
| Healthcare & Hospitals | Apollo, Fortis, Manipal, KIMS, Kauvery |
| IT & Software | TCS, Infosys, Wipro, Zoho, Cognizant |
| Pharmaceutical | Cipla, Sun Pharma, Dr.Reddy's, Lupin, Biocon |
| Manufacturing & Engineering | L&T, HCL, (3 more TBD) |
| Diagnostics & Laboratory | Thyrocare, (4 more TBD) |
| Education & Research | (5 TBD) |

---

*This specification integrates brand-styling design tokens, JKKN terminology standards, mobile-bottom-navbar patterns, and ultra-ui-ux-designer wireframe methodology into a single implementation-ready document.*
