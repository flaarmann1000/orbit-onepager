// src/components/Header.js
import React from "react";
import logo from "./../assets/orbit-logo.png";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="Header">
      <div className="row justify-content-between align-items-center py-3">
        <div className="col-1"></div>{" "}
        {/* Empty column with a width of 2 columns on the left side */}
        <div className="col d-flex align-items-center">
          <img src={logo} alt="Orbit Logo" className="mr-2" />
          <h1 className="mb-0">orbit</h1>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Schedule Demo</button>
        </div>
        <div className="col-1"></div>{" "}
        {/* Empty column with a width of 2 columns on the right side */}
      </div>
    </header>
  );
}

export default Header;
