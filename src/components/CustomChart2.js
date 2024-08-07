import React from 'react';
import { Bar } from 'react-chartjs-2';

const CustomChart2 = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        type: 'line',
        label: 'Tendências de Vendas',
        data: [10, 15, 8, 12, 20],
        borderColor: '#8e5ea2',
        fill: false,
      },
      {
        type: 'bar',
        label: 'Vendas Mensais',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default CustomChart2;
