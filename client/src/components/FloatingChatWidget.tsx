import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function FloatingChatWidget({ isOpen, setIsOpen }: FloatingChatWidgetProps) {

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="pulse-animation bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 px-6 py-4 group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium text-sm sm:text-base">Ask me anything</span>
          </button>
        </div>
      )}

      {isOpen && (
        <>
          {/* Mobile/Tablet Full Screen Layout (under 1100px) */}
          <div className="3xl:hidden fixed inset-0 z-40 flex flex-col bg-white">
            {/* Blue Header with X button */}
            <div className="flex-shrink-0 bg-blue-600/90 backdrop-blur-sm px-4 py-3 mt-16 shadow-md">
              <div className="flex items-center justify-center gap-3 relative">
                <h2 className="text-lg font-semibold text-white">
                  Ask Us Anything
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-0 flex-shrink-0 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Full Screen Iframe */}
            <div className="flex-1 relative">
              <iframe
                src="https://demo.skyiq.cloud"
                title="SkyIQ AI Chatbot"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="microphone; camera; autoplay"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop Popup Layout (1100px and wider) */}
          <div className="hidden 3xl:flex fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300 items-start gap-2">
            <iframe
              src="https://demo.skyiq.cloud"
              title="SkyIQ AI Chatbot"
              className="w-[400px] h-[85vh] max-h-[670px] min-h-[400px] border-0 rounded-2xl shadow-2xl"
              allow="microphone; camera; autoplay"
              loading="lazy"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 h-8 w-8 rounded-full shadow-md flex-shrink-0"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </>
      )}
    </>
  );
}
