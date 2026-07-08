import { MOCK_USERS, MockUser } from '../data/users';

export async function validateCredentials(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string; user?: MockUser }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = MOCK_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return { success: true, user };
  }

  return {
    success: false,
    error: 'Invalid email or password',
  };
}
