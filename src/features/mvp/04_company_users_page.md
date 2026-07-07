# Company Users Page — Step-by-Step Guide

A step-by-step implementation plan to create a new Company Users page displaying users with MUI DataGrid.

## 1. Dependency & Page Component Setup
- [ ] Verify `@mui/x-data-grid` is installed (check package.json; if missing, note it needs to be added)
- [ ] Create new file `src/pages/CompanyUsers/CompanyUsers.tsx`
- [ ] Import DataGrid, GridColDef from `@mui/x-data-grid`
- [ ] Import MOCK_USERS from `src/data/users.ts`

## 2. DataGrid Column & Data Configuration
- [ ] Define GridColDef array with single column: `id`, `field: 'email'`, `headerName: 'Email'`, `width: 300`
- [ ] Transform MOCK_USERS array to DataGrid rows (each row needs unique `id` field; use array index or email as key)
- [ ] Set DataGrid pagination: `paginationModel` with `pageSize: 10`

## 3. Component Layout & Styling
- [ ] Wrap DataGrid in a `Box` component with theme-aware spacing
- [ ] Add a title "Company Users" above the DataGrid using MUI `Typography`
- [ ] Apply responsive styling (full width, auto height for DataGrid)
- [ ] Use `useThemeMode` hook from `ThemeContext` for dark/light mode support

## 4. Routing Integration
- [ ] Add new route in `src/App.tsx`: `/company-users` wrapped with `ProtectedRoute`
- [ ] Import CompanyUsers component at top of App.tsx

## 5. Navigation Setup
- [ ] Update `src/components/TopNav.tsx` to add "Company Users" link in navigation menu
- [ ] Link should navigate to `/company-users`

## 6. Testing & Verification
- [ ] Verify page renders without errors
- [ ] Confirm DataGrid displays all users from MOCK_USERS
- [ ] Test sorting and pagination features work
- [ ] Test navigation from TopNav to Company Users page
- [ ] Verify page respects theme context (dark/light mode toggle)
- [ ] Verify ProtectedRoute redirects unauthenticated users to login

---

Follow these steps to implement the Company Users page with MUI DataGrid for displaying mock user data.

## Implementation Notes

### Step 1 — Dependency & Page Component Setup

The DataGrid component comes from `@mui/x-data-grid` package. Check package.json to see if it's already installed. If not, add a note that it needs to be installed via npm.

Create `src/pages/CompanyUsers/CompanyUsers.tsx` as a new functional component. Follow the pattern from existing pages (LoginPage, HomePage, SettingsPage) which use MUI components for layout and react-router-dom for navigation.

### Step 2 — DataGrid Column & Data Configuration

Define a single column using GridColDef interface:
```typescript
const columns: GridColDef[] = [
  {
    id: 'email',
    field: 'email',
    headerName: 'Email',
    width: 300,
    sortable: true,
  },
];
```

Transform MOCK_USERS data for DataGrid by adding an `id` field if not present. The DataGrid requires each row to have a unique identifier.

**Example data transformation:**
```typescript
const rows = MOCK_USERS.map((user, index) => ({
  id: index,
  email: user.email,
}));
```

### Step 3 — Component Layout & Styling

Structure:
- Title at top (using Typography component with variant="h5" or "h4")
- DataGrid below with full container width
- Use `Box` component for spacing and padding
- Reference the Settings page for styling pattern with theme context

**Component structure:**
```typescript
const CompanyUsersPage = () => {
  const { isDark } = useThemeMode();
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Company Users
      </Typography>
      <Paper elevation={isDark ? 2 : 1}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={{ pageSize: 10, page: 0 }}
          pageSizeOptions={[10]}
          disableSelectionOnClick
        />
      </Paper>
    </Box>
  );
};
```

### Step 4 — Routing Integration

Add the route in `src/App.tsx` after the existing ProtectedRoute group. Ensure CompanyUsers is imported at the top:

```typescript
import CompanyUsersPage from './pages/CompanyUsers/CompanyUsers';

// Inside Routes:
<Route element={<ProtectedRoute />}>
  <Route path="/home" element={<HomePage />} />
  <Route path="/settings" element={<SettingsPage />} />
  <Route path="/company-users" element={<CompanyUsersPage />} />
</Route>
```

This ensures the page is only accessible to authenticated users.

### Step 5 — Navigation Setup

Update `src/components/TopNav.tsx` to include a new navigation link. Follow the existing pattern for linking to routes. The link text should be "Company Users" and href should be "/company-users".

Example pattern to follow from existing nav items:
```typescript
<Button color="inherit" href="/company-users">
  Company Users
</Button>
```

### Step 6 — Testing & Verification

Manually verify:
1. Navigate to `/company-users` → page should load (if authenticated)
2. DataGrid should display both users from MOCK_USERS
3. Click column headers to sort → should work
4. Pagination controls appear at bottom → verify next/previous page works
5. Toggle dark/light mode from TopNav → DataGrid should update styling
6. Log out and try accessing `/company-users` → should redirect to login

---

## Key Technologies & Libraries

- **MUI DataGrid** (`@mui/x-data-grid`): Displays user data in tabular format with sorting and pagination
- **React Router**: Client-side routing to `/company-users` page
- **MUI Components**: Box, Paper, Typography for layout and styling
- **Theme Context**: Ensures consistent dark/light mode styling
- **Mock Data**: MOCK_USERS from `src/data/users.ts`

## Relevant Files

- **New file**: `src/pages/CompanyUsers/CompanyUsers.tsx`
- **To modify**: `src/App.tsx` (add route)
- **To modify**: `src/components/TopNav.tsx` (add navigation link)
- **Source data**: `src/data/users.ts` (no changes needed)
- **Reference**: `package.json` (verify @mui/x-data-grid)

## Verification Checklist

- [ ] Component renders without console errors
- [ ] DataGrid displays 2 users with their emails
- [ ] Sorting functionality works on email column
- [ ] Pagination works (or shows appropriately if under page size)
- [ ] TopNav link routes to `/company-users`
- [ ] Dark/light mode toggle affects DataGrid styling
- [ ] Unauthenticated access redirects to `/login`

## MVP Scope & Design Decisions

- **MVP Scope**: Email column only (can be extended with more fields in future iterations)
- **DataGrid Features**: Sorting and pagination only (no row selection, editing, or filtering for this iteration)
- **Data Structure**: No changes to MockUser interface — keeping data layer simple
- **Authentication**: Page protected behind ProtectedRoute (requires successful login)
- **Styling**: Theme-aware design that respects user's dark/light mode preference

**Note**: If `@mui/x-data-grid` is not currently in package.json dependencies, it will need to be added before implementation.
