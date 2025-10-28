import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300 flex items-start gap-2">
          <iframe
            src="https://demo.skyiq.cloud"
            title="SkyIQ AI Chatbot"
            className="w-[90vw] sm:w-[400px] h-[80vh] sm:h-[85vh] max-h-[670px] min-h-[400px] border-0 rounded-2xl shadow-2xl"
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
      )}
    </>
  );
}
