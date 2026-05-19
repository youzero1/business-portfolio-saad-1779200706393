import type { AuthUser } from '@/types';

const AUTH_KEY = 'kotla_auth_user';
const USERS_KEY = 'kotla_registered_users';

export type StoredUser = {
  email: string;
  name: string;
  password: string;
};

export function getStoredUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUser(user: StoredUser): void {
  const users = getStoredUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUser(email: string, password: string): StoredUser | null {
  const users = getStoredUsers();
  return users.find((u) => u.email === email && u.password === password) || null;
}

export function userExists(email: string): boolean {
  const users = getStoredUsers();
  return users.some((u) => u.email === email);
}

export function getAuthUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setAuthUser(user: AuthUser): void {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function clearAuthUser(): void {
  localStorage.removeItem(AUTH_KEY);
}
