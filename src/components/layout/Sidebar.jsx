// src/components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Ensure this CSS file exists

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : undefined)} onClick={toggleSidebar}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/workouts" className={({ isActive }) => (isActive ? 'active-link' : undefined)} onClick={toggleSidebar}>
              Workouts
            </NavLink>
          </li>
          <li>
            <NavLink to="/meals" className={({ isActive }) => (isActive ? 'active-link' : undefined)} onClick={toggleSidebar}>
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink to="/calories" className={({ isActive }) => (isActive ? 'active-link' : undefined)} onClick={toggleSidebar}>
              Calories
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : undefined)} onClick={toggleSidebar}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
