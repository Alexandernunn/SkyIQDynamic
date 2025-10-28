import { Card } from '@/components/ui/card';

export default function ChatbotDemo() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 lg:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Try Our AI Chatbot Live
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Experience the power of our AI chatbot. Ask questions, explore features, and see how it can transform your customer interactions.
          </p>
        </div>

        <Card className="overflow-hidden p-0 border-2">
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
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

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
          This is a live interactive demo. Try asking questions or exploring the interface.
        </p>
      </div>
    </section>
  );
}
