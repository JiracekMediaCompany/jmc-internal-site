export interface MockUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const MOCK_USERS: MockUser[] = [
  {
    email: 'jamesjiracek.jmc@gmail.com',
    password: 'Password1!',
    firstName: 'James',
    lastName: 'Jiracek',
  },
  {
    email: 'timothyjiracek@jmc@gmail.com',
    password: 'Password1!',
    firstName: 'Timothy',
    lastName: 'Jiracek',
  },
];
