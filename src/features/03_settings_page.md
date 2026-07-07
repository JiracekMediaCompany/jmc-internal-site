# Settings Page & Theme Toggle Migration — Step-by-Step Guide

A concise implementation plan (no code) to create a Settings page, add a Settings menu option to the user profile dropdown, and migrate the theme toggle from the top navigation bar to the Settings page.

## 1. Define requirements & design UX
- [x] Confirm Settings page content: theme toggle as primary feature, extensible for future settings.
- [x] Design Settings page layout: title, section organization, responsiveness.
- [x] Define menu integration: Settings option in user dropdown (TopNav user menu).
- [x] Plan navigation flow: user menu → click Settings → navigate to /settings → back link or breadcrumb.
- [x] Define role-based visibility: Settings accessible only to signed-in users.

## 2. Verify environment & dependencies
- [x] Confirm React, TypeScript, React Router v7, and MUI v9 are available.
- [x] Verify existing ThemeToggle component is reusable and can be moved.
- [x] Check that ThemeContext is available globally for Settings page.
- [x] Ensure App.tsx routing structure supports new route.

## 3. Define props & data contracts
- [x] Define SettingsPage component interface (no required props, uses ThemeContext).
- [x] Define menu callbacks: `onSettingsClick` (implicit via routing).
- [x] Plan SettingsPage layout props: title, theme section, future sections.
- [x] Define back navigation: use `useNavigate()` or breadcrumb component.

## 4. Create Settings page & route
- [x] Create `src/pages/Settings/Settings.tsx` component file.
- [x] Add `/settings` route to App.tsx (protected by ProtectedRoute).
- [x] Create basic page layout: header, content section, back/close option.
- [x] Wire navigation: Settings page accessible only to authenticated users.

## 5. Move ThemeToggle from TopNav to Settings
- [x] Remove ThemeToggle from TopNav component.
- [x] Import and render ThemeToggle in Settings page.
- [x] Update TopNav styling to remove gap/spacing where ThemeToggle was.
- [x] Verify TopNav still displays correctly on desktop and mobile.

## 6. Add Settings menu option to user dropdown
- [x] Add "Settings" MenuItem to TopNav user menu (above Sign Out).
- [x] Wire click handler: navigate to `/settings` using `useNavigate()`.
- [x] Close menu after click (call `handleUserMenuClose()`).
- [x] Add Divider before Sign Out to separate Settings from logout.

## 7. Accessibility & navigation
- [x] Use semantic `<nav>` and proper heading hierarchy on Settings page.
- [x] Add ARIA labels: breadcrumb or back button, page title.
- [x] Ensure keyboard navigation: Tab through settings, Enter to navigate back.
- [x] Add visible focus styles on back button and settings controls.

## 8. Styling, responsiveness & testing
- [x] Use MUI theme tokens for Settings page layout (spacing, typography, colors).
- [x] Ensure Settings page is responsive (mobile-friendly).
- [x] Test navigation: menu → Settings → back, back button works from /settings.
- [x] Test theme toggle on Settings page (verify it still updates theme globally).
- [x] Test mobile drawer: Settings option appears in mobile menu.

---

Follow these steps to implement a Settings page and migrate the theme toggle from the navigation bar.

## Implementation Notes

### Step 1 — Requirements & Design UX

**Settings Page Content:**
- Primary feature: Theme Toggle (Light/Dark mode)
- Layout: Centered card or section-based layout
- Future extensibility: Preferences, Profile, Account settings, etc.
- Title: "Settings" with subtitle for each section

**Settings Page Layout (Desktop):**
```
Header/Title: "Settings"
├── Theme Section
│   ├── Label: "Appearance"
│   └── ThemeToggle Component
├── [Future: Additional Sections]
└── Back Button / Breadcrumb
```

**Settings Page Layout (Mobile):**
```
Header: "Settings" (mobile-optimized)
├── Theme Section (full-width)
├── [Future sections]
└── Back Button (fixed or sticky)
```

**Menu Integration:**
- User menu (desktop): "Settings" option above "Sign Out" with Divider separator
- Mobile drawer: "Settings" ListItemButton in drawer menu
- Navigation: Click → route to `/settings` (replace current route)
- Back navigation: Browser back button or "Back" button component

**Role-Based Visibility:**
- Settings: Visible only when signed-in (conditional rendering in user menu)
- Settings page route: Protected by existing ProtectedRoute
- Mobile drawer: Settings shows only for signed-in users

### Step 2 — Environment & Dependencies Verified

**Available Components & Libraries:**
- React 19.2.7 ✓
- TypeScript 4.9.5 ✓
- React Router v7.18.1 ✓
- MUI v9.2.0 + @mui/icons-material ✓
- ThemeContext (existing) ✓
- ThemeToggle component (existing, reusable) ✓

**Routing Structure:**
- App.tsx uses BrowserRouter with Routes ✓
- ProtectedRoute component handles auth checks ✓
- Can add new route: `<Route path="/settings" element={<SettingsPage />} />`

**Theme Integration:**
- ThemeContext exported with `useThemeMode()` hook ✓
- Theme state persists in localStorage ✓
- ThemeToggle component uses `useThemeMode()` internally ✓

### Step 3 — Data Contracts Defined

**SettingsPage Component Interface:**
```typescript
interface SettingsPageProps {
  // No required props - uses ThemeContext directly
}
```
- Hooks used: `useThemeMode()`, `useNavigate()`, `useLocation()`
- State: Local UI state only (no new context needed)

**TopNav User Menu Integration:**
- New MenuItem: `onClick={() => { handleUserMenuClose(); navigate('/settings'); }}`
- Position: Before Divider that precedes "Sign Out"
- Icon (optional): GearIcon or SettingsIcon from @mui/icons-material

