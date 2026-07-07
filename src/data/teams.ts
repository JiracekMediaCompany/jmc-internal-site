/**
 * Team Data Types and Mock Data
 * Defines the structure of team objects and provides mock data for development
 */

export interface Team {
  id: string;
  name: string;
  members: string[];
  createdDate: Date;
  description?: string;
}

/**
 * Mock Teams Data
 * Sample data for development and testing
 */
export const MOCK_TEAMS: Team[] = [
  {
    id: '1',
    name: 'Core team',
    members: ['Timothy Jiracek', 'James Jiracek'],
    createdDate: new Date('2026-07-07'),
    description: 'Core development team',
  },
];
