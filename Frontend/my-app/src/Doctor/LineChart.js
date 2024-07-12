import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Patients',
        data: [10, 20, 30, 25, 35, 40, 30],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Patients',
          color: 'black',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)',
          font: {
            size: 12,
            weight: 'normal'
          }
        },
      },
      x: {
        ticks: {
          color: 'rgba(0, 0, 0, 0.7)',
          font: {
            size: 12,
            weight: 'normal'
          }
        },
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Patients: ${tooltipItem.raw}`;
          }
        }
      },
      title: {
        display: true,
        text: 'Patient Trends',
        color: 'rgba(0, 0, 0, 0.8)',
        font: {
          size: 18,
          weight: 'bold'
        }
      },
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(0, 0, 0, 0.7)',
          font: {
            size: 14,
            weight: 'normal'
          }
        }
      }
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    }
  };

  return (
    <div style={{ width: '100%', height: '400px', marginLeft:"250px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
