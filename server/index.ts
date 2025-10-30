import express from 'express';
import { createServer as createViteServer } from 'vite';
import { ElevenLabsClient } from 'elevenlabs';

const PORT = parseInt(process.env.PORT || '5000');
const app = express();

app.use(express.json());

// Voice sample API endpoint
app.post('/api/voice-sample/:voiceId', async (req, res) => {
  try {
    const { voiceId } = req.params;
    const { text } = req.body;

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
  } catch (error) {
    console.error('Error generating voice:', error);
    res.status(500).json({ error: 'Failed to generate voice sample' });
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
