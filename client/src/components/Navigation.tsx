import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import skyiqLogo from '@assets/skyiq-logo (1)_1761617042316.png';

export default function Navigation({ onDemoClick }: { onDemoClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src={skyiqLogo} 
              alt="SkyIQ" 
              className="h-12 w-auto"
              data-testid="img-nav-logo"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-nav-features"
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onDemoClick();
              }}
              data-testid="link-nav-demo"
            >
              Demo
            </a>
            <a 
              href="#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-nav-pricing"
            >
              Pricing
            </a>
            <Button 
              variant="default" 
              data-testid="button-nav-start"
              onClick={() => console.log('Get started clicked')}
            >
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a 
              href="#features" 
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onDemoClick();
              }}
            >
              Demo
            </a>
            <a 
              href="#pricing" 
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                console.log('Get started clicked');
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
