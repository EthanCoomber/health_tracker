// src/pages/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; // Ensure this CSS file exists

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <img 
          src="/assets/images/cool_health_tracking.avif" 
          alt="Health tracking visualization" 
          className="hero-image"
        />
        <div className="hero-content">
          <h2>Welcome to Your Health Dashboard</h2>
          <p>Your comprehensive health tracking platform powered by advanced AI technology to optimize your fitness journey.</p>
        </div>
      </div>

      <section className="importance-section section-container">
        <h3 className="section-title">Why Track Your Health?</h3>
        <div className="importance-content">
          <div className="importance-text">
            <p className="section-description">
              Understanding and monitoring your health metrics is crucial for achieving your fitness goals. 
              Our AI-powered platform revolutionizes how you approach health and fitness by:
            </p>
            <ul className="benefits-list">
              <li className="benefit-item">
                <strong className="benefit-title">Personalized Calorie Calculations:</strong> Our AI analyzes your age, weight, height, 
                activity level, and metabolic rate to determine your optimal daily calorie intake. This precision 
                ensures you're neither overeating nor undernourishing your body.
              </li>
              <li className="benefit-item">
                <strong className="benefit-title">Smart Protein Recommendations:</strong> Based on your workout intensity, muscle mass, 
                and fitness goals, our AI calculates your ideal protein requirements. This is essential for 
                muscle recovery, growth, and maintaining lean body mass.
              </li>
              <li className="benefit-item">
                <strong className="benefit-title">Adaptive Goal Setting:</strong> As your fitness level changes, our AI adjusts your 
                targets, ensuring your goals remain challenging yet achievable.
              </li>
              <li className="benefit-item">
                <strong className="benefit-title">Progress Analytics:</strong> Advanced tracking algorithms monitor your progress, 
                identifying patterns and suggesting optimizations to your routine.
              </li>
            </ul>
          </div>
          <img 
            src="/assets/images/phone_health.webp" 
            alt="Health tracking on mobile" 
            className="importance-image"
          />
        </div>
      </section>

      <section className="how-to-section">
        <h3>Getting Started with Your Fitness Journey</h3>
        <div className="instructions">
          <div className="instruction-step">
            <h4>1. Profile Configuration</h4>
            <p>
              Visit the Settings page to:
              <ul>
                <li>Enter your physical measurements and health metrics</li>
                <li>Set your primary fitness goals (weight loss, muscle gain, maintenance)</li>
                <li>Specify any dietary restrictions or preferences</li>
                <li>Configure your activity level and exercise frequency</li>
              </ul>
            </p>
          </div>
          
          <div className="instruction-step">
            <h4>2. Workout Management</h4>
            <p>
              In the Workouts section, you can:
              <ul>
                <li>Create custom workout routines</li>
                <li>Track sets, reps, and weights for each exercise</li>
                <li>Monitor workout intensity and duration</li>
                <li>View AI-generated suggestions for exercise progression</li>
              </ul>
            </p>
          </div>
          
          <div className="instruction-step">
            <h4>3. Nutrition Tracking</h4>
            <p>
              Use the Meals section to:
              <ul>
                <li>Log your daily food intake with our extensive food database</li>
                <li>Track macro and micronutrient consumption</li>
                <li>Receive AI-powered meal suggestions based on your goals</li>
                <li>Plan meals in advance with our meal preparation tools</li>
              </ul>
            </p>
          </div>
          
          <div className="instruction-step">
            <h4>4. Calorie Management</h4>
            <p>
              The Calories section provides:
              <ul>
                <li>Real-time tracking of calorie intake vs. expenditure</li>
                <li>Dynamic adjustments to your calorie targets based on activity</li>
                <li>Detailed breakdown of your nutritional balance</li>
                <li>AI-driven insights for optimizing your caloric intake</li>
              </ul>
            </p>
          </div>
          
          <div className="instruction-step">
            <h4>5. Progress Monitoring</h4>
            <p>
              Your Dashboard offers:
              <ul>
                <li>Comprehensive progress charts and graphs</li>
                <li>Weekly and monthly progress reports</li>
                <li>Achievement tracking and milestone celebrations</li>
                <li>Personalized recommendations for continued improvement</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="additional-features">
        <div className="features-content">
          <div className="features-text">
            <h3>Advanced Features</h3>
            <ul>
              <li>
                <strong>AI Health Insights:</strong> Receive detailed analysis of your health patterns 
                and personalized recommendations for improvement.
              </li>
              <li>
                <strong>Smart Notifications:</strong> Get timely reminders for workouts, meals, and 
                hydration based on your schedule.
              </li>
              <li>
                <strong>Progress Photography:</strong> Securely store and compare progress photos to 
                visualize your transformation.
              </li>
              <li>
                <strong>Community Support:</strong> Connect with like-minded individuals and share 
                your success stories.
              </li>
            </ul>
          </div>
          <img 
            src="/assets/images/woman_active.webp" 
            alt="Active woman exercising" 
            className="features-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
