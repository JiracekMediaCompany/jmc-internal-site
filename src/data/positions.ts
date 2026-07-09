/**
 * Position/Role data structures and available roles
 */

export interface EmployeePosition {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO date format (YYYY-MM-DD)
}

export const AVAILABLE_ROLES = [
  { id: 'role-1', title: 'Co-Founder', description: 'Co-founder and executive leader of the company' },
  { id: 'role-2', title: 'CTO', description: 'Chief Technology Officer responsible for technical strategy' },
  { id: 'role-3', title: 'COO', description: 'Chief Operating Officer responsible for business operations' },
  { id: 'role-4', title: 'Software Engineer', description: 'Develops and maintains software applications' },
  { id: 'role-5', title: 'Product Manager', description: 'Manages product roadmap and strategy' },
  { id: 'role-6', title: 'Designer', description: 'Creates user experience and interface designs' },
  { id: 'role-7', title: 'Quality Assurance', description: 'Tests and ensures software quality' },
  { id: 'role-8', title: 'DevOps Engineer', description: 'Manages infrastructure and deployment' },
  { id: 'role-9', title: 'Business Analyst', description: 'Analyzes business requirements and processes' },
];
