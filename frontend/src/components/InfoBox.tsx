import React from 'react';
import './components.css';

export interface InfoBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, label, value }) => (
  <div className="info-box">
    <div className="info-box__icon">{icon}</div>
    <div className="info-box__content">
      <span className="info-box__label">{label}</span>
      <span className="info-box__value">{value}</span>
    </div>
  </div>
);

export default InfoBox;