import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno (incluyendo VITE_API_URL)
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.VITE_API_URL;

  return {
    plugins: [
      react()       // aquí importas y ejecutas el plugin
    ],
    server: {
      proxy: {
        // cualquier llamada a /plot se redirige a tu backend
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
