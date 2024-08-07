import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
  } from 'chart.js';
  import { useChartStore } from '../store/chartStore';
  import annotationPlugin from 'chartjs-plugin-annotation';
  import zoomPlugin from 'chartjs-plugin-zoom';
  import { Bar } from 'react-chartjs-2';
  import { useEffect } from 'react';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    annotationPlugin,
    zoomPlugin
  );
  
  const CustomChart1 = () => {
    const { data, updateData } = useChartStore();
  
    const updateRandomData = () => {
      const newData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20));
      updateData(newData);
    };
  
    const handleHover = (event, chartElement) => {
      if (chartElement.length > 0) {
        console.log('Hovered:', chartElement[0].index);
      }
    };
  
    const handleClick = (event, chartElement) => {
      if (chartElement.length > 0) {
        console.log('Clicked:', chartElement[0].index);
        updateRandomData();
      }
    };
  
    const customAnnotation = {
      id: 'customAnnotation',
      beforeDraw(chart) {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
  
        ctx.save();
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = 'blue';
        ctx.textAlign = 'center';
        ctx.fillText('Anotação Personalizada', chartArea.left + (chartArea.right - chartArea.left) / 2, chartArea.top + 20);
        ctx.restore();
      }
    };
  
    return (
      <div>
        <Bar
          data={data}
          options={{
            onHover: handleHover,
            onClick: handleClick,
            plugins: {
              annotation: {
                annotations: {
                  line1: {
                    type: 'line',
                    yMin: 10,
                    yMax: 10,
                    borderColor: 'red',
                    borderWidth: 2,
                  },
                  customAnnotation: customAnnotation
                },
              },
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'xy',
                  speed: 10,
                },
                zoom: {
                  wheel: {
                    enabled: true,
                    speed: 0.1,
                  },
                  pinch: {
                    enabled: true,
                  },
                  mode: 'xy',
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: '#000',
                  font: {
                    size: 14,
                  },
                },
              },
              y: {
                ticks: {
                  color: '#000',
                  font: {
                    size: 14,
                  },
                },
              },
            },
            elements: {
              bar: {
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
              },
            },
          }}
        />
        <button className="px-4 py-2 mt-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition duration-300" onClick={updateRandomData}>Atualizar Dados</button>
      </div>
    );
  };
  
  export default CustomChart1;
  