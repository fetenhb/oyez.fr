import React from "react";

import carrefour from "../../../Images/carrefour-hero.jpg";
import darty from "../../../Images/darty.jpg";
import saint from "../../../Images/saint.jpg";
import bmww from "../../../Images/bmww.jpg";
import lcl from "../../../Images/lcl-cover.jpg";
import fnac from "../../../Images/fnac_darty.gif";
import but from "../../../Images/butt.gif";
import boucheron from "../../../Images/boucheron-1.jpg";
import bnp from "../../../Images/BNP-cover.jpg";
import infinity from "../../../Images/infinity1.gif";
import mdm from "../../../Images/MDM-cover2.jpg";
import mh from "../../../Images/M-H-cover.jpg";
import heineken from "../../../Images/Heineken-cover.jpg";
import pizza from "../../../Images/DOMINOSPIZZA-cover.jpg";
import { Link } from "react-router-dom";
import "./ProjectsContent.scss";

const Projets = () => {
  return (
    <div>
      <div className="parent0">
        <div className="link div1-1 ">
          {" "}
          <Link to="/projets-groupe-oyez/carrefour">
            <div
              className="image"
              style={{
                backgroundImage: `url(${carrefour})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      CARREFOUR : Des vendeurs augmentés pour transformer le
                      parcours client
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>{" "}
          </Link>
        </div>
        <div className="link div2-1 ">
          {" "}
          <Link to="/projets-groupe-oyez/retail-vendeurs-connectes-commerce-unifie">
            <div
              className="image"
              style={{
                backgroundImage: `url(${fnac})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      DARTY : Créer un parcours client sans file d’attente avec
                      le paiement mobile
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>
      </div>
      <div className="parent">
        <div className="link div1 ">
          <Link to="/projets-groupe-oyez/but">
            <div
              className="image"
              style={{
                backgroundImage: `url(${but})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      BUT : Digitaliser pour réduire les surfaces d’exposition
                      en magasin
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>
        <div className="link div3 ">
          {" "}
          <Link to="/projets-groupe-oyez/boucheron">
            <div
              className="image"
              style={{
                backgroundImage: `url(${boucheron})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      BOUCHERON : Apporter un meilleur service aux clients dans
                      le monde entier
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>
        <div className="link div2 ">
          {" "}
          <Link to="/projets-groupe-oyez/lcl">
            <div
              className="image"
              style={{
                backgroundImage: `url(${lcl})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      LCL : Incarner la transformation du groupe à travers ses
                      agences « Cathédrale »
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>
        <div className="link div4 ">
          <Link to="/projets-groupe-oyez/maisons-du-monde">
            <div
              className="image"
              style={{
                backgroundImage: `url(${mdm})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      MAISONS DU MONDE : Catalogues et conseillers augmentés
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div9">
          {" "}
          <Link to="/projets-groupe-oyez/moet-hennessy">
            <div
              className="image"
              style={{
                backgroundImage: `url(${mh})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      MOËT HENNESSY : Optimiser les opérations travel retail au
                      niveau mondial
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div10 ">
          <Link to="/projets-groupe-oyez/saint-laurent">
            <div
              className="image"
              style={{
                backgroundImage: `url(${saint})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      SAINT LAURENT : Inspirer et fidéliser les clients
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div11 ">
          {" "}
          <Link to="/projets-groupe-oyez/bnp-paribas">
            <div
              className="image"
              style={{
                backgroundImage: `url(${bnp})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      BNP : Repenser le parcours client en agence bancaire
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div5">
          <Link to="/projets-groupe-oyez/bmw">
            <div
              className="image"
              style={{
                backgroundImage: `url(${bmww})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      BMW : Immerger le client dans l’univers de marque
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div6">
          {" "}
          <Link to="/projets-groupe-oyez/infiniti">
            <div
              className="image"
              style={{
                backgroundImage: `url(${infinity})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      INFINITI : Repenser l’accueil et l’attente en concession
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div7">
          {" "}
          <Link to="/projets-groupe-oyez/dominos-pizza">
            <div
              className="image"
              style={{
                backgroundImage: `url(${pizza})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      DOMINO’S PIZZA : menu-board connecté
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div8">
          {" "}
          <Link to="/projets-groupe-oyez/murale-darty-cuisine">
            <div
              className="image"
              style={{
                backgroundImage: `url(${darty})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      DARTY : Magnifier l’offre produit avec le Flagship cuisine
                      Paris Wagram
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>{" "}
        <div className="link div12 ">
          {" "}
          <Link to="/projets-groupe-oyez/heineken">
            <div
              className="image"
              style={{
                backgroundImage: `url(${heineken})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="item">
                <div className="title-container">
                  <div className="title-bg">
                    <span className="titleProject">
                      HEINEKEN : PLV digital connecté
                    </span>
                  </div>
                </div>
              </div>{" "}
              <span className="item"></span>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Projets;
