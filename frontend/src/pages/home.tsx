// src/pages/Home.tsx
import React from 'react';
import './Home.css';
import Footer from '../components/Footer';
import Card from '../components/Card';
import fotoPred1 from '../assets/fotoIA1.jpg';
import fotoPred2 from '../assets/fotoIA7.jpg';
import fotoPred3 from '../assets/fotoIA9.jpg';
import fotoPred4 from '../assets/fotoIA10.jpg';
import video from '../assets/video.mp4';


import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpeg';
const features = [
  {
    tipo: 'Artículo',
    titulo: '¿Cómo puede la IA mejorar tus ventas? Casos reales con datos',
    linkText: 'Leer artículo',
    linkUrl: '#',
    imgSrc: foto1
  },
  {
    tipo: 'Demo',
    titulo: 'Visualiza cómo SalesPredictor transforma datos en predicciones',
    linkText: 'Ver demo interactiva',
    linkUrl: '#',
    imgSrc: fotoPred2
  },
  {
    tipo: 'Webinar',
    titulo: 'Aplicación de modelos de predicción con TensorFlow y Pandas',
    linkText: 'Inscríbete ahora',
    linkUrl: '#',
    imgSrc: fotoPred3
  },
  {
    tipo: 'Blog',
    titulo: 'Impacto de la visualización de ventas en la toma de decisiones',
    linkText: 'Explorar',
    linkUrl: '#',
    imgSrc: foto2
  }
];

const products = [
  {
    titulo: 'Pequeñas empresas',
    descripcion: 'Anticipa tus ventas mensuales con modelos inteligentes y visualización clara.',
    imgSrc: fotoPred1
  },
  {
    titulo: 'Analistas de datos',
    descripcion: 'Integra análisis predictivo a tu flujo de trabajo con herramientas conocidas.',

    imgSrc: fotoPred2
  },
  {
    titulo: 'Consultores de negocio',
    descripcion: 'Entrega reportes predictivos a tus clientes en minutos.',


    imgSrc: fotoPred3
  },
  {
    titulo: 'Explora SalesPredictor',
    descripcion: 'Conoce todas las funcionalidades del sistema PMN y su potencial.',

 
    imgSrc: foto2
  }
];

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Anticipa tus ventas con <span>SalesPredictor</span>
          </h1>
          <p>
            SalesPredictor es un Proyecto de Mínima Necesidad (PMN) que permite prever el comportamiento futuro de tus ventas a través de modelos de IA. Con gráficos interactivos, datos históricos y un backend en Flask, toma mejores decisiones hoy.
          </p>
          <div className="buttons">
            <button className="primary">Probar ahora</button>
            <button className="secondary">Ver demostración</button>
          </div>
        </div>
        <div className="hero-media">
          <div className="video-wrapper">
            <video width="100%" controls>
              <source src={video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <button className="play-btn">▶</button>
          </div>
        </div>
      </section>

      {/* Novedades */}
      <section className="features">
        <h2>¿Qué puedes descubrir con SalesPredictor?</h2>
        <div className="cards-grid">
          {features.map((f, i) => (
            <Card
              key={i}
              tipo={f.tipo}
              titulo={f.titulo}
  
      
              imgSrc={f.imgSrc}
            />
          ))}
        </div>
      </section>

      {/* Productos / Aplicaciones */}
      <section className="products">
        <h2>¿Para quién es útil SalesPredictor?</h2>
        <div className="product-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <img src={p.imgSrc} alt={p.titulo} />
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <a href={p.linkUrl}>{p.linkText}</a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
