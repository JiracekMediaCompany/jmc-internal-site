# React Login Landing Page — Step-by-Step Guide

A concise implementation plan (no code) to create a centered login landing page in React (web) using MUI components, react-hook-form, email validation, React Context for auth state, React Router DOM for navigation, a Home screen that reads "Hello world", and a Logout button.

## 1. Project setup
- [x] Create a new React project with TypeScript (Create React App or Vite).
- [x] Initialize a git repository.

## 2. Install dependencies
- [x] Install `@mui/material`, `@mui/icons-material`, and `@emotion/react` / `@emotion/styled` (MUI peer deps).
- [x] Install `react-hook-form`.
- [x] Install `react-router-dom` and `@types/react-router-dom`.

## 3. Define project structure
- [x] Create folders: `src/pages/`, `src/context/`, `src/components/` (optional shared components).
- [x] Plan files: App entry, `LoginPage`, `HomePage`, `AuthContext`, router setup in `App.tsx`.

## 4. Create Auth Context
- [x] Create a React Context holding auth state (e.g., `user` or `null`).
- [x] Provide `login(userData)` and `logout()` functions to update state.
- [x] Wrap the app in an `AuthProvider` so context is available globally.

## 5. Set up React Router DOM
- [x] Wrap the app in `<BrowserRouter>` (or `<HashRouter>` if not using a server).
- [x] Define routes: `/login` → `LoginPage`, `/` or `/home` → `HomePage`.
- [x] Set the default route to redirect to `/login`.

## 6. Protect routes
- [x] Create a `ProtectedRoute` component that reads auth context.
- [x] If `user` is `null`, redirect to `/login` using `<Navigate>`.
- [x] If `user` exists, render the child route (e.g., `HomePage`).
- [x] Wrap the `/home` route with `ProtectedRoute`.

## 7. Build Login page layout with MUI
- [x] Use MUI `Box` with `display: flex`, `justifyContent: center`, `alignItems: center`, `minHeight: 100vh` to center the form.
- [x] Use an MUI `Paper` or `Card` component as the login box with padding and a max width.
- [x] Add an MUI `Typography` component for the page/form title.

## 8. Hook up react-hook-form on Login page
- [x] Initialize the form with `useForm<{ email: string; password: string }>()`.
- [x] Use MUI `TextField` components wired via `Controller` from react-hook-form (or `register`).
- [x] Register two fields: `email` and `password`.

## 9. Implement validation rules
- [x] Email: required, and pattern validation using a standard email regex.
- [x] Password: required, and optionally enforce a minimum length.
- [x] Pass MUI `TextField` `error` and `helperText` props from react-hook-form `fieldState` to display inline error messages.

## 10. Handle form submission
- [x] On clicking the Login button, call react-hook-form's `handleSubmit`.
- [x] If validation passes, call `context.login()` with user data (e.g., email).
- [x] After login, navigate to `/home` using `useNavigate()` with `replace: true` to prevent back-navigation to Login.

## 11. Build Home page with MUI
- [x] Use MUI `Box` to center content vertically and horizontally (`minHeight: 100vh`).
- [x] Use MUI `Typography` to display "Hello world".
- [x] Use an MUI `Button` for the Logout action, placed below the text with appropriate spacing.
- [x] Optionally display the logged-in user's email using `Typography`.

## 12. Implement logout flow
- [x] On Logout button click, call `context.logout()` to clear auth state.
- [x] Navigate to `/login` using `useNavigate()` with `replace: true`.

## 13. Styling and UX polish
- [x] Set `type="email"` on the email input and `type="password"` on the password input.
- [x] Disable or show a loading state on the Login button during async auth operations.
- [x] Use MUI `ThemeProvider` and `CssBaseline` for consistent baseline styling.
- [x] Ensure layout is responsive (MUI's `sx` prop or `useMediaQuery` for breakpoints).

## 14. Persistence (optional)
- [x] Store auth tokens/user in `localStorage` or `sessionStorage` and rehydrate context on app start.
- [x] Handle token expiration and automatic logout as needed.

## 15. Testing and verification
- [x] Test validation: empty email, invalid email format, empty password, short password.
- [x] Test navigation: successful login goes to Home and back does not return to Login.
- [x] Test logout: clears context and redirects to Login.
- [x] Test protected route: direct access to `/home` without auth redirects to Login.
- [x] Test responsiveness: login box remains centered at various viewport sizes.

## 16. Security and production notes
- [x] Do not store sensitive credentials in plain storage; use secure, HttpOnly cookies or encrypted storage for tokens.
- [x] Use HTTPS and backend authentication for production.
- [x] Add error handling for failed login attempts (API/network errors).
- [x] Apply rate limiting and account lockout where appropriate.

---

Follow these steps to implement a centered React login page using MUI components, react-hook-form, email validation, React Context for auth state, React Router DOM for navigation, a "Hello world" Home screen, and a logout button.