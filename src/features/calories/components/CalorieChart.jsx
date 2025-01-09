import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
  Area
} from 'recharts';
import './CalorieChart.css';

const CalorieChart = () => {
  // Sample data - would typically come from props or state
  const data = [
    { 
      name: 'Mon', 
      calories: 1800,
      target: 2000,
      deficit: -200,
      protein: 120,
      carbs: 200,
      fat: 60,
      weight: 180,
      projectedWeight: 179.8,
      bmr: 1800,
      tdee: 2200
    },
    {
      name: 'Tue',
      calories: 1950,
      target: 2000, 
      deficit: -50,
      protein: 130,
      carbs: 220,
      fat: 65,
      weight: 179.8,
      projectedWeight: 179.7,
      bmr: 1800,
      tdee: 2200
    },
    {
      name: 'Wed',
      calories: 2100,
      target: 2000,
      deficit: 100,
      protein: 125,
      carbs: 240,
      fat: 70,
      weight: 179.9,
      projectedWeight: 179.8,
      bmr: 1800,
      tdee: 2200
    },
    {
      name: 'Thu',
      calories: 1850,
      target: 2000,
      deficit: -150,
      protein: 135,
      carbs: 190,
      fat: 62,
      weight: 179.7,
      projectedWeight: 179.6,
      bmr: 1800,
      tdee: 2200
    },
    {
      name: 'Fri',
      calories: 1750,
      target: 2000,
      deficit: -250,
      protein: 140,
      carbs: 180,
      fat: 58,
      weight: 179.5,
      projectedWeight: 179.3,
      bmr: 1800,
      tdee: 2200
    },
    {
      name: 'Sat',
      calories: 2200,
      target: 2000,
      deficit: 200,
      protein: 115,
      carbs: 260,
      fat: 75,
      weight: 179.6,
      projectedWeight: 179.7,
      bmr: 1800,
      tdee: 2200
    },
    {
      name: 'Sun',
      calories: 1900,
      target: 2000,
      deficit: -100,
      protein: 125,
      carbs: 210,
      fat: 65,
      weight: 179.4,
      projectedWeight: 179.3,
      bmr: 1800,
      tdee: 2200
    }
  ];

  const weightGoal = 170; // in lbs
  const weeklyDeficit = 3500; // 1lb/week loss
  const dailyDeficit = weeklyDeficit / 7;
  const currentAvgCalories = data.reduce((acc, day) => acc + day.calories, 0) / data.length;
  const recommendedCalories = currentAvgCalories - dailyDeficit;

  return (
    <div className="calorie-dashboard">
      <div className="calorie-stats">
        <div className="stat-card daily-averages">
          <h4 className="stat-card-title">Daily Averages</h4>
          <p className="stat-card-value">Calories: {currentAvgCalories.toFixed(0)}</p>
          <p className="stat-card-value">Target: {recommendedCalories.toFixed(0)}</p>
          <p className="stat-card-value">Deficit Needed: {dailyDeficit.toFixed(0)}</p>
        </div>
        
        <div className="stat-card weight-goals">
          <h4 className="stat-card-title">Weight Goals</h4>
          <p className="stat-card-value">Current: {data[0].weight} lbs</p>
          <p className="stat-card-value">Target: {weightGoal} lbs</p>
          <p className="stat-card-value">Projected Timeline: {((data[0].weight - weightGoal)/(weeklyDeficit/3500)).toFixed(1)} weeks</p>
        </div>
      </div>

      <div className="chart-container calorie-trends">
        <h3 className="chart-title">Calorie Trends</h3>
        <div className="chart-wrapper" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="calories" fill="#8884d8" name="Actual Calories" />
              <Line yAxisId="left" dataKey="target" stroke="#82ca9d" name="Target Calories" />
              <Area yAxisId="left" dataKey="deficit" fill="#ffc658" name="Calorie Deficit" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-container macronutrients">
        <h3 className="chart-title">Macronutrient Distribution</h3>
        <div className="chart-wrapper" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="protein" stackId="macros" fill="#8884d8" name="Protein (g)" />
              <Bar dataKey="carbs" stackId="macros" fill="#82ca9d" name="Carbs (g)" />
              <Bar dataKey="fat" stackId="macros" fill="#ffc658" name="Fat (g)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-container weight-projection">
        <h3 className="chart-title">Weight Projection</h3>
        <div className="chart-wrapper" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" name="Actual Weight" />
              <Line type="monotone" dataKey="projectedWeight" stroke="#82ca9d" name="Projected Weight" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CalorieChart;
