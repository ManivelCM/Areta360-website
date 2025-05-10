import React from 'react';
import './Button.css';

const Button = ({ text, icon, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {icon && <img src={icon} alt="" className="button-icon" />}
      <span>{text}</span>
    </button>
  );
};

export default Button; 