import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
