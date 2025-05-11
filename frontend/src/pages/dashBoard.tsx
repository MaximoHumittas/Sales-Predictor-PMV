import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './Dashboard.css';

type Grafica = {
  nombre: string;
  url: string;
};

const Dashboard = () => {

  const [producto, setProducto] = useState('');
  const [graficas, setGraficas] = useState<Grafica[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('37.45,11.57,78.40');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const features = input
        .split(',')
        .map(x => parseFloat(x.trim()))
        .filter(x => !isNaN(x));
  
      const res = await axios.post(
        'http://localhost:5000/plot',
        { features, producto },
        { responseType: 'blob' }
      );
  
      const url = URL.createObjectURL(res.data);
      setGraficas(prev => [...prev, { nombre: producto, url }]);
    } catch (error) {
      console.error('Error al generar gráfica:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const apiUrl = import.meta.env.VITE_API_URL;

  const handlePrediccionMensual = async (mes: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${apiUrl}/prediccion-mensual?mes=${mes}`
      );
      const { predicciones } = res.data;
  
      const plotRes = await axios.post(
        `${apiUrl}/plot`,
        {
          features: predicciones,
          producto: `Predicción ${mes.charAt(0).toUpperCase() + mes.slice(1)}`
        },
        { responseType: 'blob' }
      );
  
      const url = URL.createObjectURL(plotRes.data);
      setGraficas(prev => [
        ...prev,
        {
          nombre: `Predicción ${mes.charAt(0).toUpperCase() + mes.slice(1)}`,
          url
        }
      ]);
    } catch (error) {
      console.error(`Error al obtener predicción de ${mes}:`, error);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  return (
    <>
      <div className="dashboard">
        <h1 className="dashboard__title">Sales Predictor</h1>

        <form className="dashboard__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="dashboard__input"
            value={producto}
            onChange={e => setProducto(e.target.value)}
            placeholder="Nombre del producto"
          />
          <input
            type="text"
            className="dashboard__input"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="37.45,11.57,78.40"
          />
          <button type="submit" className="dashboard__button">
            Generar gráfica
          </button>
        </form>

        <div className="dashboard__monthly">
          <h3>Ver predicción mensual</h3>
          {['junio', 'julio', /* ... */].map(mes => (
            <button
              key={mes}
              onClick={() => handlePrediccionMensual(mes)}
              className="dashboard__monthly-button"
            >
              {mes.charAt(0).toUpperCase() + mes.slice(1)}
            </button>
          ))}
        </div>

        {loading && (
          <div className="dashboard__loading">⏳ Cargando gráfica...</div>
        )}

        {graficas.length > 0 && !loading && (
          <div className="dashboard__graphs">
            <h3>Gráficas generadas:</h3>
            {graficas.map((graf, index) => (
              <div key={index} className="dashboard__graph">
                <div className="dashboard__graph-title">{graf.nombre}</div>
                <img src={graf.url} alt={`Gráfica ${graf.nombre}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
