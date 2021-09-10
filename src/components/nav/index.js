import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./nav.css";


function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            
            <h1> Portfolio</h1>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-light">Home</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li class="nav-item"><a href="https://www.linkedin.com/in/mckinley-fulmer-837216a9/">
          <div class="nav-font text-light">Linkedin</div>
          </a>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;
