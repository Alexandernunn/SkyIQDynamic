# SkyIQ.cloud - AI Voice Agent Platform

## Overview

SkyIQ is a B2B SaaS landing page and dashboard application for an AI-powered voice agent platform. The application helps businesses automate call handling, lead qualification, and appointment scheduling through intelligent AI voice agents. The platform targets industries like med spas, realtors, contractors, insurance agencies, and other service-based businesses.

This is a full-stack application with a React frontend and Express backend, featuring a marketing landing page and an interactive dashboard demo that showcases the platform's capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)
- Single-page application (SPA) architecture with client-side routing

**UI Component Library**
- Shadcn/ui component system (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component library includes 40+ pre-built components (buttons, dialogs, forms, etc.)
- Custom theme system with CSS variables for colors and spacing
- Design inspired by modern SaaS products (Linear, Stripe, Vercel aesthetic)

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React hooks for local component state
- Query client configured with infinite stale time and disabled refetch behaviors

**Styling System**
- Tailwind CSS with custom configuration
- CSS custom properties for theme variables (supports light/dark modes)
- Inter and DM Sans fonts from Google Fonts
- Responsive design with mobile-first approach
- Custom elevation system using opacity-based overlays for hover/active states

**Key Frontend Features**
- Marketing landing page with hero section and feature grid
- Interactive dashboard demo with multiple views (call dashboard, call log, AI agent configuration, bulk caller, business profile)
- Consultation booking modal with Cal.com integration for appointment scheduling
- Typing animation effects in hero section
- Tabbed navigation within dashboard components
- Mock data for demonstration purposes in dashboard
- Fully mobile-optimized with touch-friendly controls and scroll indicators
- Simplified navigation with Features and Demo tabs only
- Centered footer with logo, description, and copyright
- Smooth scroll navigation to key sections (Features, Demo)

**Mobile Optimization (October 2025)**
- **Touch Targets**: All interactive elements meet or exceed 44px minimum (48px standard for primary actions)
- **Scroll Indicators**: Animated "Swipe →" hints on tables that disappear after user interaction
- **Responsive Sidebar**: Collapsible navigation with hamburger menu on mobile (w-72 for better touch experience)
- **Larger Controls**: Navigation buttons (h-12), primary action buttons (h-12), form inputs (h-12), mobile toggle (48x48px)
- **Stacked Layouts**: All button groups and headers stack vertically on mobile (flex-col sm:flex-row)
- **Mobile-First Forms**: AI Agent test button (h-14), all inputs/selects sized for easy tapping
- **Touch-Friendly Tables**: Horizontal scroll with visual indicators, no page-wide overflow

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- Node.js runtime with ES modules (type: "module")
- TypeScript for type safety across the entire stack
- Development mode uses tsx for direct TypeScript execution
- Production builds bundle server code with esbuild

**Development Setup**
- Vite middleware integration for development hot reload
- Custom logging middleware for API request tracking
- Runtime error overlay plugin for Replit environment
- Separate development and production build processes

**Storage Layer**
- In-memory storage implementation (MemStorage class) for user data
- Storage interface pattern for easy swapping to database implementation
- Drizzle ORM configured for PostgreSQL (ready for database integration)
- Schema defined with Drizzle and Zod for validation

**Server Architecture Patterns**
- Modular route registration system
- HTTP server created with built-in http module
- Raw body buffering for webhook support
- Middleware chain for logging, JSON parsing, and URL encoding
- Static file serving with Vite in development, direct serving in production

### Database Schema

**Current Implementation**
- Users table with id (UUID), username, and password fields
- Schema defined using Drizzle ORM pg-core dialect
- PostgreSQL as the target database system
- Migrations directory configured at ./migrations
- Database URL required via environment variable (DATABASE_URL)

**Schema Validation**
- Zod schemas generated from Drizzle tables using drizzle-zod
- InsertUser schema for user creation validation
- Type inference from schemas for TypeScript safety

**Note**: The application currently uses in-memory storage but is architecturally prepared for PostgreSQL integration. The schema and ORM configuration are in place, requiring only database provisioning and migration execution.

### Project Structure

**Directory Organization**
- `/client` - All frontend code (React components, pages, styles)
- `/client/src/components` - Reusable UI components and dashboard views
- `/client/src/components/ui` - Shadcn/ui component library
- `/client/src/pages` - Route-level page components
- `/server` - Backend Express server code
- `/shared` - Code shared between client and server (schemas, types)
- `/attached_assets` - Static assets (images, logos)
- `/migrations` - Database migration files (when generated)

**Build Output**
- `/dist/public` - Compiled frontend assets
- `/dist` - Bundled backend server code

## External Dependencies

### UI & Styling
- **Radix UI** - Headless component primitives for accessibility (@radix-ui/react-*)
- **Tailwind CSS** - Utility-first CSS framework with PostCSS
- **class-variance-authority** - Variant-based component styling utility
- **Lucide React** - Icon library for UI elements
- **Embla Carousel** - Carousel/slider functionality

### State & Data Management
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Form state management and validation
- **Zod** - Schema validation library
- **date-fns** - Date manipulation and formatting

### Backend & Database
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **connect-pg-simple** - PostgreSQL session store for Express

### Booking & Scheduling
- **@calcom/embed-react** - Cal.com React components for consultation booking

### Development Tools
- **Vite** - Frontend build tool and dev server
- **esbuild** - Fast JavaScript bundler for production builds
- **tsx** - TypeScript execution for development
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tools

### Fonts & Assets
- **Google Fonts** - Inter and DM Sans font families loaded via CDN
- Static assets stored in `/attached_assets` directory

### Notable Configuration
- TypeScript with strict mode enabled
- ES modules across client and server
- Path aliases (@/, @shared/, @assets/) for clean imports
- Custom Tailwind theme with design tokens
- Vite configured for SPA with Express middleware in development

## Cal.com Integration (October 2025)

### Overview
The application uses Cal.com for consultation booking and appointment scheduling. The Cal.com widget is embedded directly in the frontend, allowing visitors to book time slots without any backend infrastructure. This approach is perfect for Netlify deployment as it requires no server-side processing.

### Setup Instructions

1. **Create Cal.com Account**
   - Visit [cal.com](https://cal.com) and create a free account
   - Connect your calendar (Google Calendar, Outlook, etc.)
   - Set your availability preferences

2. **Create Event Type**
   - Create a new event type (e.g., "30 Min Consultation")
   - Configure duration, buffer times, and meeting details
   - Get your booking link (format: `username/event-type`)

3. **Update Booking Link**
   - Open `client/src/components/AppointmentFormModal.tsx`
   - Update the `calLink` prop to your Cal.com link:
     ```tsx
     calLink="your-username/your-event-type"
     ```
   - Example: `calLink="skyiq/30min"`

### Architecture Details

**Frontend-Only Approach**
- Cal.com widget (`@calcom/embed-react`) runs entirely in the browser
- No backend server or database required for appointment booking
- Perfect for static site deployment on Netlify
- All scheduling logic handled by Cal.com infrastructure

**User Experience**
- Visitors click "Book Consultation" button
- Cal.com widget opens in a modal dialog
- Month view calendar with dark theme and custom branding (#009AEE)
- Automatic timezone detection and conversion
- Email confirmations and reminders sent automatically
- Rescheduling and cancellation support included

**Files Structure**
- `/client/src/components/AppointmentFormModal.tsx` - Cal.com widget component
- `.env.example` - Configuration notes for Cal.com setup

**Widget Configuration**
- Theme: Dark mode with custom brand color (#009AEE)
- Layout: Month view for easy date selection
- Namespace: "30min" for this specific booking widget
- Responsive design optimized for mobile and desktop

### Features Included
- ✅ Calendar availability display
- ✅ Automatic timezone handling
- ✅ Email confirmations and reminders
- ✅ Reschedule and cancel functionality
- ✅ Integration with Google Calendar, Outlook, etc.
- ✅ No credit card required (Cal.com free tier)
- ✅ Custom branding with your brand colors

### Deployment Considerations
- No environment variables needed for basic setup
- Cal.com handles all scheduling and notification logic
- Free tier supports unlimited event types and bookings
- Consider upgrading to Cal.com paid plans for advanced features (teams, workflows, etc.)