import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DashboardDemo from '@/components/DashboardDemo';
import ChatbotDemo from '@/components/ChatbotDemo';
import FeatureGrid from '@/components/FeatureGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation onDemoClick={scrollToDemo} />
      <HeroSection onDemoClick={scrollToDemo} />
      <div ref={demoRef}>
        <DashboardDemo />
      </div>
      <ChatbotDemo />
      <FeatureGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
