import React from "react";
import "../Navbar/Navbar.css";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid logo ">
            <Link to="/">
              <img
                src="https://icon-library.com/images/new-job-icon/new-job-icon-15.jpg"
                alt=""
                width="30"
                height="24"
              ></img>
            </Link>
            <Link className="navbar-brand fw-bold fs-3" to="#">
              Job<span style={{ color: "red" }}>Hunt</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  flex-row-reverse navbarli"
              id="navbarNav"
            >
              <ul className="navbar-nav fs-5 ">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testnomial">
                    Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/services" tabindex="-1">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
