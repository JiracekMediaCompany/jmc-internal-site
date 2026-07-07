export interface MockUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  title: string;
  isAdmin: boolean;
}

export const MOCK_USERS: MockUser[] = [
  {
    email: 'jamesjiracek.jmc@gmail.com',
    password: 'Password1!',
    firstName: 'James',
    lastName: 'Jiracek',
    title: 'Co-Founder',
    isAdmin: true,
  },
  {
    email: 'timothyjiracek@jmc@gmail.com',
    password: 'Password1!',
    firstName: 'Timothy',
    lastName: 'Jiracek',
    title: 'Co-Founder',
    isAdmin: true,
  },
];
