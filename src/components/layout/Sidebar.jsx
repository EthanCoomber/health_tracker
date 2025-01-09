// src/components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Ensure this CSS file exists

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active-link">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/workouts" activeClassName="active-link">
              Workouts
            </NavLink>
          </li>
          <li>
            <NavLink to="/meals" activeClassName="active-link">
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink to="/calories" activeClassName="active-link">
              Calories
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active-link">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
