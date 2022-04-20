import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact container">
        <div className="footer__contact__atlavia">
          <span>ALTAVIA.OYEZ France</span>
          <p>
            Espace Niemeyer <br /> 2 place du Colonel Fabien <br />
            75019 Paris <br /> +33 (0)1 42 34 74 00 – contact@oyez.fr
          </p>
        </div>
        <div className="footer__contact__atlavia">
          {" "}
          <span>ALTAVIA.OYEZ Tunisie</span>
          <p>
            06 rue de l’Artisanat, La Charguia 2 <br /> 2035 La Soukra, Ariana{" "}
            <br />
            +216 71 940 624
          </p>
        </div>
      </div>
      <div className="footer__adresse">
        <p>
          <strong>PARIS</strong> : Espace Niemeyer - 2 place du Colonel Fabien -
          75019 Paris ·<strong>TUNIS</strong> : 06 rue de l'Artisanat, La
          Charguia 2, 2035 Ariana.{" "}
        </p>
        <div className="footer__adresse__bottom">
          <a className="top" href="#"></a>

          <ul>
            <li>
              {" "}
              <a href="https://www.facebook.com/groupeOyez/" target="_blank">
                {" "}
                Facebook{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://twitter.com/groupeoyez" target="_blank">
                {" "}
                Twitter{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/company/oyez/" target="_blank">
                {" "}
                linkedin
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/oyez.tunisia/" target="_blank">
                {" "}
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
