import React from "react";
import "./Footer.scss";
const FooterAdresse = () => {
  return (
    <div className="footer">
      <div className="footer__adresse">
        <p>
          <strong>PARIS</strong> : Espace Niemeyer - 2 place du Colonel Fabien -
          75019 Paris ·<strong>TUNIS</strong> : 06 rue de l'Artisanat, La
          Charguia 2, 2035 Ariana.{" "}
        </p>
        <div className="footer__adresse__bottom">
          <a class="top" href="#"></a>

          <ul>
            <li> Facebook</li>
            <li> Twitter</li>
            <li> linkedin</li>
            <li> Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterAdresse;
