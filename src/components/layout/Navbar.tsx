import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import clsx from 'clsx';
import type { AuthUser } from '@/types';

type NavbarProps = {
  user: AuthUser | null;
  onLogout: () => void;
};

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Client Portal', href: '/portal' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ user, onLogout }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 nav-blur"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center glow animate-pulse-glow">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wide">
              Kotla
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === link.href
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User / CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <User size={15} />
                  <span>{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/portal"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all glow"
              >
                Client Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-2 space-y-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.97)' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                'block px-4 py-2 rounded-lg text-sm font-medium transition-all',
                location.pathname === link.href
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              )}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <button
              onClick={() => { onLogout(); setOpen(false); }}
              className="flex items-center gap-2 w-full px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <LogOut size={14} /> Logout ({user.name})
            </button>
          ) : (
            <Link
              to="/portal"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold text-center"
            >
              Client Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
