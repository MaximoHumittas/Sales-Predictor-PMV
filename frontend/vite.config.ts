import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // carga .env, .env.local, .env.[mode], .env.[mode].local
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.VITE_API_URL;

  return {
    plugins: [
      react()
    ],
    server: {
      proxy: {
        // proxy de desarrollo: redirige /plot y /prediccion-mensual a tu Flask
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
