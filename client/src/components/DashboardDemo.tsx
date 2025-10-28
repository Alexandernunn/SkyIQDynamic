import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, TrendingUp, Users, Clock, PhoneIncoming, PhoneMissed, CheckCircle2, ArrowUpRight, PlayCircle } from 'lucide-react';

// Mock data for demo
const mockCalls = [
  { id: 1, caller: 'John Smith', number: '+1 (555) 123-4567', status: 'answered', duration: '4:32', intent: 'Appointment Booking', time: '2m ago' },
  { id: 2, caller: 'Sarah Johnson', number: '+1 (555) 234-5678', status: 'answered', duration: '2:15', intent: 'Product Inquiry', time: '8m ago' },
  { id: 3, caller: 'Mike Davis', number: '+1 (555) 345-6789', status: 'answered', duration: '6:45', intent: 'Support Request', time: '15m ago' },
  { id: 4, caller: 'Emily Chen', number: '+1 (555) 456-7890', status: 'answered', duration: '3:20', intent: 'Quote Request', time: '22m ago' },
];

const mockTranscript = `AI Agent: Thank you for calling SkyIQ. How can I help you today?

Caller: Hi, I'm interested in scheduling a demo of your AI voice agent.

AI Agent: I'd be happy to help you schedule a demo. May I have your name and email address?

Caller: Sure, it's John Smith and john@example.com.

AI Agent: Perfect, John. I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?

Caller: Thursday at 10 AM works great.

AI Agent: Excellent! I've scheduled your demo for Thursday at 10 AM. You'll receive a confirmation email at john@example.com shortly. Is there anything else I can help you with?

Caller: No, that's all. Thank you!

AI Agent: You're welcome, John. Have a great day!`;

export default function DashboardDemo() {
  const [callCount, setCallCount] = useState(0);
  const [leadCount, setLeadCount] = useState(0);
  const [selectedCall, setSelectedCall] = useState(mockCalls[0]);
  const [activeTab, setActiveTab] = useState('overview');

  // Animate counters on mount
  useEffect(() => {
    const callTimer = setInterval(() => {
      setCallCount(prev => {
        if (prev < 247) return prev + 7;
        clearInterval(callTimer);
        return 247;
      });
    }, 30);

    const leadTimer = setInterval(() => {
      setLeadCount(prev => {
        if (prev < 189) return prev + 5;
        clearInterval(leadTimer);
        return 189;
      });
    }, 30);

    return () => {
      clearInterval(callTimer);
      clearInterval(leadTimer);
    };
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-demo">Live Demo</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into every call, conversation, and conversion. 
            See your AI agents in action.
          </p>
        </div>

        <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-lg border border-card-border p-6 md:p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8" data-testid="tabs-dashboard">
              <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
              <TabsTrigger value="calls" data-testid="tab-calls">Calls</TabsTrigger>
              <TabsTrigger value="analytics" data-testid="tab-analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings" data-testid="tab-settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-6 hover-elevate">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">+12%</Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1" data-testid="text-call-count">{callCount}</div>
                  <div className="text-sm text-muted-foreground">Calls Today</div>
                </Card>

                <Card className="p-6 hover-elevate">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">+18%</Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1" data-testid="text-lead-count">{leadCount}</div>
                  <div className="text-sm text-muted-foreground">New Leads</div>
                </Card>

                <Card className="p-6 hover-elevate">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">+8%</Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1">94%</div>
                  <div className="text-sm text-muted-foreground">Answer Rate</div>
                </Card>

                <Card className="p-6 hover-elevate">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">-12s</Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1">8s</div>
                  <div className="text-sm text-muted-foreground">Avg Response</div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Calls</h3>
                  <div className="space-y-3">
                    {mockCalls.map((call) => (
                      <div
                        key={call.id}
                        className="flex items-center justify-between p-3 rounded-lg hover-elevate active-elevate-2 cursor-pointer border border-transparent hover:border-border transition-all"
                        onClick={() => {
                          setSelectedCall(call);
                          setActiveTab('calls');
                        }}
                        data-testid={`call-item-${call.id}`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <PhoneIncoming className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">{call.caller}</div>
                            <div className="text-sm text-muted-foreground truncate">{call.number}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="text-xs">{call.duration}</Badge>
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Call Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Answered</span>
                        <span className="text-sm font-medium">94%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Voicemail</span>
                        <span className="text-sm font-medium">4%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-chart-3 h-2 rounded-full" style={{ width: '4%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Missed</span>
                        <span className="text-sm font-medium">2%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-destructive h-2 rounded-full" style={{ width: '2%' }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="calls" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Call Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <PhoneIncoming className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{selectedCall.caller}</div>
                        <div className="text-sm text-muted-foreground">{selectedCall.number}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-medium">{selectedCall.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Time</div>
                        <div className="font-medium">{selectedCall.time}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Status</div>
                        <Badge variant="secondary">Answered</Badge>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Intent</div>
                        <Badge>{selectedCall.intent}</Badge>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full" variant="outline" data-testid="button-view-recording">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Play Recording
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Conversation Transcript</h3>
                  <div className="bg-muted/50 rounded-lg p-4 h-[400px] overflow-y-auto text-sm leading-relaxed whitespace-pre-line" data-testid="text-transcript">
                    {mockTranscript}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Conversion Rate</h4>
                  </div>
                  <div className="text-4xl font-bold mb-1">67%</div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+5% from last week</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Avg Call Duration</h4>
                  </div>
                  <div className="text-4xl font-bold mb-1">4:23</div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+12s from last week</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Customer Satisfaction</h4>
                  </div>
                  <div className="text-4xl font-bold mb-1">4.8</div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+0.3 from last week</span>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">Weekly Performance</h3>
                <div className="space-y-6">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => {
                    const percentage = [85, 92, 88, 95, 90, 75, 70][index];
                    return (
                      <div key={day}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{day}</span>
                          <span className="text-sm text-muted-foreground">{percentage}% answered</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000" 
                            style={{ width: `${percentage}%` }} 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Agent Configuration</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-medium mb-2">Business Hours</div>
                    <div className="text-sm text-muted-foreground">24/7 - Always Available</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-medium mb-2">Voice Model</div>
                    <div className="text-sm text-muted-foreground">Professional Female - English (US)</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-medium mb-2">Response Style</div>
                    <div className="text-sm text-muted-foreground">Friendly & Professional</div>
                  </div>
                  <Button className="w-full" variant="outline" data-testid="button-customize">
                    Customize Settings
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
