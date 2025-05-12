import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carga .env, .env.local, .env.[mode]...
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.VITE_API_URL;

  return {
    plugins: [ react() ],
    server: {
      proxy: {
        // En desarrollo proxy desde '/plot' → tu backend
        '/plot': {
          target: apiUrl,
          changeOrigin: true,
          secure: false
        },
        '/prediccion-mensual': {
          target: apiUrl,
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});
