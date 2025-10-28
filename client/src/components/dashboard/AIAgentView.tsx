import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Phone } from 'lucide-react';

export default function AIAgentView() {
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
  const [isCalling, setIsCalling] = useState(false);

  const handleTestAgent = () => {
    setIsCalling(true);
    console.log('Testing agent with:', phoneNumber);
    setTimeout(() => setIsCalling(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-1">SkyIQ AI Voice Agent</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">Test and configure your AI voice agent</p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger value="preview" className="text-sm sm:text-base" data-testid="tab-preview">Preview</TabsTrigger>
          <TabsTrigger value="configuration" className="text-sm sm:text-base" data-testid="tab-configuration">Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-6 mt-6">
          <div className="border rounded-lg p-4 sm:p-6 md:p-8 bg-card">
            <div className="max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Agent Preview</h2>
                  <p className="text-sm text-muted-foreground">Test your AI voice agent with a single call</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="h-12 text-base"
                    data-testid="input-phone-number"
                  />
                </div>

                <Button 
                  className="w-full h-14 text-base"
                  onClick={handleTestAgent}
                  disabled={isCalling}
                  data-testid="button-test-agent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {isCalling ? 'Calling...' : 'Test Agent'}
                </Button>

                {isCalling && (
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 animate-pulse">
                    <p className="text-sm text-center text-primary font-medium">
                      Connecting to AI agent...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-muted/30">
            <h3 className="font-semibold mb-2">How it works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Enter a phone number to receive a test call</li>
              <li>• Your AI agent will call and demonstrate its capabilities</li>
              <li>• Perfect for testing scripts and conversation flows</li>
              <li>• Review call logs and transcripts in the Call Dashboard</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="configuration" className="space-y-6 mt-6">
          <div className="border rounded-lg p-4 sm:p-6 bg-card space-y-6">
            <div>
              <h3 className="font-semibold mb-4 text-base sm:text-lg">Voice Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Voice Model</label>
                  <select className="w-full border rounded-md px-4 py-3 bg-background h-12 text-base" data-testid="select-voice-model">
                    <option>Professional Female - English (US)</option>
                    <option>Professional Male - English (US)</option>
                    <option>Friendly Female - English (US)</option>
                    <option>Friendly Male - English (US)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Response Style</label>
                  <select className="w-full border rounded-md px-4 py-3 bg-background h-12 text-base" data-testid="select-response-style">
                    <option>Friendly & Professional</option>
                    <option>Formal & Business</option>
                    <option>Casual & Conversational</option>
                    <option>Direct & Concise</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base sm:text-lg">Availability</h3>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium mb-1">Business Hours</p>
                <p className="text-sm text-muted-foreground">24/7 - Always Available</p>
              </div>
            </div>

            <Button className="w-full h-12 text-base" data-testid="button-save-config">
              Save Configuration
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
