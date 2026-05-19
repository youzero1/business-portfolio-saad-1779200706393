import { useState, useCallback } from 'react';
import type { AuthUser } from '@/types';
import {
  getAuthUser,
  setAuthUser,
  clearAuthUser,
  findUser,
  saveUser,
  userExists,
} from '@/lib/storage';

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(getAuthUser);

  const login = useCallback(
    (email: string, password: string): { success: boolean; error?: string } => {
      const found = findUser(email, password);
      if (!found) {
        return { success: false, error: 'Invalid email or password.' };
      }
      const authUser: AuthUser = { email: found.email, name: found.name };
      setAuthUser(authUser);
      setUser(authUser);
      return { success: true };
    },
    []
  );

  const register = useCallback(
    (
      name: string,
      email: string,
      password: string
    ): { success: boolean; error?: string } => {
      if (userExists(email)) {
        return { success: false, error: 'An account with this email already exists.' };
      }
      saveUser({ name, email, password });
      const authUser: AuthUser = { email, name };
      setAuthUser(authUser);
      setUser(authUser);
      return { success: true };
    },
    []
  );

  const logout = useCallback(() => {
    clearAuthUser();
    setUser(null);
  }, []);

  return { user, login, register, logout };
}
