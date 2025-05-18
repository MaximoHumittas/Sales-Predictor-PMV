import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleMostrarGrafica = async () => {
    try {
      const baseURL = import.meta.env.VITE_API_URL;
      const resp = await axios.post(
        `${baseURL}/plot`,
        { features: [120, 200, 150, 300], producto: 'MiProducto' },
        { responseType: 'blob' }
      );
      // Crear URL para el blob recibido
      const url = URL.createObjectURL(resp.data);
      setImgUrl(url);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error al obtener la gráfica');
    }
  };

  return (
    <>
      <h1>Dashboard</h1>

      <button onClick={handleMostrarGrafica}>
        Obtener gráfica del backend
      </button>

      {error && <p className="error">{error}</p>}

      {imgUrl && (
        <div className="imagen-container">
          <strong>Gráfica recibida:</strong>
          <br />
          <img src={imgUrl} alt="Gráfica de ventas" />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
