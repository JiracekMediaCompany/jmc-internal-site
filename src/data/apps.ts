/**
 * App Data Types and Mock Data
 * Defines the structure of application objects and provides mock data for development
 */

export interface App {
  id: string;
  name: string;
  status: 'Active' | 'Inactive' | 'Development' | 'Maintenance';
  createdDate: Date;
  createdBy: string;
  modifiedDate?: Date;
  modifiedBy?: string;
  deployedDate?: Date;
  version: string;
  developmentTeam: string;
}

/**
 * Mock Apps Data
 * Sample data for development and testing
 */
export const mockApps: App[] = [
  {
    id: '1',
    name: 'Jims Personal Website',
    status: 'Active',
    createdDate: new Date('2026-07-07'),
    createdBy: 'James Jiracek',
    modifiedBy: '',
    version: '1.0.0',
    developmentTeam: 'James Jiracek',
  },
  {
    id: '2',
    name: 'Jim Fit Mobile App',
    status: 'Development',
    createdDate: new Date('2026-07-07'),
    createdBy: 'James Jiracek',
    modifiedBy: '',
    version: '1.5.0',
    developmentTeam: 'James Jiracek',
  },
  {
    id: '3',
    name: 'Company Internal Site',
    status: 'Development',
    createdDate: new Date('2026-07-07'),
    createdBy: 'James Jiracek',
    modifiedBy: '',
    version: '1.2.5',
    developmentTeam: 'Core Team',
  },
  {
    id: '4',
    name: 'Bourbon App',
    status: 'Development',
    createdDate: new Date('2026-07-07'),
    createdBy: 'Timothy Jiracek',
    modifiedBy: '',
    version: '0.8.0',
    developmentTeam: 'Core Team',
  },
];
