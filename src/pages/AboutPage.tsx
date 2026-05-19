import { team, stats } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            About Kotla
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            We build software that{' '}
            <span className="gradient-text">matters</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded on the belief that great software should be accessible to every ambitious
            business — not just the Fortune 500. Kotla is a team of engineers, designers,
            and strategists who care deeply about outcomes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              tag="Our Mission"
              title="Partnering for"
              highlight="long-term success"
              center={false}
            />
            <p className="text-slate-400 leading-relaxed mb-6">
              We don't just write code — we embed ourselves in your business problem and craft
              solutions that grow with you. Our engineers work with the same urgency and ownership
              as a co-founder would.
            </p>
            <ul className="space-y-3">
              {[
                'Agile sprints with weekly demos',
                'Transparent pricing — no surprises',
                'Full IP transfer to you on completion',
                'Post-launch support & SLAs',
                'Direct Slack access to the dev team',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🎯', label: 'Outcome-focused', desc: 'We align on KPIs before writing a line of code.' },
              { icon: '⚡', label: 'Move fast', desc: 'MVPs in weeks, not months — validated early.' },
              { icon: '🔍', label: 'Transparent', desc: 'Weekly reports, live dashboards, open communication.' },
              { icon: '🛡️', label: 'Reliable', desc: '99.9% uptime SLAs backed by cloud-native architecture.' },
            ].map((v) => (
              <div key={v.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 card-hover">
                <div className="text-2xl mb-2">{v.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{v.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="The Team"
            title="Meet the people behind"
            highlight="Kotla"
            subtitle="A diverse group of senior engineers and creatives who've shipped products at global scale."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 card-hover text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <div className="text-white font-bold mb-1">{member.name}</div>
                <div className="text-blue-400 text-xs font-semibold mb-3">{member.role}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
