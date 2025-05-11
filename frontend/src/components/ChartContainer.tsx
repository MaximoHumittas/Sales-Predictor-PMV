import React from 'react';
import './components.css';

export interface ChartContainerProps {
  title?: string;
  children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => (
  <div className="chart-container">
    {title && <h4 className="chart-container__title">{title}</h4>}
    {children}
  </div>
);

export default ChartContainer;