import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Search, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock data matching the screenshot
const mockCalls = [
  {
    id: 1,
    date: 'Oct 26, 2025',
    time: '12:31 PM CST',
    caller: '+19556237266',
    duration: '5m 17s',
    status: 'Completed',
    summary: 'The AI agent, Sam, contacted Paul regarding mortgage protection. After initially declining...'
  },
  {
    id: 2,
    date: 'Oct 24, 2025',
    time: '5:49 PM CST',
    caller: '6102891010',
    duration: '3m 23s',
    status: 'Completed',
    summary: 'The user, Robert French, inquired about services for promoting a new business. The ag...'
  },
  {
    id: 3,
    date: 'Oct 24, 2025',
    time: '12:37 PM CST',
    caller: '+12025783435',
    duration: '6m 16s',
    status: 'Completed',
    summary: 'The user inquired about UrSphere\'s services, particularly about providing a new business. The agen...'
  },
  {
    id: 4,
    date: 'Oct 23, 2025',
    time: '4:21 PM CST',
    caller: '+19556237266',
    duration: '5m 46s',
    status: 'Completed',
    summary: 'UrSphere agent contacted Aurelie to offer web design services. Aurelie inquired abo...'
  },
  {
    id: 5,
    date: 'Oct 23, 2025',
    time: '9:19 PM CST',
    caller: '9312496352',
    duration: '1m 31s',
    status: 'Completed',
    summary: 'The user contacted "Your Voice" seeking a website for their logo customization servic...'
  }
];

export default function CallDashboardView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollHint, setShowScrollHint] = useState(true);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current && tableRef.current.scrollLeft > 10) {
        setShowScrollHint(false);
      }
    };

    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.addEventListener('scroll', handleScroll);
      return () => tableElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1">Call Dashboard</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">Monitor and manage your AI voice agent call history</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
          <Button variant="outline" className="w-full sm:w-auto h-12" data-testid="button-download">
            <Download className="w-4 h-4 mr-2" />
            Download CSV
          </Button>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search calls"
              className="pl-9 w-full sm:w-48 md:w-64 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {showScrollHint && (
          <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="bg-gradient-to-l from-background via-background/80 to-transparent pr-4 pl-12 py-4 flex items-center gap-2 animate-pulse">
              <span className="text-xs font-medium text-muted-foreground">Swipe</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        )}
        <div ref={tableRef} className="border rounded-lg overflow-x-auto bg-card">
          <table className="w-full min-w-[800px]">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Date & Time</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Caller</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Duration</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Summary</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCalls.map((call) => (
              <tr key={call.id} className="border-b last:border-b-0 hover:bg-muted/20" data-testid={`call-row-${call.id}`}>
                <td className="py-4 px-4">
                  <div className="text-sm font-medium">{call.date}</div>
                  <div className="text-xs text-muted-foreground">{call.time}</div>
                </td>
                <td className="py-4 px-4 text-sm">{call.caller}</td>
                <td className="py-4 px-4 text-sm">{call.duration}</td>
                <td className="py-4 px-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {call.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground max-w-md truncate">
                  {call.summary}
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="h-10"
                      onClick={() => console.log('View more:', call.id)}
                      data-testid={`button-view-${call.id}`}
                    >
                      View More
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="text-destructive hover:text-destructive h-10"
                      onClick={() => console.log('Delete:', call.id)}
                      data-testid={`button-delete-${call.id}`}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
