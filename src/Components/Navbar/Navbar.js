import React, { useState, Fragment } from "react";
import styled from "styled-components";

import "./Navbar.scss";
import "../../App.css";
import logo from "../../Images/logo-oyez.gif";
import $ from "jquery";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1000) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <input type="checkbox" id="burger-toggle" />
        <label for="burger-toggle" class="burger-menu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
        <div class="menu linee">
          <div class="menu-inner  pop-outin">
            <ul class="menu-nav ">
              <li class="menu-nav-item">
                <a class="menu-nav-link " href="#">
                  <span>
                    <div>Expertises</div>
                  </span>
                </a>
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#">
                  <span>
                    <div>Services</div>
                  </span>
                </a>
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#">
                  <span>
                    <div>Méthode</div>
                  </span>
                </a>
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#">
                  <span>
                    <div>Projets</div>
                  </span>
                </a>
              </li>{" "}
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#">
                  <span>
                    <div>Médias</div>
                  </span>
                </a>
              </li>{" "}
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#">
                  <span>
                    <div>Contact</div>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
