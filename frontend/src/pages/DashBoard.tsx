import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Panel de Control</h1>

      <p className="text-gray-600 mb-8">
        Bienvenido al sistema de predicción de ventas. Aquí puedes revisar estadísticas, subir datos y ver resultados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Subir Datos</h2>
          <p className="text-gray-500">Carga tus archivos para generar predicciones.</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Ver Resultados</h2>
          <p className="text-gray-500">Accede a las predicciones ya generadas.</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Estadísticas</h2>
          <p className="text-gray-500">Consulta gráficas sobre rendimiento de tus ventas.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
