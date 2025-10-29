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
          <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
            <iframe
              src="https://demo.skyiq.cloud"
              title="SkyIQ AI Chatbot"
              className="w-full h-full sm:w-[400px] sm:h-[85vh] sm:max-h-[650px] border-0 sm:rounded-2xl shadow-2xl"
              allow="microphone; camera; autoplay"
              loading="lazy"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 sm:top-auto sm:bottom-6 sm:right-[424px] bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 h-10 w-10 sm:h-8 sm:w-8 rounded-full shadow-md z-[60]"
            aria-label="Close chat"
          >
            <X className="w-6 h-6 sm:w-5 sm:h-5" />
          </Button>
        </>
      )}
    </>
  );
}
