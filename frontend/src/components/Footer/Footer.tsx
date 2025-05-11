import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Máximo Mora. Todos los derechos reservados.</p>
        
        <div className="mt-4 sm:mt-0 flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="/contacto" className="hover:underline">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
