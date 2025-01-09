// src/components/layout/Navbar.jsx
import React from 'react';
import Header from '../common/Header';
import './Navbar.css'; // Optional: Create a CSS file for Navbar styles

const Navbar = () => {
  return (
    <header className="navbar">
      <Header title="Health Tracker" />
      {/* Add additional navbar elements like user profile, logout button, etc. */}
    </header>
  );
};

export default Navbar;
