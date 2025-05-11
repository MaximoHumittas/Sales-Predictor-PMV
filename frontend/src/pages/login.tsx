import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/Footer';
import './Login.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('juanito@mock.com');
    setPassword('123456');
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <>
      <main className="login">
        <form className="login__form" onSubmit={handleLogin}>
          <h2 className="login__title">Iniciar sesión</h2>

          <div className="login__group">
            <label className="login__label">Correo electrónico</label>
            <input
              type="email"
              className="login__input"
              placeholder="correo@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login__group">
            <label className="login__label">Contraseña</label>
            <input
              type="password"
              className="login__input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login__button">Entrar</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
