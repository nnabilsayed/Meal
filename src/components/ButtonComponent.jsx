import React from "react";
import { Link } from "react-router-dom";
const ButtonComponent = ({ itemId, buttonText }) => {
  return (
    <Link to={`meal/${itemId}`}>
      <button>{buttonText}</button>
    </Link>
  );
};

export default ButtonComponent;
