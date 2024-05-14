import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>404 Not Found</h1>
        <div>
          <Link to="/">Back To Home</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
