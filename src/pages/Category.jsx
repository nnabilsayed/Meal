import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

const Category = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center text-center space-x-10 items-center mt-4">
      <NavLink
        exact
        to={"/"}
        className={`flex flex-col items-center text-lg ${
          location.pathname === "/" ? "text-blue-500" : ""
        }`}
      >
        <FaHome className="text-4xl" />
        <h4 className="text-lg">Home</h4>
      </NavLink>

      <NavLink
        to={"/cuisine/Italians"}
        className={`flex flex-col items-center text-lg ${
          location.pathname === "/cuisine/Italians" ? "text-blue-500" : ""
        }`}
      >
        <FaPizzaSlice className="text-4xl" />
        <h4 className="text-lg">Italian</h4>
      </NavLink>

      <NavLink
        to="/cuisine/american"
        className={`flex flex-col items-center text-lg ${
          location.pathname === "/cuisine/american" ? "text-blue-500" : ""
        }`}
      >
        <FaHamburger className="text-4xl" />
        <h4 className="text-lg">American</h4>
      </NavLink>

      <NavLink
        to="/cuisine/Thai"
        className={`flex flex-col items-center text-lg ${
          location.pathname === "/cuisine/Thai" ? "text-blue-500" : ""
        }`}
      >
        <GiNoodles className="text-4xl" />
        <h4 className="text-lg">Thai</h4>
      </NavLink>

      <NavLink
        to="/cuisine/Japanese"
        className={`flex flex-col items-center text-lg ${
          location.pathname === "/cuisine/Japanese" ? "text-blue-500" : ""
        }`}
      >
        <GiChopsticks className="text-4xl" />
        <h4 className="text-lg">Japanese</h4>
      </NavLink>
    </div>
  );
};

export default Category;
