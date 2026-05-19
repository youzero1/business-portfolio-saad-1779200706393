import { useState } from 'react';
import type { AuthUser, ToastType, PricingPlan } from '@/types';
import { pricingPlans } from '@/lib/data';
import { Lock, CheckCircle, Star, LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import clsx from 'clsx';

type ClientPortalPageProps = {
  user: AuthUser | null;
  onLogin: (email: string, password: string) => { success: boolean; error?: string };
  onRegister: (name: string, email: string, password: string) => { success: boolean; error?: string };
  onToast: (message: string, type: ToastType) => void;
};

type AuthMode = 'login' | 'register';

export default function ClientPortalPage({ user, onLogin, onRegister, onToast }: ClientPortalPageProps) {
  if (!user) {
    return <AuthGate onLogin={onLogin} onRegister={onRegister} onToast={onToast} />;
  }
  return <PortalContent user={user} />
}

// ── Auth Gate ──────────────────────────────────────────────────────────────

type AuthGateProps = {
  onLogin: (email: string, password: string) => { success: boolean; error?: string };
  onRegister: (name: string, email: string, password: string) => { success: boolean; error?: string };
  onToast: (message: string, type: ToastType) => void;
};

function AuthGate({ onLogin, onRegister, onToast }: AuthGateProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result =
      mode === 'login'
        ? onLogin(email, password)
        : onRegister(name, email, password);

    setLoading(false);

    if (!result.success) {
      setError(result.error || 'Something went wrong.');
    } else {
      onToast(
        mode === 'login' ? 'Welcome back! 👋' : 'Account created successfully! 🎉',
        'success'
      );
    }
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4 hero-bg">
      <div className="w-full max-w-md">
        {/* Lock badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-4 glow">
            <Lock size={28} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">Client Portal</h2>
          <p className="text-slate-400 text-sm">
            Pricing, proposals & project details — for clients only.
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex rounded-xl bg-white/5 border border-white/10 p-1 mb-6">
          {(['login', 'register'] as AuthMode[]).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setError(''); }}
              className={clsx(
                'flex-1 py-2 rounded-lg text-sm font-semibold transition-all',
                mode === m ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              )}
            >
              {m === 'login' ? (
                <span className="flex items-center justify-center gap-1"><LogIn size={14} /> Sign In</span>
              ) : (
                <span className="flex items-center justify-center gap-1"><UserPlus size={14} /> Register</span>
              )}
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4"
        >
          {mode === 'register' && (
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>
          )}

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="••••••••"
                minLength={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-900/40 border border-red-500/30 text-red-300 text-sm">
              {error}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full mt-2" disabled={loading}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign In to Portal' : 'Create Account'}
          </Button>
        </form>

        <p className="text-center text-slate-600 text-xs mt-4">
          Accounts are stored locally in your browser for demo purposes.
        </p>
      </div>
    </div>
  );
}

// ── Portal Content (authenticated) ────────────────────────────────────────

type PortalContentProps = {
  user: AuthUser;
};

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={clsx(
        'relative p-8 rounded-2xl border flex flex-col card-hover',
        plan.highlighted
          ? 'bg-blue-600/15 border-blue-500/50 glow'
          : 'bg-white/5 border-white/10'
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
            <Star size={10} /> Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
        <p className="text-slate-500 text-sm">{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
        <span className="text-slate-500 text-sm ml-2">/ {plan.period}</span>
      </div>
      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button
        className={clsx(
          'mt-6 w-full py-3 rounded-xl font-semibold text-sm transition-all',
          plan.highlighted
            ? 'bg-blue-600 hover:bg-blue-500 text-white'
            : 'border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white'
        )}
      >
        Request Proposal
      </button>
    </div>
  );
}

function PortalContent({ user }: PortalContentProps) {
  const proposals = [
    { id: 'P-001', project: 'E-Commerce Platform', status: 'Under Review', date: '2025-01-10', value: '$14,999' },
    { id: 'P-002', project: 'Mobile App MVP', status: 'Approved', date: '2024-12-05', value: '$8,500' },
    { id: 'P-003', project: 'API Integration Suite', status: 'In Progress', date: '2024-11-20', value: '$6,200' },
  ];

  const statusColor: Record<string, string> = {
    'Under Review': 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30',
    'Approved': 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30',
    'In Progress': 'bg-blue-600/20 text-blue-400 border-blue-500/30',
  };

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-white mb-1">
            Welcome back, <span className="gradient-text">{user.name}</span> 👋
          </h1>
          <p className="text-slate-400">Here are your private pricing plans and proposals.</p>
        </div>

        {/* Pricing */}
        <SectionHeader
          tag="Pricing Plans"
          title="Choose the right"
          highlight="engagement"
          subtitle="All prices are for complete, production-ready deliverables with source code included."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Proposals */}
        <SectionHeader
          tag="Your Proposals"
          title="Active &"
          highlight="recent proposals"
          subtitle="Track the status of all your project proposals in one place."
        />
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10" style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
                <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold">ID</th>
                <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold">Project</th>
                <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold">Date</th>
                <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold">Value</th>
                <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {proposals.map((p) => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-slate-500 text-sm font-mono">{p.id}</td>
                  <td className="px-6 py-4 text-white text-sm font-medium">{p.project}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">{p.date}</td>
                  <td className="px-6 py-4 text-white text-sm font-semibold">{p.value}</td>
                  <td className="px-6 py-4">
                    <span
                      className={clsx(
                        'px-2 py-1 rounded-lg text-xs font-semibold border',
                        statusColor[p.status] || 'bg-slate-600/20 text-slate-400'
                      )}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
