# Company Apps Page — Step-by-Step Guide

A concise implementation plan to create a new Company Apps page that displays application data with a protected route accessible from the navigation bar.

## 1. Define App Data Structure
- [x] Create TypeScript `App` interface in `src/data/apps.ts`
- [x] Define all required fields: id, name, status, createdDate, createdBy, modifiedDate, modifiedBy, deployedDate, version, developmentTeam

## 2. Create Mock Data
- [x] Create array of 5-10 mock `App` objects with realistic test data
- [x] Export mock data from `src/data/apps.ts`

## 3. Build Company Apps Page Component
- [x] Create basic page component in `src/pages/CompanyApps/CompanyApps.tsx`
- [x] Add "Hello World" placeholder centered on page
- [x] Import and display mock app data

## 4. Create Apps Display Component
- [x] Design table/grid layout to show all app data
- [x] Create columns for each app field (name, status, created date, created by, modified date, modified by, deployed date, version, team)
- [x] Use MUI components (Table, TableContainer, Paper) for consistent styling

## 5. Add Route to App.tsx
- [x] Import `CompanyAppsPage` component
- [x] Add new route `/company-apps` inside `<ProtectedRoute>` wrapper

## 6. Update TopNav Navigation
- [x] Add "Company Apps" navigation link to desktop menu
- [x] Add "Company Apps" navigation link to mobile drawer menu
- [x] Create `handleNavigateCompanyApps()` handler

## 7. Test Protected Route
- [ ] Verify page only displays when user is logged in
- [ ] Test navigation link works and routes correctly
- [ ] Test on both desktop and mobile views

## 8. Future Enhancements (Optional)
- [ ] Add filtering by status or development team
- [ ] Add search functionality
- [ ] Add sorting capabilities
- [ ] Add pagination for large datasets

---

Follow these steps to implement the Company Apps page using React, TypeScript, MUI, and React Router with protected routing.

## Implementation Notes

### Step 1 — Define App Data Structure

✅ **COMPLETED** - Created `src/data/apps.ts` with `App` interface containing all required fields. Used TypeScript union type for status to enforce valid values: 'Active', 'Inactive', 'Development', 'Maintenance'.

### Step 2 — Create Mock Data

✅ **COMPLETED** - Generated 10 realistic mock apps with varied statuses, creation/modification dates, teams, and versions. Mix includes Active, Development, Maintenance, and Inactive apps.

### Step 3 — Build Company Apps Page Component

✅ **COMPLETED** - Created `src/pages/CompanyApps/CompanyApps.tsx` with full page layout including header, description, and integrated mock data display. Used responsive design patterns matching existing pages (Home, Settings, CompanyUsers).

### Step 4 — Create Apps Display Component

✅ **COMPLETED** - Built responsive MUI Table component with all app fields:
- App Name, Status (with colored Chips), Created/Modified dates, team members, deployed date, version, and development team
- Sticky table header for better UX on scrolling
- Status color mapping (Green=Active, Red=Inactive, Blue=Development, Amber=Maintenance)
- Date formatting utility for consistent display
- Total app count footer
- Hover effects on rows for better interactivity

### Step 5 — Add Route to App.tsx

✅ **COMPLETED** - Added `CompanyAppsPage` import and `/company-apps` route inside the `<ProtectedRoute>` wrapper, ensuring only authenticated users can access it.

### Step 6 — Update TopNav Navigation

✅ **COMPLETED** - Updated `src/components/TopNav.tsx`:
- Added `handleNavigateCompanyApps()` handler
- Added "Company Apps" button to desktop navigation menu (next to Home and Company Users)
- Added "Company Apps" list item to mobile drawer menu
- Follows existing styling and accessibility patterns

### Step 7 — Test Protected Route

PENDING - Manual testing required to verify:
- Page only shows when logged in (try accessing `/company-apps` before login - should redirect to `/login`)
- Navigation works on desktop and mobile (click "Company Apps" link from TopNav and verify page loads)
- Table displays all mock data correctly (verify all 10 apps display with correct columns and data)
- Responsive behavior on different viewport sizes (test on mobile, tablet, and desktop using browser dev tools)
- Table columns are always visible with horizontal scrolling on smaller screens
- Status chips display with correct colors
- Dates format correctly (e.g., "Jan 15, 2024" format)
- Missing dates show "-" as placeholder

**Testing Checklist:**
- [ ] Login with test credentials (jamesjiracek.jmc@gmail.com / Password1!)
- [ ] Navigate to Company Apps from TopNav desktop menu
- [ ] Verify all 10 apps display in the table
- [ ] Click TopNav menu button on mobile and select "Company Apps"
- [ ] Verify page renders correctly on mobile viewport (320px width)
- [ ] Verify page renders correctly on tablet viewport (768px width)
- [ ] Verify page renders correctly on desktop viewport (1920px width)
- [ ] Logout and verify page redirects to login when accessing `/company-apps` directly
- [ ] Test table scrolling horizontally on smaller screens
- [ ] Verify header and footer display correctly on all screen sizes

### Step 8 — Future Enhancements (Optional)

BACKLOG - Consider implementing in future iterations:

**Filtering**
- Add filter buttons/dropdowns for Status (Active, Inactive, Development, Maintenance)
- Add filter buttons for Development Team
- Show active filters with ability to clear
- Update app count to reflect filtered results

**Search/Find**
- ✅ Add search input field at top of table
- ✅ Search across app name, team name, and created by fields
- ✅ Real-time filtering as user types
- ✅ Show "No results found" message when search returns empty
- ✅ Display filtered result count ("Showing X of Y apps")

**Sorting**
- Make table headers clickable to sort by that column
- Support ascending/descending sort direction
- Visual indicator (arrow icon) showing current sort column and direction
- Sort across all table columns: Name, Status, Dates, Version, Team

**Pagination**
- Add pagination controls below table (Previous/Next buttons or page numbers)
- Allow user to select items per page (10, 25, 50, 100)
- Show "Showing X-Y of Z apps" text
- Update total count display
- Preserve sort/filter state when changing pages

**Additional Features**
- Add row click handlers to navigate to app detail page (future feature)
- Add bulk actions (select multiple apps, perform action)
- Export apps data to CSV/Excel
- Add column visibility toggle (show/hide columns)
- Add app creation/editing modal
- Add delete confirmation dialog
- Add app status update functionalityd