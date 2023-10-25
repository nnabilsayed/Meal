import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4279234-3569464.png"
          alt="Not Found"
        />
      </div>
      <Link to="/">
        <button className="bg-primary px-4 py-2 rounded">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
