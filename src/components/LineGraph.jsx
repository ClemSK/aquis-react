import React from 'react'
import { Line } from 'react-chartjs-2'
import faker from 'faker'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const makeRandomDataArray = (length) => {
  const randomArray = Array.from({ length: length }, () =>
    Math.floor(Math.random() * 50)
  );
  return randomArray;
};

const buildData = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Price',
        // data: makeRandomDataArray(8),
        data: faker.commerce.price(),
        fill: false,
        backgroundColor: 'rgb(81, 214, 203)',
        borderColor: 'rgba(255, 255, 255, 0.2)'
        // borderColor: 'rgb(24, 247, 228,)',
      }
    ]
  }
  return data
}

const options = {
  scales: {
    yAxis: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `${value}€`
        }
      },
      grid: {
        lineWidth: 1
      }
    }
  }
}

const LineGraph = ({ data }) => (
  <div className='chart'>
    <Line data={buildData(data)} options={options} height={300} />
  </div>
)

export default LineGraph