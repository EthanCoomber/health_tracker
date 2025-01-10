import React from 'react';
import './ProgressPage.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressPage = () => {
  // Dummy data for different metrics
  const weightData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Weight (lbs)',
        data: [185, 182, 178, 175, 173, 170],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const bodyFatData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Body Fat %',
        data: [25, 24, 23, 21, 20, 19],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const strengthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bench Press (lbs)',
        data: [135, 145, 155, 165, 175, 185],
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  const cardioData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Mile Time (minutes)',
        data: [12, 11.5, 11, 10.5, 10, 9.5],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Progress Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="progress-page">
      <h1>Your Progress Dashboard</h1>
      
      <div className="metrics-summary">
        <div className="metric-card">
          <h3>Current Stats</h3>
          <ul>
            <li>Weight: 170 lbs</li>
            <li>Body Fat: 19%</li>
            <li>BMI: 24.5</li>
            <li>Muscle Mass: 135 lbs</li>
          </ul>
        </div>

        <div className="metric-card">
          <h3>Goals</h3>
          <ul>
            <li>Target Weight: 165 lbs</li>
            <li>Target Body Fat: 15%</li>
            <li>Target BMI: 23</li>
            <li>Target Muscle Mass: 140 lbs</li>
          </ul>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h2>Weight Progress</h2>
          <Line options={chartOptions} data={weightData} />
        </div>

        <div className="chart-container">
          <h2>Body Fat Progress</h2>
          <Line options={chartOptions} data={bodyFatData} />
        </div>

        <div className="chart-container">
          <h2>Strength Progress</h2>
          <Line options={chartOptions} data={strengthData} />
        </div>

        <div className="chart-container">
          <h2>Cardio Progress</h2>
          <Line options={chartOptions} data={cardioData} />
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
