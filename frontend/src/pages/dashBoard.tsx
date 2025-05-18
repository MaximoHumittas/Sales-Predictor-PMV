// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  // Estados para inputs
  const [feb, setFeb] = useState<number>(0);
  const [mar, setMar] = useState<number>(0);
  const [abr, setAbr] = useState<number>(0);
  const [precio, setPrecio] = useState<number>(0);

  // Estado para la URL de la imagen y errores
  const [imgUrl, setImgUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePredict = async () => {
    try {
      const baseURL = import.meta.env.VITE_API_URL;
      const resp = await axios.post(
        `${baseURL}/prediccion-mayo`,
        {
          ventas: [feb, mar, abr],
          precio,
          producto: 'MiProducto'
        },
        { responseType: 'blob' }
      );

      // Convertir blob a URL
      const url = URL.createObjectURL(resp.data);
      setImgUrl(url);
      setError('');
    } catch (err: any) {
      console.error(err);
      setError('Error al generar la predicción.');
    }
  };

  return (
    <>
      <h1>Dashboard</h1>

      <div className="form-group">
        <label>Ventas Febrero:</label>
        <input
          type="number"
          value={feb}
          onChange={e => setFeb(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Ventas Marzo:</label>
        <input
          type="number"
          value={mar}
          onChange={e => setMar(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Ventas Abril:</label>
        <input
          type="number"
          value={abr}
          onChange={e => setAbr(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Precio (USD):</label>
        <input
          type="number"
          step="0.01"
          value={precio}
          onChange={e => setPrecio(Number(e.target.value))}
        />
      </div>

      <button onClick={handlePredict}>
        Generar predicción de Mayo
      </button>

      {error && <p className="error">{error}</p>}

      {imgUrl && (
        <div className="imagen-container">
          <strong>Gráfica de ventas y predicción:</strong>
          <br />
          <img src={imgUrl} alt="Predicción Mayo" />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
