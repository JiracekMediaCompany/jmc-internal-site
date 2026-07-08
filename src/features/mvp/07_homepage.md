# Homepage Dashboard — Step-by-Step Guide

A personalized dashboard landing page for logged-in users showing key metrics, quick actions, and important app/team information using MUI components.

## 1. Component Structure & Layout
- [ ] Create main Grid layout with responsive breakpoints (xs, sm, md, lg).
- [ ] Define sections: Header, Stats Cards, Quick Actions, Apps Overview, Teams Section.

## 2. Personalized Header
- [ ] Display welcome message with user's first name and title.
- [ ] Show user's company/role information from auth context.
- [ ] Add optional greeting based on time of day (Good morning, afternoon, evening).

## 3. Quick Stats Cards
- [ ] Create stat cards showing: Total Apps, Apps in Development, Active Apps, Teams Count.
- [ ] Pull data from mockApps and MOCK_TEAMS to calculate counts.
- [ ] Style cards with MUI Card component and appropriate icons.

## 4. Quick Action Cards
- [ ] Create large clickable cards for: Company Apps, Company Teams, Company Users, Settings.
- [ ] Each card includes icon, title, description, and count badges.
- [ ] Link cards to their respective routes using react-router-dom.

## 5. Apps Overview Section
- [ ] Display top 5 most recent/important apps as a grid of cards.
- [ ] Show app name, status (with color chip), development team, version, and last modified date.
- [ ] Add "View All Apps" link to navigate to CompanyApps page.

## 6. Teams Section
- [ ] Display user's teams in a horizontal scrollable or grid layout.
- [ ] Show team name, member count, and description.
- [ ] Include link to full CompanyTeams page.

## 7. Theme & Styling
- [ ] Apply matching background gradients (dark/light theme aware).
- [ ] Use consistent spacing, typography, and color scheme across all sections.
- [ ] Ensure proper elevation, shadows, and hover effects on cards.

## 8. Responsive Design
- [ ] Stack sections vertically on mobile (xs, sm breakpoints).
- [ ] Multi-column layout on tablets and desktop (md, lg breakpoints).
- [ ] Ensure all cards and sections are touchable and readable on small screens.

---

Follow these steps to implement the Homepage dashboard using React, Material-UI, and the existing auth/data context.

## Implementation Notes

### Step 1 — Component Structure & Layout

Set up the main HomePage component with a responsive Grid container. Use MUI's sx prop and breakpoints to create a layout that adapts from mobile to desktop. Structure should have:
- Top-level Box with background gradient matching other pages
- Inner Container or Box with maxWidth constraint (1400px)
- Grid container with spacing for different sections

### Step 2 — Personalized Header

Create a header section that uses the user data from AuthContext. Display first name, last name, and title from the logged-in user. Consider adding a dynamic greeting based on time of day for better UX. Use Typography variants (h3, h4) for hierarchy.

### Step 3 — Quick Stats Cards

Build reusable stat cards using MUI Card component. Calculate metrics from mockApps data:
- Total Apps: `mockApps.length`
- Active Apps: `mockApps.filter(app => app.status === 'Active').length`
- Development Apps: `mockApps.filter(app => app.status === 'Development').length`
- Teams: `MOCK_TEAMS.length`

Use MUI icons (Apps, Code, CheckCircle, Group) to make cards visually appealing.

### Step 4 — Quick Action Cards

Create larger action cards that link to main sections: Company Apps, Teams, Users, Settings. Each card should have:
- Icon (Apps, People, Group, Settings)
- Title and description
- Count badge (e.g., "5 Apps", "2 Teams")
- onClick or Link navigation using react-router-dom
- Hover effect for interactivity

### Step 5 — Apps Overview Section

Display top 5 apps from mockApps (sorted by most recent first). Create app cards showing:
- App name (Typography)
- Status chip with color coding (success/error/warning/info)
- Development team
- Version
- Last modified date (formatted)
- Link to view full apps list

Consider sorting by createdDate or modifiedDate in descending order.

### Step 6 — Teams Section

Show teams the user is part of (all teams initially, could filter by membership later). Display:
- Team name
- Member count and list
- Description
- Link to Teams page

Use horizontal scrollable Box or Grid with maxWidth per card to keep it scannable.

### Step 7 — Theme & Styling

Apply the same gradient background as CompanyApps and other pages. Use theme.palette colors from MUI theme context. Ensure consistent spacing (sx={{ p: 2 }}, sx={{ mb: 2 }}). Add elevation to cards (2-4), implement hover effects with scaling or shadow changes.

### Step 8 — Responsive Design

Use MUI's useMediaQuery hook or sx prop breakpoints to adjust layout. On mobile (xs, sm): stack everything vertically, reduce padding, make cards full-width. On tablet/desktop (md, lg): use Grid columns={1-4} to create multi-column layouts. Test at different breakpoints (375px, 600px, 960px, 1200px).
