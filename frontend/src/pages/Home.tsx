import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sales Predictor</h1>
        <p className="text-gray-600 text-lg">
          Bienvenido a la aplicación de predicción de ventas.
        </p>
        <p className="text-gray-500 mt-2">
          Aquí podrás cargar tus datos y obtener predicciones basadas en modelos de Machine Learning.
        </p>
      </div>
    </div>
  );
};

export default Home;
