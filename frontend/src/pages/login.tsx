// src/pages/Login.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Login.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Valores por defecto para demo
    setEmail('juanito@mock.com');
    setPassword('123456');
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password); // <--- corregido
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Credenciales inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-header">
        <h2>Bienvenido a Sales Predictor</h2>
      </div>

      <main className="login-page">
        <form className="login-card" onSubmit={handleLogin}>
          <h3 className="login-title">Iniciar sesión</h3>

          {error && <p className="login-error">{error}</p>}

          <div className="login-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="tú@ejemplo.com"
            />
          </div>

          <div className="login-group login-password">
            <label htmlFor="password">Contraseña</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
              <button
                type="button"
                className="pass-toggle"
                onClick={() => setShowPass(v => !v)}
                aria-label="Mostrar contraseña"
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
              />
              Recuérdame
            </label>
            <Link to="/forgot" className="login-forgot">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn--primario login-button"
            disabled={loading}
          >
            {loading ? 'Verificando…' : 'Entrar'}
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Login;
