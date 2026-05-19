import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import type { AuthUser } from '@/types';
import { getAuthUser, setAuthUser, clearAuthUser, findUser, saveUser, userExists } from '@/lib/storage';
import { useToast } from '@/hooks/useToast';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ClientPortalPage from '@/pages/ClientPortalPage';
import ContactPage from '@/pages/ContactPage';
import ToastContainer from '@/components/ui/ToastContainer';

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(getAuthUser);
  const { toasts, addToast, removeToast } = useToast();

  const login = useCallback(
    (email: string, password: string): { success: boolean; error?: string } => {
      const found = findUser(email, password);
      if (!found) return { success: false, error: 'Invalid email or password.' };
      const authUser: AuthUser = { email: found.email, name: found.name };
      setAuthUser(authUser);
      setUser(authUser);
      return { success: true };
    },
    []
  );

  const register = useCallback(
    (name: string, email: string, password: string): { success: boolean; error?: string } => {
      if (userExists(email)) return { success: false, error: 'An account with this email already exists.' };
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

  return (
    <BrowserRouter>
      <Layout user={user} onLogout={logout}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/portal"
            element={
              <ClientPortalPage
                user={user}
                onLogin={login}
                onRegister={register}
                onToast={addToast}
              />
            }
          />
          <Route path="/contact" element={<ContactPage onToast={addToast} />} />
        </Routes>
      </Layout>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </BrowserRouter>
  );
}
