import { useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DashboardDemo from '@/components/DashboardDemo';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import AppointmentFormModal from '@/components/AppointmentFormModal';
import FeatureGrid from '@/components/FeatureGrid';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setChatOpen(true);
  };

  const openAppointmentForm = () => {
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onDemoClick={scrollToDemo} onAskAnythingClick={openChat} />
      <HeroSection onDemoClick={scrollToDemo} onBookAppointment={openAppointmentForm} />
      <div ref={demoRef}>
        <DashboardDemo />
      </div>
      <FeatureGrid />
      <FAQSection onAskAnythingClick={openChat} />
      <Footer />
      <FloatingChatWidget isOpen={chatOpen} setIsOpen={setChatOpen} />
      <AppointmentFormModal isOpen={appointmentOpen} setIsOpen={setAppointmentOpen} />
    </div>
  );
}
