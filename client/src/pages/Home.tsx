import { useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DashboardDemo from '@/components/DashboardDemo';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import FeatureGrid from '@/components/FeatureGrid';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setChatOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onDemoClick={scrollToDemo} onAskAnythingClick={openChat} />
      <HeroSection onDemoClick={scrollToDemo} />
      <div ref={demoRef}>
        <DashboardDemo />
      </div>
      <FeatureGrid />
      <FAQSection onAskAnythingClick={openChat} />
      <CTASection />
      <Footer />
      <FloatingChatWidget isOpen={chatOpen} setIsOpen={setChatOpen} />
    </div>
  );
}
