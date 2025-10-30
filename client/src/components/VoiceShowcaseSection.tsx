import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Loader2, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <section id="voice-showcase" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
            <Volume2 className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Hear the Possibilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our AI voice options. Click play to hear each voice introduce themselves and discover the perfect match for your brand.
          </p>
        </div>

        <div className="p-6 sm:p-8 shadow-lg">
          <div className="space-y-4">
            {voices.map((voice) => (
              <div
                key={voice.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 border rounded-lg bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200"
                data-testid={`voice-card-${voice.id.toLowerCase()}`}
              >
                <div className="flex-1 mb-4 sm:mb-0">
                  <h3 className="font-semibold text-xl mb-1 text-gray-900" data-testid={`text-voice-name-${voice.id.toLowerCase()}`}>
                    {voice.name}
                  </h3>
                  <p className="text-sm text-gray-600" data-testid={`text-voice-description-${voice.id.toLowerCase()}`}>
                    {voice.description}
                  </p>
                </div>
                <Button
                  onClick={() => handlePlayVoice(voice.voiceId, voice.name)}
                  disabled={playingVoice !== null}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed sm:ml-6"
                  data-testid={`button-play-${voice.id.toLowerCase()}`}
                >
                  {playingVoice === voice.voiceId ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                  <span>
                    {playingVoice === voice.voiceId ? 'Playing...' : 'Play Sample'}
                  </span>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            These are just a few examples. We offer many more voice options to match your brand's personality perfectly.
          </p>
        </div>
      </div>
    </section>
  );
}
