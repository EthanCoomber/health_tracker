// src/components/layout/Navbar.jsx
import React from 'react';
import Header from '../common/Header';
import './Navbar.css'; // Ensure this CSS file exists

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="navbar navbar-main navbar-fixed">
      <div className="navbar-left navbar-section">
        <button className="sidebar-toggle btn btn-icon" onClick={toggleSidebar}>
          &#9776; {/* Hamburger Icon */}
        </button>
        <Header title="Health Tracker" className="navbar-header" />
      </div>
      <div className="navbar-actions navbar-section">
        <button className="profile-button btn btn-primary btn-icon">Profile</button>
      </div>
    </header>
  );
};

export default Navbar;
