import React from 'react';
import './components.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primario' | 'secundario';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primario', onClick }) => (
  <button
    className={`btn btn--${variant}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;