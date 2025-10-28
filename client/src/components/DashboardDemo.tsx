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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live Dashboard Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore your AI voice agent dashboard. Click through the different sections to see how you'll manage calls, configure your agent, and track performance.
          </p>
        </div>

        <div className="bg-white dark:bg-card rounded-lg border border-border overflow-hidden" style={{ minHeight: '600px' }}>
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-muted/10 p-6">
              <div className="mb-8">
                <img 
                  src={skyiqLogo} 
                  alt="SkyIQ" 
                  className="h-8 w-auto mb-2"
                />
              </div>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeView === item.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start gap-3 hover-elevate"
                    onClick={() => setActiveView(item.id)}
                    data-testid={`nav-${item.id}`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-destructive hover:text-destructive"
                  data-testid="button-logout"
                  onClick={() => console.log('Log out clicked')}
                >
                  Log Out
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-background">
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
