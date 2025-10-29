import skyiqLogo from '@assets/skyiq-logo (1)_1761617042316.png';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <img 
              src={skyiqLogo} 
              alt="SkyIQ" 
              className="h-8 w-auto"
              data-testid="img-footer-logo"
            />
          </div>
          <p className="text-muted-foreground mb-4 max-w-md">
            AI-powered voice agents and chatbots that help businesses capture every opportunity and scale without limits.
          </p>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 SkyIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
