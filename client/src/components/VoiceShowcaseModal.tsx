import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface VoiceShowcaseModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const voices = [
  {
    id: 'Rachel',
    name: 'Rachel',
    description: 'Warm and friendly professional voice',
    voiceId: '21m00Tcm4TlvDq8ikWAM'
  },
  {
    id: 'Adam',
    name: 'Adam',
    description: 'Deep and authoritative male voice',
    voiceId: 'pNInz6obpgDQGcFmaJgB'
  },
  {
    id: 'Bella',
    name: 'Bella',
    description: 'Soft and calming female voice',
    voiceId: 'EXAVITQu4vr4xnSDxMaL'
  },
  {
    id: 'Antoni',
    name: 'Antoni',
    description: 'Clear and energetic male voice',
    voiceId: 'ErXwobaYiN019PkySvjV'
  },
  {
    id: 'Elli',
    name: 'Elli',
    description: 'Young and vibrant female voice',
    voiceId: 'MF3mGyEYCl7XYWbV9V6O'
  },
];

export default function VoiceShowcaseModal({ isOpen, setIsOpen }: VoiceShowcaseModalProps) {
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [testingApiKey, setTestingApiKey] = useState(false);
  const { toast } = useToast();

  const handleTestApiKey = async () => {
    try {
      setTestingApiKey(true);
      
      const response = await fetch('/api/test-elevenlabs');
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: 'Success',
          description: `API key is valid! Found ${data.voiceCount} voices available.`,
        });
      } else {
        toast({
          title: 'API Key Error',
          description: data.error || 'Failed to validate API key',
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Error testing API key:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to test API key',
        variant: 'destructive',
      });
    } finally {
      setTestingApiKey(false);
    }
  };

  const handlePlayVoice = async (voiceId: string, voiceName: string) => {
    try {
      setPlayingVoice(voiceId);
      
      // Call backend to generate voice
      const response = await fetch(`/api/voice-sample/${voiceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: `Hello, I'm ${voiceName}. I can help answer calls and engage with your customers 24/7.`
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.details || 'Failed to generate voice sample');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      audio.onended = () => {
        setPlayingVoice(null);
        URL.revokeObjectURL(audioUrl);
      };
      
      audio.onerror = () => {
        setPlayingVoice(null);
        URL.revokeObjectURL(audioUrl);
        toast({
          title: 'Playback Error',
          description: 'Could not play the voice sample',
          variant: 'destructive',
        });
      };

      await audio.play();
    } catch (error: any) {
      console.error('Error playing voice:', error);
      setPlayingVoice(null);
      toast({
        title: 'Error',
        description: error.message || 'Failed to generate voice sample. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Hear the Possibilities</DialogTitle>
          <DialogDescription>
            Experience our AI voice options. Click play to hear each voice introduce themselves.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 mb-4 p-4 bg-muted rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Test ElevenLabs API Key</p>
              <p className="text-xs text-muted-foreground">Verify your API key is configured correctly</p>
            </div>
            <Button 
              onClick={handleTestApiKey}
              disabled={testingApiKey || playingVoice !== null}
              variant="outline"
              data-testid="button-test-api-key"
            >
              {testingApiKey ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <CheckCircle2 className="w-4 h-4 mr-2" />
              )}
              {testingApiKey ? 'Testing...' : 'Test API Key'}
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {voices.map((voice) => (
            <div
              key={voice.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-colors"
              data-testid={`voice-card-${voice.id.toLowerCase()}`}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg" data-testid={`text-voice-name-${voice.id.toLowerCase()}`}>
                  {voice.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-voice-description-${voice.id.toLowerCase()}`}>
                  {voice.description}
                </p>
              </div>
              <Button
                onClick={() => handlePlayVoice(voice.voiceId, voice.name)}
                disabled={playingVoice !== null}
                className="ml-4"
                data-testid={`button-play-${voice.id.toLowerCase()}`}
              >
                {playingVoice === voice.voiceId ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                <span className="ml-2">
                  {playingVoice === voice.voiceId ? 'Playing...' : 'Play'}
                </span>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            These are just a few examples. We offer many more voice options to match your brand's personality.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
