// src/pages/About.tsx
import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About: React.FC = () => {
  return (
    <>

      <main className="about">
        <h1 className="about__title">Sobre Nosotros</h1>
        <p className="about__text">
          En Sales Predictor desarrollamos soluciones de análisis predictivo para ayudar a nuestros clientes a optimizar sus ventas futuras mediante modelos de machine learning.
        </p>
        <p className="about__text">
          Nuestro equipo está formado por expertos en informática, estadística y negocios, comprometidos en ofrecer resultados precisos y fáciles de interpretar.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
