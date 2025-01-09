// src/components/common/Button.jsx
import React from 'react';
import './Button.css'; // Optional: Create a CSS file for Button styles

const Button = ({ onClick, children, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`common-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
