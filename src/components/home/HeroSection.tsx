import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-16">
      {/* Animated background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 animate-float"
        style={{
          background: 'radial-gradient(circle, #06B6D4, transparent)',
          animationDelay: '2s',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
          <Zap size={14} className="text-yellow-400" />
          Trusted by 30+ businesses worldwide
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Software that{' '}
          <br />
          <span className="gradient-text">drives results</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Kotla builds world-class custom software — from MVPs to enterprise platforms — helping
          investors and partners see real ROI, fast.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" variant="primary">
              Start a Project <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/portal">
            <Button size="lg" variant="outline">
              View Pricing & Proposals
            </Button>
          </Link>
        </div>

        {/* Tech badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {['React', 'Node.js', 'Python', 'AWS', 'React Native', 'AI/ML', 'Kubernetes'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
