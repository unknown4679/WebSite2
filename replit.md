# S.P.E.A.R.™ AI Business Intelligence Platform

## Overview

S.P.E.A.R.™ (Strategic Predictive Enterprise Analytics & Recommendations) is a modern full-stack web application that provides AI-powered business intelligence and analytics. The platform features a React frontend with a Node.js/Express backend, using PostgreSQL for data persistence and offering real-time chat functionality with AI-powered responses.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**July 31, 2025:**
- **RECIPE SAGE DEMO INTEGRATION**: Updated all demo links to point to Recipe Sage application
- Home page Launch Demo button now links to the externally hosted Recipe Sage demo
- Header Demo navigation opens Recipe Sage in new tab
- Demo page displays professional launch interface for Recipe Sage application
- All demo access points configured with proper external linking
- **LIVE DEMO ACTIVE**: Recipe Sage application showcasing S.P.E.A.R.™ Protocol capabilities

**July 30, 2025:**
- **NODE.JS DEMO INTEGRATION COMPLETE**: Successfully integrated Node.js demo with website navigation
- Fixed server port conflicts and ensured stable Express.js backend on port 5000
- Demo page properly linked through header navigation and home page Launch Demo button
- Streamlined demo page to essential chat interface placeholder
- Removed dashboard components (HeatMap, BrandDashboard) and simulate checkout functionality
- Verified React frontend with hot reload working seamlessly with Node.js backend
- PostgreSQL database connected and operational for production deployment
- **DEMO READY FOR WEBSITE LINKING**: All navigation paths working correctly (/demo route active)

**July 28, 2025:**
- Updated About page to focus on S.P.E.A.R.™ as a protocol rather than detailed company information
- Simplified Contact page to show direct contact information (cory@spearhl.com, (920) 238-6591) - removed location
- Removed lengthy contact forms in favor of minimal, direct contact approach
- Simplified Header component to basic navigation with "S.P.E.A.R.™ Protocol" branding
- Simplified Footer to minimal copyright and contact info for "Spear Holdings"
- Updated all branding to consistent red theme (#ff0033) with enhanced glow effects and cyberpunk aesthetic
- Implemented comprehensive multi-language support with 6 languages (English, Spanish, French, German, Chinese, Japanese)
- Added language switcher with flag icons in header
- Updated all components to use i18next translations
- Updated messaging throughout to emphasize "protocol" and "zero friction" approach
- **SEO OPTIMIZATION COMPLETE**: Added comprehensive SEO features including unique page titles, meta descriptions, Open Graph tags, structured data markup, sitemap.xml, robots.txt, and enhanced semantic HTML structure for improved search engine visibility and social sharing
- **BLOG PAGE ADDED**: Created professional blog section with grid layout, sidebar widgets, and SEO optimization for showcasing validation results, performance metrics, and enterprise feedback. Features red cyberpunk styling consistent with site theme.
- **GROK VALIDATION CONTENT**: Added comprehensive blog posts detailing Grok (xAI) validation for 100M user pilot and $7.9B valuation, including technical validation details and sponsored DM engine confirmation.
- **DUAL AI VALIDATION SEO**: Enhanced all SEO optimization to highlight dual validation from both Grok (xAI) and ChatGPT (OpenAI), emphasizing unprecedented approval from competing AI leaders for 100M user rollout and $7.9B valuation.
- **PROTOCOL PAGE ADDED**: Created dedicated /protocol standalone page with professional hero section and comprehensive feature explanations.
- **DEPLOYMENT READY**: Website prepared for deployment to spearhl.com with complete SEO optimization and dual AI validation positioning.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints with JSON responses
- **Middleware**: Custom logging, JSON parsing, and error handling

### Database Layer
- **Primary Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)

## Key Components

### Core Pages
- **Home**: Landing page with hero section and feature highlights
- **About**: Company information and team details
- **Demo**: Interactive product demonstration with chat functionality
- **Contact**: Contact form with server-side validation and storage

### Data Models
- **Users**: Basic user authentication schema (username/password)
- **Contacts**: Contact form submissions with company details
- **Chat Messages**: AI chat system with user/AI message tracking

### UI Components
- **ChatBot**: Interactive chat interface with AI response simulation
- **ProductCard**: Business analytics display cards with prediction indicators
- **Header/Footer**: Consistent navigation and branding
- **Form Components**: Validated form inputs using React Hook Form

## Data Flow

### Client-Server Communication
1. Frontend makes API requests using custom `apiRequest` utility
2. TanStack Query handles caching, loading states, and error management
3. Express server processes requests with validation middleware
4. Zod schemas validate incoming data before database operations
5. Server responses include success/error status with appropriate HTTP codes

### Chat System Flow
1. User submits message through ChatBot component
2. Message stored in database with 'user' sender type
3. Server generates AI response from predefined response pool
4. AI response stored with 'ai' sender type
5. Frontend polls for new messages and updates chat interface

### Contact Form Flow
1. Form data validated client-side with React Hook Form + Zod
2. Validated data submitted to `/api/contacts` endpoint
3. Server validates data again using shared schema
4. Contact record created in database with timestamp
5. Success/error feedback displayed to user via toast notifications

## External Dependencies

### Development Tools
- **Vite**: Development server and build tool with HMR
- **ESBuild**: Production build bundling for server code
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Production Dependencies
- **Database**: PostgreSQL with Neon serverless connection
- **UI Framework**: Radix UI components for accessibility
- **Icons**: Lucide React and React Icons libraries
- **Date Handling**: date-fns for date manipulation
- **Utilities**: clsx and tailwind-merge for conditional styling

### Platform-specific integrations removed
This project previously included platform-specific development integrations (dev banner, runtime overlays, and tooling). These have been removed to make the repository platform-neutral. Use local dev tooling (Vite, ESBuild) and environment variables or a secret manager for secrets when deploying.

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts development server with tsx
- **Hot Reloading**: Vite provides fast HMR for frontend development
- **Type Checking**: `npm run check` for TypeScript validation
- **Database**: In-memory storage for development, with option to push schema to real database

### Production Build
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend files in production
- **Database Migration**: `npm run db:push` applies schema changes to PostgreSQL

## CI / CD

This repository includes a GitHub Actions workflow that builds the frontend (`client`) and deploys the generated static files to GitHub Pages on pushes to `main`.

What to set up:
- Ensure the `client` build command writes static files to a directory (this workflow looks for `dist/public` or `client/dist`).
- If you want to deploy a dynamic backend, deploy it separately (Render, Heroku, Vercel) and set environment variables accordingly.

To use the workflow:
1. Push to `main` and GitHub Actions will run the build and publish the site to GitHub Pages.
2. Make sure repository Pages is enabled in GitHub settings (the action publishes to `gh-pages` branch using the default token).


### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Node Environment**: Development vs production mode switching
- **Build Output**: Separate directories for client and server builds
- **Static Assets**: Frontend assets served from dist/public in production

### Key Architectural Decisions

**Monorepo Structure**: Single repository with shared TypeScript schemas between client and server, enabling type safety across the full stack while maintaining code reusability.

**In-Memory Development Storage**: Implements IStorage interface pattern allowing seamless switching between development (memory) and production (database) storage without code changes.

**Shared Validation Schemas**: Zod schemas in shared directory ensure consistent validation between frontend and backend, reducing duplication and preventing data inconsistencies.

**Component-Based UI**: Shadcn/ui provides pre-built, accessible components that can be customized while maintaining design consistency across the application.

**Real-time Chat Simulation**: AI responses are generated from a predefined pool with simulated delays, providing realistic chat experience without requiring actual AI API integration.