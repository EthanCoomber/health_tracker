// src/components/layout/Navbar.jsx
import React from 'react';
import Header from '../common/Header';
import './Navbar.css'; // Ensure this CSS file exists

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776; {/* Hamburger Icon */}
        </button>
        <Header title="Health Tracker" />
      </div>
      <div className="navbar-actions">
        <button className="profile-button">Profile</button>
      </div>
    </header>
  );
};

export default Navbar;
