import { createServer } from 'vite';

const PORT = parseInt(process.env.PORT || '5000');

async function startDevServer() {
  const vite = await createServer({
    server: {
      port: PORT,
      host: '0.0.0.0',
    },
  });
  
  await vite.listen();
  console.log(`Vite dev server running on http://0.0.0.0:${PORT}`);
}

startDevServer();
