import React from 'react';
import './components.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__content">
      <p>&copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.</p>
      <nav className="footer__nav">
        <a href="/about">Sobre nosotros</a>
        <a href="/contact">Contacto</a>
        <a href="/privacy">Política de privacidad</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
