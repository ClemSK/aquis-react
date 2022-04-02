import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' ,
      label: 'Price',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
    },
    {
      type: 'bar' ,
      label: 'Volume',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    // {
    //   type: 'bar' ,
    //   label: 'Volume 2',
    //   backgroundColor: 'rgb(53, 162, 235)',
    //   data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
    // },
  ],
};

const MultiTypeChart = () => {
  return <Chart type='bar' data={data} />;
}

export default MultiTypeChart