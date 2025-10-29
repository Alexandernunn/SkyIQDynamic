import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';
import chatbotSectionBackground from '@assets/backgroundt_1761626062116.png';

export default function ChatbotDemo() {
  const handleClose = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="lg:py-16 lg:py-20 lg:py-24 lg:px-3 lg:px-4 lg:px-6 bg-white bg-cover bg-left"
      style={{ backgroundImage: `url(${chatbotSectionBackground})` }}
    >
      <div className="lg:max-w-6xl lg:mx-auto">
        {/* Mobile Full Screen Layout */}
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white">
          {/* Header with X button */}
          <div className="flex-shrink-0 bg-white px-4 py-4 border-b">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-foreground">
                Explore Ways We Can Grow
              </h2>
              <button
                onClick={handleClose}
                className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors"
                aria-label="Close demo"
                data-testid="button-close-demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Full Screen Iframe */}
          <div className="flex-1 relative">
            <iframe
              src="https://demo.skyiq.cloud"
              title="SkyIQ AI Chatbot Demo"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="microphone; camera; autoplay"
              loading="lazy"
              data-testid="iframe-chatbot-demo"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-foreground">
              Explore Ways We Can Grow
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-2">
              Experience the power of our AI chatbot. Ask questions, explore features, and see how it can transform your customer interactions.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="overflow-hidden p-0 border-2 w-full max-w-lg ml-5">
              <div className="relative w-full h-[720px]">
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

          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
            This is a live interactive demo. Try asking questions or exploring the interface.
          </p>
        </div>
      </div>
    </section>
  );
}
