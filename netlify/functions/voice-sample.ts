import { Handler } from '@netlify/functions';
import { ElevenLabsClient } from 'elevenlabs';

const ALLOWED_VOICES = new Set([
  '21m00Tcm4TlvDq8ikWAM', // Rachel
  'pNInz6obpgDQGcFmaJgB', // Adam
  'EXAVITQu4vr4xnSDxMaL', // Bella
  'ErXwobaYiN019PkySvjV', // Antoni
  'MF3mGyEYCl7XYWbV9V6O', // Elli
]);

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');
    const { voiceId, text } = body;

    // Validate voice ID
    if (!voiceId || !ALLOWED_VOICES.has(voiceId)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid voice ID' }),
      };
    }

    // Validate text
    if (!text || typeof text !== 'string' || text.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Text is required' }),
      };
    }

    if (text.length > 1000) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Text must be less than 1000 characters' }),
      };
    }

    // Get API key from environment
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'ElevenLabs API key not configured' }),
      };
    }

    // Initialize ElevenLabs client
    const client = new ElevenLabsClient({ apiKey });

    // Generate speech
    const audio = await client.textToSpeech.convert(voiceId, {
      text,
      model_id: 'eleven_monolingual_v1',
    });

    // Collect audio chunks
    const chunks: Buffer[] = [];
    for await (const chunk of audio) {
      chunks.push(Buffer.from(chunk));
    }

    // Combine all chunks into a single buffer
    const audioBuffer = Buffer.concat(chunks);

    // Return audio as base64-encoded response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
      body: audioBuffer.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error: any) {
    console.error('Error generating voice:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || 'Failed to generate voice sample',
        details: error.response?.data || error.toString(),
      }),
    };
  }
};
