# SkyIQ.cloud - AI Voice Agent Platform

## Overview

SkyIQ is a B2B SaaS platform offering AI-powered voice agents to automate call handling, lead qualification, and appointment scheduling for service-based businesses like med spas, realtors, contractors, and insurance agencies. This full-stack application includes a marketing landing page and an interactive dashboard demo, showcasing the platform's capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions

The UI/UX is built with React 18 and TypeScript, utilizing Shadcn/ui (New York style variant) with Radix UI primitives and Tailwind CSS for utility-first styling. It features a custom theme system with CSS variables, drawing inspiration from modern SaaS products like Linear, Stripe, and Vercel. The design is fully responsive and mobile-first, incorporating touch-friendly controls, larger interactive elements, and optimized layouts for various screen sizes. Typography uses Inter and DM Sans from Google Fonts.

### Technical Implementations

The frontend is a Single-Page Application (SPA) using Vite for fast development and Wouter for client-side routing. State management is handled by TanStack Query for server state and React hooks for local component state. Form management is done with React Hook Form and Zod for validation.

The backend is an Express.js server on Node.js, also written in TypeScript. It uses an in-memory storage implementation but is architecturally prepared for PostgreSQL integration with Drizzle ORM. The server features a modular route system, HTTP server with raw body buffering, and a middleware chain for logging and parsing. Development uses `tsx` for direct TypeScript execution and Vite middleware for hot reloading.

Key frontend features include:
- A marketing landing page with hero section and feature grid.
- An interactive dashboard demo with views for call dashboard, call log, AI agent configuration, bulk caller, and business profile.
- Consultation booking modal integrated with Cal.com.
- Typing animation effects and smooth scroll navigation.
- An ElevenLabs voice showcase section for AI voice demonstrations.

### Feature Specifications

- **Marketing Landing Page**: Showcases platform features and benefits.
- **Dashboard Demo**: Provides an interactive experience of the platform's core functionalities using mock data.
- **Cal.com Integration**: Enables direct appointment booking through an embedded widget.
- **ElevenLabs Voice Showcase**: Demonstrates various AI voice options with real-time audio generation.
- **Mobile Optimization**: Ensures a seamless experience across devices with touch-friendly elements, responsive layouts, and scroll indicators.

### System Design Choices

The application adopts a clear separation of concerns between the React frontend and Express backend. It uses an in-memory storage for immediate demonstration but is designed for easy transition to a PostgreSQL database via Drizzle ORM, with a defined schema and Zod validation. Serverless functions are utilized for specific integrations like ElevenLabs to optimize deployment on platforms like Netlify. The project structure is organized into `/client`, `/server`, and `/shared` directories for maintainability.

## External Dependencies

- **UI & Styling**: Radix UI, Tailwind CSS, class-variance-authority, Lucide React, Embla Carousel.
- **State & Data Management**: TanStack Query, React Hook Form, Zod, date-fns.
- **Backend & Database**: Drizzle ORM, @neondatabase/serverless (for PostgreSQL driver), connect-pg-simple.
- **Booking & Scheduling**: @calcom/embed-react.
- **AI Voice Generation**: ElevenLabs API (accessed via backend/serverless function).
- **Development Tools**: Vite, esbuild, tsx, @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer.
- **Fonts**: Google Fonts (Inter, DM Sans).