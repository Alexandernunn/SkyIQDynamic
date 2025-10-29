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
          {/* Mobile backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden animate-in fade-in duration-200" onClick={() => setIsOpen(false)} />
          
          {/* Chat container */}
          <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 animate-in slide-in-from-bottom-4 duration-300 flex flex-col">
            {/* Mobile close bar */}
            <div className="sm:hidden bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Chat with SkyIQ AI</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white hover:bg-gray-100 text-blue-600 rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Close chat"
                data-testid="button-close-chat-mobile"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
            
            {/* Chat iframe */}
            <iframe
              src="https://demo.skyiq.cloud"
              title="SkyIQ AI Chatbot"
              className="w-full flex-1 sm:w-[400px] sm:h-[90vh] sm:max-h-[800px] border-0 sm:rounded-2xl shadow-2xl"
              allow="microphone; camera; autoplay"
              loading="lazy"
            />
            
            {/* Desktop close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hidden sm:flex fixed bottom-6 right-[424px] bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 h-8 w-8 rounded-full shadow-md"
              aria-label="Close chat"
              data-testid="button-close-chat-desktop"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </>
      )}
    </>
  );
}
