import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Phone, Mic, Users as UsersIcon, Building2 } from 'lucide-react';
import CallDashboardView from './dashboard/CallDashboardView';
import CallLogView from './dashboard/CallLogView';
import AIAgentView from './dashboard/AIAgentView';
import BulkCallerView from './dashboard/BulkCallerView';
import BusinessProfileView from './dashboard/BusinessProfileView';
import skyiqLogo from '@assets/skyiq-logo (1)_1761617042316.png';

type DashboardView = 'home' | 'call-dashboard' | 'call-log' | 'ai-agent' | 'bulk-caller' | 'business-profile';

const menuItems = [
  { id: 'home' as DashboardView, label: 'Home', icon: Home },
  { id: 'call-dashboard' as DashboardView, label: 'Call Dashboard', icon: Phone },
  { id: 'ai-agent' as DashboardView, label: 'SkyIQ AI Agent', icon: Mic },
  { id: 'bulk-caller' as DashboardView, label: 'Bulk Caller', icon: UsersIcon },
  { id: 'business-profile' as DashboardView, label: 'Business Profile', icon: Building2 },
];

export default function DashboardDemo() {
  const [activeView, setActiveView] = useState<DashboardView>('home');

  return (
    <section className="py-12 sm:py-24 px-3 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Live Dashboard Demo
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Explore your AI voice agent dashboard. Click through the different sections to see how you'll manage calls, configure your agent, and track performance.
          </p>
        </div>

        <div className="bg-white dark:bg-card rounded-lg border border-border overflow-hidden scale-90 sm:scale-95 lg:scale-100 origin-top" style={{ minHeight: '500px' }}>
          <div className="flex relative">
            {/* Sidebar - always visible on desktop, hidden on mobile */}
            <aside className="hidden lg:block lg:w-72 h-full border-r border-border bg-muted/10 p-6">
              <div className="mb-8">
                <img 
                  src={skyiqLogo} 
                  alt="SkyIQ" 
                  className="h-8 w-auto mb-2"
                />
              </div>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeView === item.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start gap-3 hover-elevate h-12 text-base"
                    onClick={() => setActiveView(item.id)}
                    data-testid={`nav-${item.id}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Button>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full text-destructive hover:text-destructive h-12"
                  data-testid="button-logout"
                  onClick={() => console.log('Log out clicked')}
                >
                  Log Out
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-background">
              {/* Mobile Navigation Tabs */}
              <div className="lg:hidden mb-4 border-b border-border overflow-x-auto">
                <div className="flex gap-2 pb-3 min-w-max">
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeView === item.id ? 'secondary' : 'ghost'}
                      size="sm"
                      className="flex-shrink-0"
                      onClick={() => setActiveView(item.id)}
                      data-testid={`nav-${item.id}`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      <span className="text-xs">{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
              {activeView === 'home' && <CallLogView />}
              {activeView === 'call-dashboard' && <CallDashboardView />}
              {activeView === 'call-log' && <CallLogView />}
              {activeView === 'ai-agent' && <AIAgentView />}
              {activeView === 'bulk-caller' && <BulkCallerView />}
              {activeView === 'business-profile' && <BusinessProfileView />}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
