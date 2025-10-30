import { useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DashboardDemo from '@/components/DashboardDemo';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import AppointmentFormModal from '@/components/AppointmentFormModal';
import VoiceShowcaseSection from '@/components/VoiceShowcaseSection';
import FeatureGrid from '@/components/FeatureGrid';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const voiceShowcaseRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVoiceShowcase = () => {
    voiceShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setChatOpen(true);
  };

  const openAppointmentForm = () => {
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onDemoClick={scrollToDemo} onFeaturesClick={scrollToFeatures} onAskAnythingClick={openChat} />
      <HeroSection onDemoClick={scrollToDemo} onBookAppointment={openAppointmentForm} onVoiceShowcase={scrollToVoiceShowcase} />
      <div ref={demoRef}>
        <DashboardDemo />
      </div>
      <div ref={featuresRef}>
        <FeatureGrid />
      </div>
      <FAQSection onAskAnythingClick={openChat} />
      <div ref={voiceShowcaseRef}>
        <VoiceShowcaseSection />
      </div>
      <Footer />
      <FloatingChatWidget isOpen={chatOpen} setIsOpen={setChatOpen} />
      <AppointmentFormModal isOpen={appointmentOpen} setIsOpen={setAppointmentOpen} />
    </div>
  );
}
