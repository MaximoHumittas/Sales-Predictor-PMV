import React from 'react';
import './components.css';

export interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  text,
  buttonText,
  buttonLink,
  onButtonClick
}) => (
  <div className="card">
    <img src={imageUrl} alt={title} className="card__image" />
    <div className="card__body">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      {buttonText && (
        buttonLink ? (
          <a href={buttonLink} className="card__button">{buttonText}</a>
        ) : (
          <button className="card__button" onClick={onButtonClick}>{buttonText}</button>
        )
      )}
    </div>
  </div>
);

export default Card;