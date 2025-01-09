import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const CalorieChart = () => {
  // Sample data - would typically come from props or state
  const data = [
    { name: 'Mon', calories: 1800 },
    { name: 'Tue', calories: 2200 }, 
    { name: 'Wed', calories: 1950 },
    { name: 'Thu', calories: 2100 },
    { name: 'Fri', calories: 1750 },
    { name: 'Sat', calories: 2300 },
    { name: 'Sun', calories: 2000 }
  ];

  return (
    <div className="calorie-chart">
      <h3>Weekly Calorie Intake</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CalorieChart;
