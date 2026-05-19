import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Social Proof"
          title="What our"
          highlight="clients say"
          subtitle="Real results from real partnerships — hear it straight from the companies we've helped grow."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 card-hover">
              <Quote size={24} className="text-blue-400 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
