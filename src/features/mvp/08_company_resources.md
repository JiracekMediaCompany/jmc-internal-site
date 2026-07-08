# Company Resources Page — Step-by-Step Guide

A concise implementation plan for Phase 1 of the Company Resources page with tabbed interface displaying resource categories (Feature Template, Mobile, Web App, Mobile Game, Computer Game).

## 1. Create Company Resources Page Component
- [x] Create new file: `src/pages/CompanyResources/CompanyResources.tsx`
- [x] Import MUI components: `Tabs`, `Tab`, `Paper`, `Box`, `Container`, `Typography`
- [x] Implement tab state using `useState` hook

## 2. Add Feature Template Tab
- [x] Add "Feature Template" as the first tab in the tabs array
- [x] Update TabPanel content to display the template tab
- [x] Ensure Feature Template tab is the default active tab (value: 0)

## 3. Build Tabbed Interface
- [x] Define four resource tabs: Mobile, Web App, Mobile Game, Computer Game
- [x] Create `TabPanel` component for content display
- [x] Implement tab switching logic with `onChange` handler

## 4. Add Tab Content Layout
- [x] Create centered content area using MUI `Box` with `sx` styling
- [x] Display tab name in `Typography` component
- [x] Ensure responsive layout for all screen sizes

## 5. Integrate Theme Support
- [x] Use `useThemeMode()` hook from ThemeContext
- [x] Apply theme-aware styling with `isDark` variable
- [x] Ensure consistent appearance with existing pages

## 6. Update App Routing
- [x] Import `CompanyResourcesPage` in `App.tsx`
- [x] Add new route: `/company-resources` within `ProtectedRoute`
- [x] Verify route protection for authenticated users only

## 7. Update Navigation
- [x] Add link to CompanyResources in `TopNav.tsx`
- [ ] Include appropriate icon (e.g., LibraryBooksIcon)
- [ ] Test navigation from TopNav to page

## 8. Verify Styling & Responsiveness
- [ ] Test on desktop, tablet, and mobile viewports
- [ ] Verify tab switching works smoothly
- [ ] Confirm light/dark theme toggle works

## 9. Test Integration
- [ ] Test page loads when authenticated
- [ ] Verify ProtectedRoute blocks unauthorized access
- [ ] Check all tab content displays correctly

## 10. Add Web Application Setup Guide
- [ ] Create comprehensive Web Application Guide markdown
- [ ] Document current application stack and architecture
- [ ] Organize libraries by functional area (Routing, Styling, Forms, Testing, etc.)
- [ ] Provide step-by-step setup instructions for new developers
- [ ] Include npm install commands for each library category
- [ ] Display guide in the "Web App" tab of Company Resources

---

Follow these steps to implement the Company Resources page with MUI Tabs, routing, and theme support.

## Implementation Notes

### Step 1 — Create Company Resources Page Component

Use the existing `CompanyUsersPage` as a reference for structure. The page should:
- Import necessary MUI components and hooks
- Use functional component pattern
- Include JSDoc comments for clarity
- Implement basic layout structure with Container and Box

### Step 2 — Build Tabbed Interface

Create a custom `TabPanel` component that conditionally renders based on tab state. This follows the MUI Tabs pattern and keeps the code modular. Use `value` and `onChange` to track active tab, storing index (0-3 for the four tabs).

### Step 3 — Add Tab Content Layout

For Phase 1, each tab panel displays only a centered Typography element showing "You are viewing [Tab Name]". Use MUI Box with `sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}` for centering. This provides placeholder space for future content.

### Step 4 — Integrate Theme Support

Call `useThemeMode()` hook to access `isDark` variable. Apply conditional styling to Paper component background or use MUI's built-in theme responsiveness. This ensures the page adapts to light/dark mode toggling.

### Step 5 — Update App Routing

Add the component to App.tsx routes within the `ProtectedRoute` element so only authenticated users can access it. The route path should be `/company-resources` to match the naming convention of other company pages.

### Step 6 — Update Navigation

Add a navigation menu item to TopNav.tsx. Include an appropriate MUI icon like `LibraryBooksIcon` or `FolderIcon` and label it "Resources". This makes the page discoverable from the main navigation.

### Step 7 — Verify Styling & Responsiveness

Test the layout on various screen sizes using browser DevTools. Ensure tabs are readable, content is centered, and no overflow occurs. Verify dark/light mode toggle updates styles properly without page reload.

### Step 8 — Test Integration

Verify the page requires authentication (redirect to login if not logged in). Test all four tabs switch content properly. Confirm the centered text updates when switching tabs. Check console for any errors or warnings.

### Step 9 — Add Web Application Setup Guide

Create a comprehensive Web Application Guide that serves as a reference for developers setting up new React TypeScript applications. The guide should:

1. **Overview Section**: Briefly describe the JMC Internal App and its purpose
2. **Project Setup**: Provide Create React App command with TypeScript
3. **Dependency Organization**: Group libraries by functional area:
   - Navigation & Routing: react-router-dom, @types/react-router-dom
   - Styling & Theme: @mui/material, @emotion/react, @emotion/styled, @mui/icons-material
   - Forms: react-hook-form
   - UI Components: @mui/x-data-grid
   - Testing: @testing-library/* packages
   - Performance: web-vitals
4. **Installation Commands**: Provide npm install commands for each category, with version numbers matching package.json
5. **Architecture Section**: Explain directory structure and technology choices
6. **Development Workflow**: Include commands for start, build, test
7. **Implementation Checklist**: Provide phased approach for developers (Foundation, Auth, Layout, Features, Testing)
8. **Common Patterns**: Show code examples for Theme Context, Protected Routes, React Hook Form
9. **Next Steps**: Guide developers to explore codebase and follow feature templates

Display this guide in a scrollable, code-formatted text area within the "Web App" tab, similar to how the Feature Template is displayed.
