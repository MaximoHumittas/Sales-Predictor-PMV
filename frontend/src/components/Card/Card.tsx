import React from 'react';

type CardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      {imageUrl && (
        <img className="w-full h-48 object-cover rounded-xl" src={imageUrl} alt={title} />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
