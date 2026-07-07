# Company Teams Page — Step-by-Step Guide

A concise implementation plan to create a Company Teams page with protected route access, navigation integration, collapsible team accordions, and mock team data.

## 1. Team Page Setup
- [x] Create a new CompanyTeams.tsx component in the pages/CompanyTeams directory.
- [x] Display centered "Hello World" text using MUI Box and Typography components.
- [x] Use Container component for responsive layout.

## 2. Protected Route Configuration
- [x] Import CompanyTeamsPage in App.tsx.
- [x] Add a new Route to the protected routes group with path `/company-teams`.
- [x] Ensure the route uses the ProtectedRoute wrapper for authentication.

## 3. Navigation Integration
- [x] Add a "Company Teams" navigation link to TopNav desktop navigation menu.
- [x] Add a "Company Teams" navigation link to TopNav mobile drawer menu.
- [x] Create handler function `handleNavigateCompanyTeams` in TopNav.

## 4. Mock Team Data
- [x] Create a Team interface with properties: id, name, members, createdDate, and optional description.
- [x] Create MOCK_TEAMS array in data/teams.ts.
- [x] Add Core team with Timothy Jiracek and James Jiracek as members.

## 5. Styling and UX
- [x] Apply consistent theming with the rest of the application using MUI theme tokens.
- [x] Ensure responsive design for mobile and desktop viewports.
- [x] Add appropriate ARIA labels for accessibility.

## 6. Team Display with Accordions
- [x] Import MUI Accordion, AccordionSummary, and AccordionDetails components.
- [x] Set accordions to closed by default.
- [x] Display team name in the accordion title.
- [x] Display team members when accordion is opened.
- [x] Remove "Team Members" label text.
- [x] Add underline styling to team name when accordion is expanded.

## 7. Testing and Validation
- [ ] Verify protected route blocks unauthenticated access.
- [ ] Test navigation links in both desktop and mobile menus.
- [ ] Confirm mock data loads correctly.
- [ ] Test accordion expand/collapse functionality.

---

Follow these steps to implement the Company Teams feature using React, Material-UI Accordions, and React Router.

## Implementation Notes

### Step 1 — Team Page Setup

Created CompanyTeams.tsx component with:
- Container with maxWidth="lg"
- Box with flexbox layout (centered both horizontally and vertically)
- Typography variant="h1" displaying "Hello World"
- Responsive height calculation (minHeight: calc(100vh - 100px)) to account for TopNav

### Step 2 — Protected Route Configuration

Added CompanyTeamsPage import and new protected route:
- Route path="/company-teams" inside the ProtectedRoute element wrapper
- Ensures only authenticated users can access the page
- Consistent with other company pages (company-users, company-apps)

### Step 3 — Navigation Integration

Integrated into TopNav component:
- Added handleNavigateCompanyTeams function to navigate to /company-teams and close drawer
- Added desktop navigation Button linking to /company-teams in renderDesktopNavLinks()
- Added mobile drawer ListItem linking to /company-teams in renderMobileDrawer()
- Follows same pattern as other company page links

### Step 4 — Mock Team Data

Created Team interface and mock data in teams.ts:
- Team interface includes: id, name, members array, createdDate, and optional description
- MOCK_TEAMS array exports sample data
- Core team entry with Timothy Jiracek and James Jiracek as members
- Ready for future expansion with DataGrid or list display

### Step 5 — Styling and UX

- Used MUI Container for responsive max-width
- Applied theme-aware styling through MUI sx prop
- Flexbox centering for proper layout alignment
- Calculated min-height to fill viewport minus TopNav height
- All navigation links use RouterLink for React Router integration

### Step 6 — Team Display with Accordions

Implemented accordion-based team display:
- Imported Accordion, AccordionSummary, and AccordionDetails from MUI
- Imported ExpandMore icon for accordion toggle indicator
- Imported MOCK_TEAMS data and mapped through teams
- Added React state to track which accordion is expanded
- Each accordion displays team name in AccordionSummary
- When expanded, a bottom border divider appears on the AccordionSummary as a visual separator between label and content
- AccordionDetails shows team members in an MUI List component without the "Team Members" label
- Accordions default to closed state with controlled expand/collapse via state management
- Added smooth transition effect on border (0.3s ease)
- Added page header with title and description
- Used flexible spacing with gap property for consistent layout

### Step 7 — Testing and Validation

- ProtectedRoute wrapper ensures unauthenticated users redirected to login
- Desktop and mobile navigation both include Company Teams link
- Mock data structure validated with TypeScript interface
- Navigation handler properly closes drawer before routing
- Accordion expand/collapse functionality uses MUI default behavior
