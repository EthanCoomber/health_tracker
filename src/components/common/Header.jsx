// src/components/common/Header.jsx
import React from 'react';
import './Header.css'; // Optional: Create a CSS file for Header styles

const Header = ({ title }) => {
  return <h1 className="header-title">{title}</h1>;
};

export default Header;
