import { useState } from 'react';
import type { ContactFormData, ToastType } from '@/types';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';

type ContactPageProps = {
  onToast: (message: string, type: ToastType) => void;
};

export default function ContactPage({ onToast }: ContactPageProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onToast('Message sent! We\'ll be in touch within 24 hours. 🚀', 'success');
    }, 1200);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: 'hello@kotla.dev' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456' },
    { icon: MapPin, label: 'Location', value: 'London, UK (remote-first)' },
    { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Let's{' '}
            <span className="gradient-text">talk</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your project. We respond within 24 hours and offer a free 30-minute
            discovery call.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <SectionHeader
              tag="Get in Touch"
              title="We'd love to"
              highlight="hear from you"
              center={false}
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a precise brief or just an early-stage idea, reach out — we'll help
              you shape it into something powerful.
            </p>
            <div className="space-y-4">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    <div className="text-slate-200 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-10 rounded-2xl bg-emerald-900/20 border border-emerald-500/30 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message received!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out, {form.name}. A member of our team will be in touch
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Company</label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
