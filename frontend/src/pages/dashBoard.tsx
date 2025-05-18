// src/pages/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChartLine, FaDollarSign } from 'react-icons/fa';
import Footer from '../components/Footer';
import InfoBox from '../components/InfoBox';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [features, setFeatures] = useState<string>('120,200,150,300');
  const [producto, setProducto] = useState<string>('Samsung S25');
  const [price, setPrice] = useState<string>('10');
  const [imgUrl, setImgUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Parseo de features y métricas derivadas
  const featuresArray = features
    .split(',')
    .map(s => Number(s.trim()))
    .filter(n => !isNaN(n));
  const totalSales = featuresArray.reduce((sum, n) => sum + n, 0);
  const priceNum = Number(price) || 0;

  const handleMostrarGrafica = async () => {
    setLoading(true);
    setError('');
    setImgUrl('');

    try {
      const baseURL = import.meta.env.VITE_API_URL;
      const resp = await axios.post(
        `${baseURL}/plot`,
        { features: featuresArray, producto, price: priceNum },
        { responseType: 'blob' }
      );
      const url = URL.createObjectURL(resp.data);
      setImgUrl(url);
    } catch (err) {
      console.error(err);
      setError('Error al obtener la gráfica. Revisa tu API o los valores ingresados.');
    } finally {
      setLoading(false);
    }
  };

  // Limpieza del blob URL
  useEffect(() => () => {
    if (imgUrl) URL.revokeObjectURL(imgUrl);
  }, [imgUrl]);

  return (
    <div className="dashboard">
      <h1>Dashboard de Ventas</h1>

      {/* Formulario en grid */}
      <div className="form-grid">
        <div className="form-group">
          <label>Ventas pasadas (coma-separadas)</label>
          <input
            type="text"
            value={features}
            onChange={e => setFeatures(e.target.value)}
            placeholder="e.g. 120,200,150,300"
          />
        </div>
        <div className="form-group">
          <label>Precio unitario ($)</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="e.g. 10"
          />
        </div>
        <div className="form-group">
          <label>Producto</label>
          <input
            type="text"
            value={producto}
            onChange={e => setProducto(e.target.value)}
            placeholder="Nombre del producto"
          />
        </div>
      </div>

      <button
        className="btn-primary"
        onClick={handleMostrarGrafica}
        disabled={loading}
      >
        {loading ? 'Generando gráfica…' : 'Obtener gráfica'}
      </button>

      {error && <p className="error">{error}</p>}

      {/* Indicadores clave */}
      <div className="info-grid">
        <InfoBox
          icon={<FaChartLine />}
          label="Ventas históricas"
          value={totalSales.toString()}
        />
        <InfoBox
          icon={<FaDollarSign />}
          label="Precio unitario"
          value={`$${priceNum.toFixed(2)}`}
        />
      </div>

      {/* Spinner */}
      {loading && <div className="spinner" />}

      {/* Contenedor de gráfica */}
      {imgUrl && (
        <div className="chart-container">
          <h3>Predicción para {producto}</h3>
          <img src={imgUrl} alt="Gráfica de ventas" />
        </div>
      )}


    </div>
  );
};

export default Dashboard;
