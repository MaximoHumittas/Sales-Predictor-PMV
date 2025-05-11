import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './components.css';
const Navbar: React.FC = () => {

  const { user, logout } = useAuth();


  return (

    <nav className="navbar">
      <div className="navbar__brand">
        <h1>Sales Predictor</h1>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Inicio</Link>
        </li>
        {user ? (
          <>
            <li className="navbar__item">
              <Link to="/dashboard" className="navbar__link">Panel de control</Link>
            </li>
            <li className="navbar__item">
              <Link to="/about" className="navbar__link">Sobre nosotros</Link>
            </li>
            <li className="navbar__item">
              <Link to="/profile" className="navbar__link">Usuario</Link>
            </li>
            <li className="navbar__item">
              <button onClick={logout} className="navbar__button">Cerrar sesión</button>
            </li>
          </>
        ) : (
          <li className="navbar__item">
            <Link to="/login" className="navbar__link">Login</Link>
          </li>
        )}
      </ul>
    </nav>

  );
};

export default Navbar;
