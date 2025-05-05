import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Sales Predictor</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200 transition">Inicio</Link>
          <Link to="/dashboard" className="text-white hover:text-blue-200 transition">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
