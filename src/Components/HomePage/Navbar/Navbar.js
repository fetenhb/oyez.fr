import React, { useState, Fragment } from "react";
import styled from "styled-components";

import "./Navbar.scss";
import "../../../App.css";
import logo from "../../../Images/logo-oyez.gif";
import logoWhite from "../../../Images/logo_oyez_white2.png";
import $ from "jquery";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className="logo">
        <a href="#">
          {" "}
          <img src={logo} />
        </a>
      </div>
      <div>
        <input type="checkbox" id="burger-toggle" />
        <label for="burger-toggle" class="burger-menu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
        <div class="menu linee">
          {" "}
          <a href="#">
            <img src={logoWhite} className="menu-logo" />
          </a>
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
          <div className="menu-footer">
            <div className="menu-footer-adrs">
              {" "}
              <p>
                <strong>PARIS</strong> : Espace Niemeyer - 2 place du Colonel
                Fabien - 75019 Paris ·<strong>TUNIS</strong> : 06 rue de
                l'Artisanat, La Charguia 2, 2035 Ariana.{" "}
              </p>
            </div>
            <div className="menu-footer-social">
              <ul className="social-media">
                <a>
                  {" "}
                  <li>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </li>{" "}
                </a>
                <a>
                  {" "}
                  <li>
                    {" "}
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </li>{" "}
                </a>
                <a>
                  {" "}
                  <li>
                    {" "}
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </li>{" "}
                </a>
                <a>
                  {" "}
                  <li>
                    {" "}
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </li>{" "}
                </a>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
