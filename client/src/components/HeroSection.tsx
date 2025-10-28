import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import heroBackground from '@assets/cc_1761618392882.png';
import skyiqLogo from '@assets/skyiq-logo (1)_1761617042316.png';

export default function HeroSection({ onDemoClick }: { onDemoClick: () => void }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Never Miss a Call Again';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const current = fullText;

      setTypedText(
        isDeleting
          ? current.substring(0, typedText.length - 1)
          : current.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/67 via-background/63 to-background/67" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/71 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight md:whitespace-nowrap">
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            {typedText}
          </span>
          <span className="animate-pulse text-primary">|</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-6 sm:mb-8">
          Calls and Conversations 24/7
        </p>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          Transform your business with AI-powered voice agents and chatbots that handle calls and conversations 24/7. 
          Capture every opportunity, close more deals, and scale without limits.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto sm:min-w-[200px]"
            data-testid="button-get-started"
            onClick={() => console.log('Get Started clicked')}
          >
            Get Started Free
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto sm:min-w-[200px] backdrop-blur-sm bg-background/50"
            data-testid="button-view-demo"
            onClick={onDemoClick}
          >
            <PlayCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
            View Live Demo
          </Button>
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>24/7 Availability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Instant Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>No Credit Card</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
