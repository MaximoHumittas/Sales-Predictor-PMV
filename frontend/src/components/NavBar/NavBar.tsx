import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {

  const { user, logout } = useAuth();


  return (
    <nav >
      <div>
        <h1>Sales Predictor</h1>
      </div>
      <ul >
        <li >
          <Link to="/" >Inicio</Link>
        </li>
        {user ? (
          <>
            <li >
              <Link to="/dashboard" >Panel de control</Link>
            </li>

            <li >
              <Link to="/about">Sobre nosotros</Link>
            </li>


            <li >
              <Link to="/profile">Usuario</Link>
            </li>

            <li>
              <button onClick={logout}>
                Cerrar sesión
              </button>
            </li>

          </>
          
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}


      </ul>
    </nav>
  );
};

export default Navbar;
