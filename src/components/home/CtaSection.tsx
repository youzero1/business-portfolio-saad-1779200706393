import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-3xl p-12 border border-blue-500/20 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to build{' '}
              <span className="gradient-text">something great?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your vision. Our team is ready to turn your ideas into a market-ready product.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="primary">
                  Get in Touch <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/portal">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
