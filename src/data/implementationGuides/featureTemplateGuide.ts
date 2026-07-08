/**
 * FEATURE TEMPLATE GUIDE
 * 
 * Master template for creating implementation guides for all features.
 * This template is used to document feature specifications, requirements, and implementation steps.
 */
export const FEATURE_TEMPLATE = `---
**IMPORTANT:** Before proceeding with the implementation steps, carefully review the "Open Questions" section. Ensure all open questions have been addressed and answered. Do not continue with implementation if unanswered questions remain.
---

# [Feature Title] — Step-by-Step Guide

A concise implementation plan (no code) to [brief description of the feature to be implemented].

## 1. [Section Title]
- [ ] [Specific task or requirement].
- [ ] [Specific task or requirement].

## 2. [Section Title]
- [ ] [Specific task or requirement].
- [ ] [Specific task or requirement].

## 3. [Section Title]
- [ ] [Specific task or requirement].
- [ ] [Specific task or requirement].

## 4. [Section Title]
- [ ] [Specific task or requirement].
- [ ] [Specific task or requirement].

## 5. [Section Title]
- [ ] [Specific task or requirement].
- [ ] [Specific task or requirement].

---

## Open Questions

List any open questions or clarifications needed before implementation can begin:

- [ ] [Question or clarification needed?]
- [ ] [Question or clarification needed?]
- [ ] [Question or clarification needed?]

---

## Recommended Libraries

List the dependencies and libraries required for this feature. Verify each library against the project's \`package.json\`:

- [ ] [Library Name] - v[version] (if installed) / Ready to install
- [ ] [Library Name] - v[version] (if installed) / Ready to install
- [ ] [Library Name] - v[version] (if installed) / Ready to install

**Instructions for AI Implementation Tool:**
- Check each library in the project's \`package.json\`
- If library is installed, note its current version next to the library name
- If library is not installed, STOP and provide the installation command: \`npm install [library-name]\`
- Do not proceed with implementation until all required libraries are confirmed available

---

Follow these steps to implement [feature name and key technologies/libraries used].

## Implementation Notes

### Step 1 — [Section Title]

[Add detailed notes, architecture decisions, and implementation details here as you complete each step.]

### Step 2 — [Section Title]

[Add detailed notes, architecture decisions, and implementation details here.]

### Step 3 — [Section Title]

[Add detailed notes, architecture decisions, and implementation details here.]

### Step 4 — [Section Title]

[Add detailed notes, architecture decisions, and implementation details here.]

### Step 5 — [Section Title]

[Add detailed notes, architecture decisions, and implementation details here.]
`;
