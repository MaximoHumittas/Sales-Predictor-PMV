// src/components/InfoBox.tsx
import React, { ReactNode } from 'react';
import './components.css'; // aquí están tus estilos .info-box

interface InfoBoxProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, label, value }) => (
  <div className="info-box">
    <div className="info-box__icon">{icon}</div>
    <div className="info-box__content">
      <div className="info-box__label">{label}</div>
      <div className="info-box__value">{value}</div>
    </div>
  </div>
);

export default InfoBox;
