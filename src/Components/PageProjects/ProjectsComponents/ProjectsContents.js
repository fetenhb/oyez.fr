import React from "react";
import styled from "styled-components";

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
import "./ProjectsContent.scss";
import { Link } from "react-router-dom";
const ProjectsContents = () => {
  return (
    <div style={{ marginLeft: "15px", marginRight: "15px", height: "3244px" }}>
      <Link to="/projets-groupe-oyez/carrefour">
        <div
          className="link "
          style={{
            left: "0px",
            top: "0px",
            position: "absolute",
            width: "500px",
            height: "649px",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${carrefour})`,
              width: "500px",
              height: "649px",
              left: "0px",
              top: "0px",
              backgroundSize: "cover",

              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    CARREFOUR : Des vendeurs augmentés pour transformer le
                    parcours client
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
          <span className="item"></span>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/retail-vendeurs-connectes-commerce-unifie">
        <div
          className="link"
          style={{
            left: "500px",
            top: "0",
            width: "1018px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${fnac})`,
              left: "500px",
              top: "0px",
              width: "1018px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    DARTY : Créer un parcours client sans file d’attente avec le
                    paiement mobile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </Link>
      <Link to="/projets-groupe-oyez/but">
        <div
          className="link"
          style={{
            left: "0px",
            top: "649px",
            width: "500px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${but})`,
              left: "0px",
              top: "649px",
              width: "500px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    BUT : Digitaliser pour réduire les surfaces d’exposition en
                    magasin
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/lcl">
        <div
          className="link"
          style={{
            left: "500px",
            top: "649px",
            width: "509px",
            height: "324px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${lcl})`,
              left: "500px",
              top: "649px",
              width: "509px",
              height: "324px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    LCL : Incarner la transformation du groupe à travers ses
                    agences « Cathédrale »
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/maisons-du-monde">
        <div
          className="link"
          style={{
            left: "1009px",
            top: "649px",
            width: "509px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${mdm})`,
              left: "1009px",
              top: "649px",
              width: "509px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    MAISONS DU MONDE : Catalogues et conseillers augmentés
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/boucheron">
        <div
          className="link"
          style={{
            left: "500px",
            top: "973px",
            width: "509px",
            height: "324px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${boucheron})`,
              left: "500px",
              top: "973px",
              width: "509px",
              height: "324px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    BOUCHERON : Apporter un meilleur service aux clients dans le
                    monde entier
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/bmw">
        <div
          className="link"
          style={{
            left: "0",
            top: "1298px",
            width: "1009px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${bmww})`,
              left: "0",
              top: "1298px",
              width: "1009px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    BMW : Immerger le client dans l’univers de marque
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/moet-hennessy">
        <div
          className="link"
          style={{
            left: "1009px",
            top: "1298px",
            width: "509px",
            height: "324px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${mh})`,
              left: "1009px",
              top: "1298px",
              width: "509px",
              height: "324px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    MOËT HENNESSY : Optimiser les opérations travel retail au
                    niveau mondial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/saint-laurent">
        <div
          className="link"
          style={{
            left: "1009px",
            top: "1622px",
            width: "509px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${saint})`,
              left: "1009px",
              top: "1622px",
              width: "509px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    SAINT LAURENT : Inspirer et fidéliser les clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/infiniti">
        <div
          className="link"
          style={{
            left: "0",
            top: "1947px",
            width: "1009px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${infinity})`,
              left: "0",
              top: "1947px",
              width: "1009px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    INFINITI : Repenser l’accueil et l’attente en concession
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/bnp-paribas">
        <div
          className="link"
          style={{
            left: "1009px",
            top: "2271px",
            width: "509px",
            height: "649px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${bnp})`,
              left: "1009px",
              top: "2271px",
              width: "509px",
              height: "649px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    BNP : Repenser le parcours client en agence bancaire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/murale-darty-cuisine">
        <div
          className="link"
          style={{
            left: "509px",
            top: "2596px",
            width: "500px",
            height: "324px",
            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${darty})`,
              left: "509px",
              top: "2596px",
              width: "500px",
              height: "324px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    DARTY : Magnifier l’offre produit avec le Flagship cuisine
                    Paris Wagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/dominos-pizza">
        <div
          className="link"
          style={{
            left: "0",
            top: "2596px",
            width: "509px",
            height: "324px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${pizza})`,
              left: "0",
              top: "2596px",
              width: "509px",
              height: "324px",

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    DOMINO’S PIZZA : menu-board connecté
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projets-groupe-oyez/heineken">
        <div
          className="link"
          style={{
            left: "0",
            top: "2920px",
            width: "509px",
            height: "324px",

            position: "absolute",
          }}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${heineken})`,
              left: "0",
              top: "2920px",
              width: "509px",
              height: "324px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {" "}
            <div className="item">
              <div className="title-container">
                <div className="tit">
                  <span className="titleProject">
                    HEINEKEN : PLV digital connecté
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsContents;
