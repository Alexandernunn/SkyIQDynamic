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
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 w-[90vw] sm:w-[400px] h-[80vh] sm:h-[85vh] max-h-[650px] min-h-[400px] flex flex-col">
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">SkyIQ Assistant</h3>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 h-8 w-8"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
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
        </div>
      )}
    </>
  );
}
