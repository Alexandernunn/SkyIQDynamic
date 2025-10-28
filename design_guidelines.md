# SkyIQ.cloud Landing Page Design Guidelines

## Design Approach
**Reference-Based Modern SaaS Design** inspired by Linear, Stripe, and Vercel – emphasizing clean hierarchy, subtle animations, and confidence-inspiring professionalism. This is a B2B SaaS product requiring trust signals while showcasing innovation.

## Core Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, and 32 for consistent rhythm
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Component spacing: gap-8 to gap-12 for major elements, gap-4 to gap-6 for related items
- Container: max-w-7xl with px-6 to px-8

**Grid Structure**: 
- Hero: Single column, centered, max-w-4xl for content
- Features: 3-column grid on desktop (lg:grid-cols-3), 2-column on tablet (md:grid-cols-2), single on mobile
- Dashboard showcase: Full-width with contained max-w-6xl
- Process steps: 3-column equal width (lg:grid-cols-3)

## Typography Hierarchy

**Font Selection**: Use Inter or DM Sans from Google Fonts for clean, modern SaaS aesthetic

**Text Sizes**:
- Hero headline: text-5xl to text-6xl (font-bold, leading-tight)
- Hero subheadline: text-xl to text-2xl (font-normal, leading-relaxed)
- Section headers: text-3xl to text-4xl (font-bold)
- Product names: text-xl to text-2xl (font-semibold)
- Body text: text-base to text-lg (leading-relaxed)
- Small labels/badges: text-sm (font-medium)

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Animated gradient background using subtle purple/blue gradients
- Large hero image showing AI dashboard or business automation in action (positioned behind text with overlay)
- Headline with dynamic typing effect rotating between value props
- Two CTA buttons: primary "Join Our Beta Program" + secondary "See It In Action" with blurred backgrounds
- Industry badges strip below CTAs showing "Med Spas • Realtors • Contractors • Insurance • Agencies"

### Interactive Industry Cards
- 5 cards in horizontal scroll on mobile, grid on desktop
- Each card: icon, industry name, hover state reveals "Learn More" overlay
- Smooth scale transform on hover (scale-105)
- Shadow elevation increase on interaction

### AI Products Showcase
- Tab navigation switching between products (Phone Closer™, Text Rep™, etc.)
- Each product: large icon, name with ™, 2-3 sentence description, key features list
- Side-by-side layout: product details on left, visual representation on right
- Smooth fade/slide transitions when switching tabs
- "Beta" badges on applicable products

### Dashboard Mockup Section
- Large, realistic dashboard interface mockup
- Animated metrics counters (numbers incrementing on scroll into view)
- Simulated "live" activity feed with staggered entry animations
- Clean card-based layout with subtle shadows
- Charts/graphs with animated path drawing

### Features Grid
- 3-column responsive grid
- Each feature card: icon (top), title, description, optional "Coming Soon" badge
- Hover state: subtle lift with shadow increase
- Icons should be consistent size (h-12 w-12)

### 3-Step Process Timeline
- Horizontal timeline with connecting line
- Each step: large number, title, description, icon
- Progressive reveal animation on scroll
- Active state highlighting as user scrolls

### CTA Sections
- Full-width sections with contrasting backgrounds
- Large headline, supporting text, dual CTA buttons
- Include trust signals: "No technical expertise required", "Launch in 48 hours"

### Footer
- Multi-column layout: Company info, Products, Resources, Contact
- Newsletter signup form
- Social proof elements: "Trusted by X businesses"
- Legal links and copyright

## Animation Principles

**Subtle and Purposeful** – animations should enhance, not distract:
- Fade-in on scroll for section reveals (duration-700, ease-out)
- Hover transforms: scale-105, shadow increases (transition-all duration-300)
- Counter animations for metrics (smooth number incrementing)
- Typing effect for hero headline rotating text
- Slide transitions for tab switching (translate-x with opacity)
- Parallax subtle movement on hero background (slow scroll rate)

**No animations on**:
- Body text appearance
- Static images
- Navigation (except dropdown menus)

## Images Strategy

**Hero Section**: 
- Large background image showing modern business dashboard or AI interface in use
- Semi-transparent dark overlay (opacity-60) for text readability
- Image should convey professionalism and technology

**Dashboard Mockup**:
- High-fidelity screenshot or designed mockup of the actual SkyIQ dashboard
- Should show: live metrics, conversation transcripts, lead cards, charts
- Clean, modern UI with organized sections

**Product Icons**:
- Use Heroicons for consistent iconography throughout
- Phone, message, star, chat, email, filter, cog icons for respective products

**Supporting Visuals**:
- Abstract tech/AI imagery for section backgrounds (subtle, low opacity)
- Industry-specific icons for the 5 target verticals

## Interactive States

**Buttons**:
- Primary: Solid fill with blurred background when over images, hover brightness increase
- Secondary: Outlined with hover fill transition
- Micro-interaction: subtle scale on click (scale-95)

**Cards**:
- Default: Subtle border, light shadow
- Hover: Increased shadow, slight lift (translateY -2)
- Active/Selected: Border highlight, stronger shadow

**Form Inputs**:
- Clean borders, focus state with ring
- Label animation on focus
- Inline validation states

## Accessibility
- Maintain WCAG AA contrast ratios
- Focusable elements have visible focus rings
- Animations respect prefers-reduced-motion
- Semantic HTML structure throughout

## Mobile Optimization
- Stack all multi-column layouts to single column
- Increase touch target sizes (min-h-12)
- Horizontal scrolling for industry cards
- Simplified animations on mobile
- Sticky CTA button on mobile viewports