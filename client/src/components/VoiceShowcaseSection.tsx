import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import backgroundImage from '@assets/ok22_1761802932741.png';

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

export default function VoiceShowcaseSection() {
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const { toast } = useToast();

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
    <section 
      id="voice-showcase" 
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4">
          {voices.map((voice) => (
            <div
              key={voice.id}
              className="flex items-center justify-between p-6 border rounded-lg bg-card hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              data-testid={`voice-card-${voice.id.toLowerCase()}`}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-1" data-testid={`text-voice-name-${voice.id.toLowerCase()}`}>
                  {voice.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-voice-description-${voice.id.toLowerCase()}`}>
                  {voice.description}
                </p>
              </div>
              <Button
                onClick={() => handlePlayVoice(voice.voiceId, voice.name)}
                disabled={playingVoice !== null}
                size="lg"
                className="ml-6"
                data-testid={`button-play-${voice.id.toLowerCase()}`}
              >
                {playingVoice === voice.voiceId ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
                <span className="ml-2">
                  {playingVoice === voice.voiceId ? 'Playing...' : 'Play Sample'}
                </span>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-center text-muted-foreground">
            These are just a few examples. We offer many more voice options to match your brand's personality perfectly.
          </p>
        </div>
      </div>
    </section>
  );
}
