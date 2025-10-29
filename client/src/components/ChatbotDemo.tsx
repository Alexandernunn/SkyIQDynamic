import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';
import chatbotSectionBackground from '@assets/backgroundt_1761626062116.png';

export default function ChatbotDemo() {
  const handleClose = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 lg:px-6 bg-white bg-cover bg-left"
      style={{ backgroundImage: `url(${chatbotSectionBackground})` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-4 mb-3 sm:mb-4 lg:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Explore Ways We Can Grow
            </h2>
            <button
              onClick={handleClose}
              className="md:hidden flex-shrink-0 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-full shadow-md transition-colors"
              aria-label="Scroll to top"
              data-testid="button-close-demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-2">
            Experience the power of our AI chatbot. Ask questions, explore features, and see how it can transform your customer interactions.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="overflow-hidden p-0 border-2 w-full max-w-lg md:max-w-lg fixed md:relative inset-0 md:inset-auto z-40 md:z-auto rounded-none md:rounded-lg h-screen md:h-auto">
            <div className="relative w-full h-full md:h-[720px]">
              <iframe
                src="https://demo.skyiq.cloud"
                title="SkyIQ AI Chatbot Demo"
                className="absolute top-0 left-0 w-full h-full"
                allow="microphone; camera; autoplay"
                loading="lazy"
                data-testid="iframe-chatbot-demo"
              />
            </div>
          </Card>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 hidden md:block">
          This is a live interactive demo. Try asking questions or exploring the interface.
        </p>
      </div>
    </section>
  );
}
