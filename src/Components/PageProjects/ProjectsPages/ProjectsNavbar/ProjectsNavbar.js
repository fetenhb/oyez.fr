import React, { useState, Fragment } from "react";

import "../../../HomePage/Navbar/Navbar.scss";
import "../../../../App.css";
import logo from "../../../../Images/logo-oyez.gif";
import logoWhite from "../../../../Images/logo_oyez_white2.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [logoChange, setLogoChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const changeLogo = () => {
    if (window.scrollY >= 400) {
      setLogoChange(true);
    } else {
      setLogoChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor, changeLogo);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <Link to="/">
        <div className="logo">
          <a> {logoChange ? <img src={logo} /> : <img src={logoWhite} />}</a>
        </div>
      </Link>
      <div>
        <input type="checkbox" id="burger-toggle" />
        <label for="burger-toggle" className="burger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
        <div className="menu linee">
          {" "}
          <Link to="/">
            <a>
              <img src={logoWhite} className="menu-logo" />
            </a>
          </Link>
          <div className="menu-inner  pop-outin">
            <ul className="menu-nav ">
              <li className="menu-nav-item">
                <Link to="/uni-retail-marketing-data-expertise-groupe-oyez">
                  {" "}
                  <a className="menu-nav-link " href="#">
                    <span>
                      <div>Expertises</div>
                    </span>
                  </a>
                </Link>
              </li>
              <li className="menu-nav-item">
                <Link to="/engineering-consulting-technologie-creativite-metiers-groupe-oyez">
                  <a className="menu-nav-link" href="#">
                    <span>
                      <div>Services</div>
                    </span>
                  </a>
                </Link>
              </li>
              <li className="menu-nav-item">
                <Link to="/methode-groupe-oyez">
                  <a className="menu-nav-link" href="#">
                    <span>
                      <div>Méthode</div>
                    </span>
                  </a>
                </Link>
              </li>
              <li className="menu-nav-item">
                <Link to="/projets-groupe-oyez">
                  <a className="menu-nav-link" href="#">
                    <span>
                      <div>Projets</div>
                    </span>
                  </a>
                </Link>
              </li>{" "}
              <li className="menu-nav-item">
                <Link to="/medias">
                  <a className="menu-nav-link" href="#">
                    <span>
                      <div>Médias</div>
                    </span>
                  </a>
                </Link>
              </li>{" "}
              <li className="menu-nav-item">
                <Link to="/contact">
                  <a className="menu-nav-link" href="#">
                    <span>
                      <div>Contact</div>
                    </span>
                  </a>
                </Link>
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
                <a href="https://www.facebook.com/groupeOyez/" target="_blank">
                  {" "}
                  <li>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </li>{" "}
                </a>
                <a href="https://twitter.com/groupeoyez" target="_blank">
                  {" "}
                  <li>
                    {" "}
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </li>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/company/oyez/"
                  target="_blank"
                >
                  {" "}
                  <li>
                    {" "}
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </li>{" "}
                </a>
                <a
                  href="https://www.instagram.com/oyez.tunisia/"
                  target="_blank"
                >
                  {" "}
                  <li>
                    {" "}
                    <i className="fa fa-instagram" aria-hidden="true"></i>
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
