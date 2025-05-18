// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = () => setOpen(false);

  const navItems = user
    ? [
        { to: '/', label: 'Inicio' },
        { to: '/dashboard', label: 'Panel de control' },
        { to: '/about', label: 'Sobre nosotros' },
        { to: '/profile', label: 'Usuario' },
      ]
    : [{ to: '/login', label: 'Login' }];

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <h1>Sales Predictor</h1>
      </div>

      {/* botón hamburger */}
      <button
        className={`navbar__toggle ${open ? 'is-active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menú"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
        {navItems.map((item) => (
          <li className="navbar__item" key={item.to}>
            <Link
              to={item.to}
              className={`navbar__link ${pathname === item.to ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {user && (
          <li className="navbar__item">
            <button onClick={() => { logout(); closeMenu(); }} className="navbar__button">
              Cerrar sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
