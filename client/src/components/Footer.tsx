import skyiqLogo from '@assets/skyiq-logo_1761616777386.png';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={skyiqLogo} 
                alt="SkyIQ" 
                className="h-8 w-auto"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI-powered voice agents that help businesses capture every opportunity and scale without limits.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-features">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-pricing">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-demo">Demo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-docs">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-about">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 SkyIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
