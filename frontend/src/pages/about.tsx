// src/pages/About.tsx
import React from 'react';
import Footer from '../components/Footer';
import team1 from '../assets/persona1.jpeg';
import team2 from '../assets/persona2.jpeg';
import team3 from '../assets/persona3.jpeg';
import './About.css';

const team = [
  { name: 'Ana González', role: 'Data Scientist', photo: team1 },
  { name: 'Luis Pérez', role: 'Ingeniero de Software', photo: team2 },
  { name: 'María López', role: 'Analista de Negocios', photo: team3 },
];

const About: React.FC = () => (
  <>
    {/* Hero */}
    <section className="about-hero">
      <h1>Sobre Nosotros</h1>
      <p>
        En <strong>Sales Predictor</strong> desarrollamos soluciones de análisis
        predictivo para optimizar tus <strong>ventas futuras</strong> mediante
        modelos de <strong>machine learning</strong>.
      </p>
    </section>

    {/* Misión / Visión */}
    <section className="about-mv">
      <div className="about-mv__item">
        <h2>Misión</h2>
        <p>
          Empoderar a las empresas con herramientas intuitivas de predicción
          que les permitan tomar decisiones basadas en datos reales y mejorar
          sus resultados.
        </p>
      </div>
      <div className="about-mv__item">
        <h2>Visión</h2>
        <p>
          Ser referentes mundiales en soluciones de análisis predictivo, haciendo
          accesible la inteligencia artificial a pymes y grandes compañías.
        </p>
      </div>
    </section>

    {/* Valores */}
    <section className="about-values">
      <h2>Nuestros Valores</h2>
      <ul>
        <li>
          <strong>Innovación</strong>
          <p>Siempre a la vanguardia tecnológica.</p>
        </li>
        <li>
          <strong>Excelencia</strong>
          <p>Búsqueda constante de la perfección.</p>
        </li>
        <li>
          <strong>Colaboración</strong>
          <p>Trabajamos en equipo para crecer juntos.</p>
        </li>
      </ul>
    </section>

    {/* Equipo */}
    <section className="about-team">
      <h2>Conoce al Equipo</h2>
      <div className="team-grid">
        {team.map((m) => (
          <div className="team-card" key={m.name}>
            <img src={m.photo} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </>
);

export default About;
