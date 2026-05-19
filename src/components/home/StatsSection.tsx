import { stats } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="py-16 border-y border-white/10" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
