import create from 'zustand';

export const useChartStore = create((set) => ({
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Vendas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  },
  updateData: (newData) =>
    set((state) => ({
      data: {
        ...state.data,
        datasets: [
          {
            ...state.data.datasets[0],
            data: newData,
          },
        ],
      },
    })),
}));
