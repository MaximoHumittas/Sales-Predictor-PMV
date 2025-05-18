// src/components/Card.tsx
import React from 'react';
import './Card.css';

interface CardProps {
  tipo: string;
  titulo: string;
  linkText: string;
  linkUrl: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ tipo, titulo, linkText, linkUrl, imgSrc }) => (
  <div className="card">
    <img src={imgSrc} alt={titulo} />
    <span className="badge">{tipo}</span>
    <h3>{titulo}</h3>
    <a href={linkUrl}>{linkText}</a>
  </div>
);

export default Card;
