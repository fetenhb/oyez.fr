import React from "react";
import "./Footer.scss";
const FooterAdresse = () => {
  return (
    <div className="footer" style={{ backgroundColor: "#2C2A26" }}>
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

export default FooterAdresse;
