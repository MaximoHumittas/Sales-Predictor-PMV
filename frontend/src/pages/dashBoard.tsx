import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1) Parsear input "a,b,c" → [a, b, c]
      const features = input
        .split(',')
        .map(x => parseFloat(x.trim()))
        .filter(x => !isNaN(x));

      // 2) Enviar POST y recibir blob
      const res = await axios.post(
        'http://localhost:5000/plot',
        { features },
        { responseType: 'blob' }
      );

      // 3) Crear URL para <img>
      const url = URL.createObjectURL(res.data);
      setImgUrl(url);

    } catch (error) {
      console.error('Error al generar gráfica:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sales Predictor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="37.45,11.57,78.40"
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Generar gráfica</button>
      </form>

      {imgUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultado:</h3>
          <img src={imgUrl} alt="Gráfica de datos" />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
