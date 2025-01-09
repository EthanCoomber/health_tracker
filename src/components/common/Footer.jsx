// src/components/common/Footer.jsx
import React from 'react';
import './Footer.css'; // Optional: Create a CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Health Tracker App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
