import { MOCK_USERS } from '../data/users';

export async function validateCredentials(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = MOCK_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return { success: true };
  }

  return {
    success: false,
    error: 'Invalid email or password',
  };
}
