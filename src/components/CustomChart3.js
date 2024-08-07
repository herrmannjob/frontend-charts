import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useChartStore } from '../store/chartStore';

const CustomChart3 = () => {
  const { data, updateData } = useChartStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.datasets[0].data.map(
        (value) => value + Math.round(Math.random() * 10 - 5)
      );
      updateData(newData);
    }, 2000);

    return () => clearInterval(interval);
  }, [data, updateData]);

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default CustomChart3;
