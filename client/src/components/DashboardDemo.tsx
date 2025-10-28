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
    <section className="py-8 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
            Live Dashboard Demo
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-2">
            Explore your AI voice agent dashboard. Click through the different sections to see how you'll manage calls, configure your agent, and track performance.
          </p>
        </div>

        <div className="bg-white dark:bg-card rounded-lg border border-border overflow-hidden w-full max-h-[70vh]">
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
            <main className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6 bg-background overflow-auto max-h-[70vh]">
              {/* Mobile Navigation Tabs */}
              <div className="lg:hidden mb-3 border-b border-border overflow-x-auto">
                <div className="flex gap-1 sm:gap-2 pb-2 min-w-max">
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeView === item.id ? 'secondary' : 'ghost'}
                      size="sm"
                      className="flex-shrink-0 text-xs px-2 py-1 h-8"
                      onClick={() => setActiveView(item.id)}
                      data-testid={`nav-${item.id}`}
                    >
                      <item.icon className="w-3 h-3 mr-1" />
                      <span>{item.label}</span>
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
