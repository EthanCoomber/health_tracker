// src/components/common/Header.jsx
import React from 'react';
import './Header.css'; // Ensure this CSS file exists

const Header = ({ title }) => {
  return <h1 className="header-title">{title}</h1>;
};

export default Header;
