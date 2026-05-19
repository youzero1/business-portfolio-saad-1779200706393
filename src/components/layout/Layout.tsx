import { ReactNode } from 'react';
import type { AuthUser } from '@/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type LayoutProps = {
  children: ReactNode;
  user: AuthUser | null;
  onLogout: () => void;
};

export default function Layout({ children, user, onLogout }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onLogout={onLogout} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
