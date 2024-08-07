import React, { useState } from 'react';
import CustomChart1 from './components/CustomChart1';
import CustomChart2 from './components/CustomChart2';
import CustomChart3 from './components/CustomChart3';

const App = () => {
  const [visibleChart, setVisibleChart] = useState(null);

  const handleButtonClick = (chart) => {
    setVisibleChart(visibleChart === chart ? null : chart);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Desafio Técnico - Gráficos</h1>
      <div className="mb-6 space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => handleButtonClick('chart1')}
        >
          Mostrar/Ocultar Gráfico 1
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300"
          onClick={() => handleButtonClick('chart2')}
        >
          Mostrar/Ocultar Gráfico 2
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-300"
          onClick={() => handleButtonClick('chart3')}
        >
          Mostrar/Ocultar Gráfico 3
        </button>
      </div>
      <div className="w-full max-w-4xl">
        {visibleChart === 'chart1' && <CustomChart1 />}
        {visibleChart === 'chart2' && <CustomChart2 />}
        {visibleChart === 'chart3' && <CustomChart3 />}
      </div>
    </div>
  );
};

export default App;
