import React from "react";
import './button.scss';

const Button = ({ label, onClick }) => {
  return (
    <button data-aos="zoom-in" className="custom-button mt-24 font-24 bg-light-color be-vietnam-pro-semibold" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
