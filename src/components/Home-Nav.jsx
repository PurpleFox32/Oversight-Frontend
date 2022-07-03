import React from "react";
import Search from "./search";
import "../stylesheets/NavBar.css";



const NavBar3 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="http://localhost:3000/home">
          <img
            src="OverSight-Logo.png"
            alt="Logo"
            width="28px"
            height="28px"
            className="logo"
          /> verSight
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="btn btn-outline-primary"
                  aria-current="page"
                  href="http://localhost:3000/about"
                  id="about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-outline-secondary"
                  href="http://localhost:3000/sign-up"
                  id="signup"
                >
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="btn btn-outline-info"
                  href="http://localhost:3000/login"
                  tabindex="-1"
                  aria-disabled="true"
                  id="login"
                >
                  Login
                </a>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar3;
