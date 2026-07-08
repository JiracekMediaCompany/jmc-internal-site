/**
 * WEB APPLICATION GUIDE
 * 
 * Comprehensive guide for setting up a React TypeScript application
 * matching the JMC Internal App stack and architecture
 */
export const WEB_APPLICATION_GUIDE = `# Web Application Setup Guide

## Overview

This guide provides step-by-step instructions for setting up a React TypeScript web application with the same technology stack and dependencies used in the JMC Internal App. This application features responsive UI components, authentication, theme management, and data visualization capabilities.

## Initial Project Setup

### Step 1: Create React App with TypeScript

Use Create React App to bootstrap your TypeScript project:

\`\`\`bash
npx create-react-app jmc-web-app --template typescript
cd jmc-web-app
\`\`\`

### Step 2: Install Core Dependencies

#### Navigation & Routing (Required)
\`\`\`bash
npm install react-router-dom@^7.18.1
npm install -D @types/react-router-dom@^5.3.3
\`\`\`

#### Styling & Theme Management (Required)
\`\`\`bash
npm install @mui/material@^9.2.0
npm install @emotion/react@^11.14.0 @emotion/styled@^11.14.1
npm install @mui/icons-material@^9.2.0
\`\`\`

#### Forms & Input Management (Recommended)
\`\`\`bash
npm install react-hook-form@^7.81.0
\`\`\`

#### UI Components & Data Visualization (Recommended)
\`\`\`bash
npm install @mui/x-data-grid@^9.8.0
\`\`\`

#### State Management (Choose One)

**For Simple Applications (Recommended for this app):**
React Context API is built-in with React - no additional installation needed.

**For Complex Applications (Optional):**
\`\`\`bash
npm install zustand@^4.4.0
\`\`\`

#### Testing & Quality Assurance (Included with CRA)
\`\`\`bash
npm install -D @testing-library/react@^16.3.2
npm install -D @testing-library/dom@^10.4.1
npm install -D @testing-library/jest-dom@^6.9.1
npm install -D @testing-library/user-event@^13.5.0
\`\`\`

#### Performance Monitoring (Optional)
\`\`\`bash
npm install web-vitals@^2.1.4
\`\`\`

## Application Architecture

### Directory Structure

\`\`\`
src/
├── components/           # Reusable UI components
├── context/             # React Context providers (Auth, Theme, etc.)
├── data/               # Mock or static data
├── features/           # Feature documentation and templates
├── pages/              # Page-level components (routed)
├── services/           # API services and utilities
├── theme/              # Theme configuration
├── App.tsx             # Main application component with routing
├── index.tsx           # Application entry point
└── setupTests.ts       # Test configuration
\`\`\`

### Key Technology Choices

**Framework:** React 19.2.7 with TypeScript
- Provides type safety and modern React features
- Supports functional components with hooks
- Built-in performance optimizations

**UI Library:** Material-UI (MUI) v9.2.0
- Comprehensive component library for professional UIs
- Consistent theming system for light/dark modes
- Accessibility-first design approach

**Styling:** Emotion (@emotion/react, @emotion/styled)
- CSS-in-JS solution used by MUI
- Dynamic styling based on props and context
- Strong TypeScript support

**Routing:** React Router v7.18.1
- Modern client-side routing
- Protected routes for authentication
- Nested route support for complex layouts

**State Management:** React Context API (Built-in)
- Ideal for simple to moderate complexity applications
- No external dependencies required
- Perfect for authentication, theme, and user preferences
- Can be combined with useReducer for more complex logic

**Alternative State Management:** Zustand (Optional for Complex Apps)
- Lightweight alternative to Redux or MobX
- Better for applications with complex state requirements
- Easier to use than Context API for large state trees
- Install with: \`npm install zustand@^4.x.x\`
- Consider using if your app has: multiple interconnected stores, frequent state updates, or complex derived state

**Form Handling:** React Hook Form v7.81.0
- Lightweight form validation library
- Excellent TypeScript support
- Minimal re-renders for performance

## Development Workflow

### Start Development Server
\`\`\`bash
npm start
\`\`\`

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Run Tests
\`\`\`bash
npm test
\`\`\`

## Implementation Checklist

### Phase 1: Foundation
- [ ] Create project with Create React App
- [ ] Install all core and recommended dependencies
- [ ] Setup directory structure
- [ ] Configure TypeScript (tsconfig.json already configured by CRA)
- [ ] Create App.tsx with Router setup
- [ ] Create index.tsx entry point

### Phase 2: Authentication & Context
- [ ] Create AuthContext for user state
- [ ] Create ThemeContext for light/dark mode
- [ ] Implement login/logout functionality
- [ ] Setup protected routes

### Phase 3: Layout & Navigation
- [ ] Build TopNav component with responsive design
- [ ] Create layout wrapper for pages
- [ ] Setup main navigation routes
- [ ] Implement theme toggle

### Phase 4: Pages & Features
- [ ] Create page components (Home, Settings, etc.)
- [ ] Implement page-specific logic
- [ ] Add forms with react-hook-form
- [ ] Setup data display with @mui/x-data-grid

### Phase 5: Testing & Polish
- [ ] Write unit tests for components
- [ ] Setup integration tests for pages
- [ ] Test authentication flows
- [ ] Verify accessibility
- [ ] Performance optimization
`;