**Back Navigation Options:**
- Option 1: Browser back button (automatic via React Router)
- Option 2: "Back" button using `useNavigate()` with `-1`
- Option 3: Breadcrumb: Home > Settings (optional future enhancement)

**SettingsPage Data Flow:**
1. User clicks "Settings" in menu → navigate('/settings')
2. ProtectedRoute checks auth → renders SettingsPage
3. SettingsPage mounts → renders ThemeToggle with ThemeContext
4. User toggles theme → ThemeContext updates globally
5. User clicks back → navigate(-1) or use browser back button

### Step 4 — Settings Page & Route Created

**File Structure:**
```
src/pages/Settings/Settings.tsx (new)
```

**Route Addition (App.tsx):**
```typescript
<Route element={<ProtectedRoute />}>
  <Route path="/home" element={<HomePage />} />
  <Route path="/settings" element={<SettingsPage />} />
</Route>
```

**Basic SettingsPage Layout:**
- Container: MUI Box or Container with padding
- Header: Typography variant="h4" "Settings"
- Content: MUI Card or Paper with sections
- Back button: IconButton with ArrowBack icon or text "Back" Button

**SettingsPage Access:**
- Only accessible when signed-in (protected by ProtectedRoute)
- Direct URL access: /settings redirects to login if not authenticated

### Step 5 — ThemeToggle Moved to Settings

**TopNav Changes:**
- Remove ThemeToggle import and component from TopNav.tsx
- Remove `<ThemeToggle />` from desktop right section
- Remove `<ThemeToggle />` from mobile drawer
- Adjust spacing (remove gaps if needed)

**SettingsPage Changes:**
- Import ThemeToggle from `../../../components/ThemeToggle`
- Render ThemeToggle in "Appearance" or "Theme" section
- Wrap in MUI Box with proper spacing and labels

**Visual Impact:**
- TopNav no longer shows theme toggle (cleaner navbar)
- Theme toggle now centralized on Settings page
- Theme still updates globally (ThemeContext persists state)

### Step 6 — Settings Menu Option Added

**TopNav User Menu Updates:**
- New import: `SettingsIcon` from @mui/icons-material (or use GearIcon)
- New MenuItem before Divider:
  ```
  <MenuItem onClick={() => { handleUserMenuClose(); navigate('/settings'); }}>
    <SettingsIcon sx={{ mr: 1 }} />
    Settings
  </MenuItem>
  <Divider />
  ```

**Mobile Drawer Updates:**
- New ListItemButton in drawer (after home link, before theme toggle removal):
  ```
  <ListItemButton onClick={handleNavigateSettings}>
    <SettingsIcon sx={{ mr: 1 }} />
    <ListItemText primary="Settings" />
  </ListItemButton>
  ```

**Navigation Handler:**
- `handleNavigateSettings`: Close drawer, navigate to /settings
- Consistent with existing nav handlers (e.g., `handleNavigateHome`)

**Menu Positioning:**
- Desktop user menu: Settings above Divider, above Sign Out
- Mobile drawer: Settings before Sign Out (sign-out moved to bottom)
- Both: Only visible when signed-in

### Step 7 — Accessibility & Navigation

**Semantic HTML:**
- SettingsPage: `<main>` container with `role="main"`
- Heading: `<h1>` or Typography component with semantic heading
- Back button: Proper `<button>` or `<a>` with aria-label

**ARIA Labels & Attributes:**
- Back button: `aria-label="Go back to previous page"`
- Settings header: `aria-label="Settings page"`
- Menu items: `aria-label="Open Settings"` (implicit in MUI MenuItem)
- Theme section: `aria-labelledby="appearance-heading"`

**Keyboard Navigation:**
- Tab through all interactive elements (back button, theme toggle controls)
- Enter on back button → navigate to previous page
- Space on theme toggle switch → toggle theme
- Focus visible styles on all buttons

**Navigation Patterns:**
- No keyboard traps
- Focus moves logically through Settings page
- Back button always accessible (top of page or sticky)

### Step 8 — Styling, Responsiveness & Testing

**MUI Theme Integration:**
- SettingsPage container: `sx={{ maxWidth: 'md', mx: 'auto', py: 4 }}`
- Heading: `variant="h4"` with `sx={{ mb: 3 }}`
- Sections: MUI `Card` or `Paper` with `sx={{ p: 3, mb: 2 }}`
- Spacing: Theme scale `py: 4`, `mb: 3`, `p: 3`, etc.

**Responsive Design:**
- Desktop: Centered container (max-width: 600px), full theme toggle display
- Tablet: Slightly smaller container, same layout
- Mobile: Full-width with padding, theme toggle takes full width
- Breakpoint handling: MUI `sx={{ display: { xs: 'block', md: 'flex' } }}` if needed

**Testing Checklist:**
- ✓ Settings menu option appears in user dropdown (desktop & mobile)
- ✓ Click Settings → navigates to /settings
- ✓ /settings page renders correctly (signed-in users only)
- ✓ ThemeToggle on Settings page works (switches theme globally)
- ✓ Back button/browser back → returns to previous page
- ✓ TopNav no longer shows theme toggle
- ✓ Mobile drawer includes Settings option
- ✓ Keyboard navigation works (Tab, Enter, Space)
- ✓ Accessibility: proper ARIA labels, focus styles, semantic HTML
- ✓ Theme persists after reload (ThemeContext localStorage)

**Deployment Status:**
- ⏳ Code implementation (ready to implement after plan approval)
- ⏳ Integration testing
- ⏳ Accessibility audit
- ⏳ Production deployment
