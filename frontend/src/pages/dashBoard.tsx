import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [mensaje, setMensaje] = useState<string>('');

  const handleClick = async () => {
    try {
      // Usamos la variable de entorno de Vite
      const baseURL = import.meta.env.VITE_API_URL;
      const resp = await axios.get<string>(`${baseURL}/`);
      setMensaje(resp.data);
    } catch (err) {
      console.error(err);
      setMensaje('Error al conectar con el servidor');
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Probar conexión</button>

      {mensaje && (
        <div className="response">
          <strong>Respuesta del backend:</strong>
          <p>{mensaje}</p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
