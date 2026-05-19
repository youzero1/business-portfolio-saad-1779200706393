import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';
import clsx from 'clsx';

const colorMap: Record<string, string> = {
  blue: 'border-blue-500/30 hover:border-blue-500/60',
  cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
  violet: 'border-violet-500/30 hover:border-violet-500/60',
  orange: 'border-orange-500/30 hover:border-orange-500/60',
};

export default function ServicesPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What We Do"
          title="End-to-end software"
          highlight="services"
          subtitle="From idea to production — we cover every layer of the stack so you don't have to."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className={clsx(
                'p-6 rounded-2xl bg-white/5 border card-hover',
                colorMap[service.color] || 'border-white/10'
              )}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
