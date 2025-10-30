import express from 'express';
import { createServer as createViteServer } from 'vite';
import { ElevenLabsClient } from 'elevenlabs';

const PORT = parseInt(process.env.PORT || '5000');
const app = express();

app.use(express.json());

// Allowed voice IDs
const ALLOWED_VOICES = new Set([
  '21m00Tcm4TlvDq8ikWAM', // Rachel
  'pNInz6obpgDQGcFmaJgB', // Adam
  'EXAVITQu4vr4xnSDxMaL', // Bella
  'ErXwobaYiN019PkySvjV', // Antoni
  'MF3mGyEYCl7XYWbV9V6O', // Elli
]);

// Test ElevenLabs API key endpoint
app.get('/api/test-elevenlabs', async (req, res) => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        success: false, 
        error: 'ElevenLabs API key not configured in environment variables' 
      });
    }

    const client = new ElevenLabsClient({ apiKey });

    // Try to get voices to verify the API key works
    const voices = await client.voices.getAll();
    
    return res.json({ 
      success: true, 
      message: 'API key is valid',
      voiceCount: voices.voices?.length || 0
    });
  } catch (error: any) {
    console.error('ElevenLabs API test failed:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to connect to ElevenLabs API',
      details: error.response?.data || error.toString()
    });
  }
});

// Voice sample API endpoint
app.post('/api/voice-sample/:voiceId', async (req, res) => {
  try {
    const { voiceId } = req.params;
    const { text } = req.body;

    // Validate voice ID
    if (!voiceId || !ALLOWED_VOICES.has(voiceId)) {
      return res.status(400).json({ error: 'Invalid voice ID' });
    }

    // Validate text
    if (!text || typeof text !== 'string' || text.length === 0) {
      return res.status(400).json({ error: 'Text is required' });
    }

    if (text.length > 1000) {
      return res.status(400).json({ error: 'Text must be less than 1000 characters' });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'ElevenLabs API key not configured' });
    }

    const client = new ElevenLabsClient({ apiKey });

    // Generate speech
    const audio = await client.textToSpeech.convert(voiceId, {
      text,
      model_id: 'eleven_monolingual_v1',
    });

    // Stream the audio back to client
    res.setHeader('Content-Type', 'audio/mpeg');
    
    for await (const chunk of audio) {
      res.write(chunk);
    }
    
    res.end();
  } catch (error: any) {
    console.error('Error generating voice:', error);
    const errorMessage = error.message || 'Failed to generate voice sample';
    const errorDetails = error.response?.data || error.toString();
    console.error('Error details:', errorDetails);
    res.status(500).json({ 
      error: errorMessage,
      details: errorDetails
    });
  }
});

async function startDevServer() {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      host: '0.0.0.0',
      allowedHosts: ['.replit.dev', '.repl.co'],
    },
  });
  
  // Use vite middleware after API routes
  app.use(vite.middlewares);
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Vite dev server running on http://0.0.0.0:${PORT}`);
  });
}

startDevServer();
