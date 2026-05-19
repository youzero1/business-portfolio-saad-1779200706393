import { services } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

const colorMap: Record<string, { border: string; badge: string; icon: string }> = {
  blue: {
    border: 'border-blue-500/30 hover:border-blue-500/60',
    badge: 'bg-blue-600/20 text-blue-400',
    icon: 'text-blue-400',
  },
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-500/60',
    badge: 'bg-cyan-600/20 text-cyan-400',
    icon: 'text-cyan-400',
  },
  violet: {
    border: 'border-violet-500/30 hover:border-violet-500/60',
    badge: 'bg-violet-600/20 text-violet-400',
    icon: 'text-violet-400',
  },
  orange: {
    border: 'border-orange-500/30 hover:border-orange-500/60',
    badge: 'bg-orange-600/20 text-orange-400',
    icon: 'text-orange-400',
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Everything you need to{' '}
            <span className="gradient-text">build & scale</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're a startup finding product-market fit or an enterprise modernising legacy
            systems, Kotla has the expertise to deliver.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const colors = colorMap[service.color] || colorMap.blue;
              return (
                <div
                  key={service.id}
                  className={clsx(
                    'p-8 rounded-2xl bg-white/5 border card-hover flex flex-col',
                    colors.border
                  )}
                >
                  <div className="text-4xl mb-5">{service.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={14} className={colors.icon} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="How We Work"
            title="Our"
            highlight="process"
            subtitle="A proven, repeatable process that consistently delivers great outcomes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We deep-dive into your business, goals, and technical requirements.' },
              { step: '02', title: 'Design', desc: 'UX wireframes, architecture diagrams, and a signed-off scope.' },
              { step: '03', title: 'Build', desc: 'Agile sprints with weekly demos and continuous integration.' },
              { step: '04', title: 'Launch', desc: 'Deployment, monitoring, and ongoing support to ensure success.' },
            ].map((p) => (
              <div key={p.step} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-blue-500 font-extrabold text-3xl mb-3">{p.step}</div>
                <div className="text-white font-bold mb-2">{p.title}</div>
                <div className="text-slate-500 text-sm leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <p className="text-slate-400 mb-4">Ready to discuss your project?</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all glow"
        >
          Get a Free Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
