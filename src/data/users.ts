import { EmployeePosition, AVAILABLE_ROLES } from "./positions";

export interface MockUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  title: string;
  isAdmin: boolean;
  positions?: EmployeePosition[];
}

export const MOCK_USERS: MockUser[] = [
  {
    email: "jamesjiracek.jmc@gmail.com",
    password: "Password1!",
    firstName: "James",
    lastName: "Jiracek",
    title: "CTO",
    isAdmin: true,
    positions: [
      {
        ...AVAILABLE_ROLES[0], // Co-Founder
        startDate: "2026-07-09",
      },
      {
        ...AVAILABLE_ROLES[1], // CTO
        startDate: "2026-07-09",
      },
    ],
  },
  {
    email: "timothyjiracek@jmc@gmail.com",
    password: "Password1!",
    firstName: "Timothy",
    lastName: "Jiracek",
    title: "COO",
    isAdmin: true,
    positions: [
      {
        ...AVAILABLE_ROLES[0], // Co-Founder
        startDate: "2026-07-09",
      },
      {
        ...AVAILABLE_ROLES[2], // COO
        startDate: "2026-07-09",
      },
    ],
  },
];
