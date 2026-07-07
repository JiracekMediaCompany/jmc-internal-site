# Top Navigation Bar — Step-by-Step Guide

A concise implementation plan (no code) to create a responsive top navigation bar using MUI AppBar, React Router links, and integrated auth state management with role-based visibility.

## 1. Gather requirements & design UX
- [ ] Confirm nav items: primary links, secondary links, user menu, and notifications.
- [ ] Define responsive behavior: desktop inline links vs mobile drawer.
- [ ] Sketch AppBar layout: brand, navigation links, user menu, and hamburger for mobile.
- [ ] Define role-based visibility for signed-in vs signed-out states.

## 2. Verify environment & dependencies
- [ ] Ensure React, TypeScript, MUI v5, and React Router v6 are installed.
- [ ] Add `@mui/icons-material` package if needed.
- [ ] Confirm AuthContext is available globally.

## 3. Define props & data contracts
- [ ] Define minimal user shape consumed by nav (e.g., `{ id, name, roles }`).
- [ ] Define callbacks: `onSignOut`, `onNavigate`, and `onOpenNotifications` if needed.
- [ ] Plan menu states: closed/open, loading, error.

## 4. Integrate auth state & place component
- [ ] Use existing AuthContext as source of truth for user and auth state.
- [ ] Add `TopNav` component to root layout inside Router and AuthProvider for persistence across routes.
- [ ] Reserve AppBar offset spacing so page content doesn't sit under the navigation.

## 5. Build structure using MUI primitives
- [ ] Use MUI AppBar → Toolbar with brand, navigation buttons, and user menu icon.
- [ ] Implement Drawer component for mobile hamburger navigation.
- [ ] Implement Menu component for user dropdown actions.
- [ ] Use react-router `Link` components for all navigation links (SPA navigation).

## 6. Handle auth actions & role-based visibility
- [ ] Wire Sign In link to `/login` route for signed-out state.
- [ ] Implement Sign Out: call logout, clear client state, navigate to login route.
- [ ] Render role-restricted nav items based on server-provided roles (server enforces authorization).
- [ ] Show skeletons or placeholders while auth is loading.

## 7. Accessibility & security
- [ ] Use semantic `<nav>` container with MUI `component="nav"` prop.
- [ ] Add aria attributes: `aria-label`, `aria-controls`, `aria-expanded` on interactive elements.
- [ ] Ensure keyboard operability: Enter/Space open menus, Escape closes them, arrow navigation works.
- [ ] Preserve visible focus styles and manage focus trap when opening/closing Drawer/Menu.
- [ ] Do not render sensitive data; avoid injecting raw HTML in nav labels.

## 8. Styling, responsiveness, testing & deployment
- [ ] Use MUI theme tokens for spacing, typography, and colors.
- [ ] Hide/show link groups by breakpoint; ensure Drawer contains the same items as desktop.
- [ ] Unit test: render nav for logged-in, logged-out, and various roles.
- [ ] E2E test: drawer open/close, menu navigation, sign-out flow, and link navigation.
- [ ] Deploy to staging and verify across browsers, devices, and accessibility standards.

---

Follow these steps to implement a responsive, accessible, and secure top navigation bar using MUI, React Router, and AuthContext.