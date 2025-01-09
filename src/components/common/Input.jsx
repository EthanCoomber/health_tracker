// src/components/common/Input.jsx
import React from 'react';
import './Input.css'; // Optional: Create a CSS file for Input styles

const Input = ({ type = 'text', value, onChange, placeholder = '', className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`common-input ${className}`}
    />
  );
};

export default Input;
