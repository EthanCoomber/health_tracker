// src/components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaDumbbell, FaUtensils, FaFireAlt, FaCog, FaUser, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="user-profile">
          <FaUser className="profile-icon user-icon" />
          <div className="user-info">
            <h3 className="user-name">John Doe</h3>
            <p className="user-status">Premium Member</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              onClick={toggleSidebar}
            >
              <FaHome className="nav-icon dashboard-icon" />
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/workouts" 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              onClick={toggleSidebar}
            >
              <FaDumbbell className="nav-icon workouts-icon" />
              <span className="nav-text">Workouts</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/meals" 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              onClick={toggleSidebar}
            >
              <FaUtensils className="nav-icon meals-icon" />
              <span className="nav-text">Meals</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/calories" 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              onClick={toggleSidebar}
            >
              <FaFireAlt className="nav-icon calories-icon" />
              <span className="nav-text">Calories</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/progress" 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              onClick={toggleSidebar}
            >
              <FaChartLine className="nav-icon progress-icon" />
              <span className="nav-text">Progress</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/settings" 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              onClick={toggleSidebar}
            >
              <FaCog className="nav-icon settings-icon" />
              <span className="nav-text">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button" onClick={() => console.log('Logout clicked')}>
          <FaSignOutAlt className="nav-icon logout-icon" />
          <span className="logout-text">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
