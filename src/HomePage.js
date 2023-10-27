import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { FcCalculator, FcGlobe } from "react-icons/fc";

function HomePage() {
  return (
    <div className="root">
      <Link
        to="/calculator"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="icon">
          <FcCalculator style={{ width: "200px", height: "200px" }} />
          <h1>Calculator</h1>
        </div>
      </Link>
      <Link to="/weather" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="icon">
          <FcGlobe style={{ width: "200px", height: "200px" }} />
          <h1>Weather</h1>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
