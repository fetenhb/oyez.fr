import React from "react";
import $ from "jquery";

import bmw from "../../../Images/bmw.png";
import boucheron from "../../../Images/boucheron.png";
import but from "../../../Images/but.png";
import carrefour from "../../../Images/carrefour.png";
import chalhoub from "../../../Images/chalhoub.png";
import coca from "../../../Images/coca.png";
import dominos from "../../../Images/dominos.png";
import ELeclerc from "../../../Images/ELeclerc.png";
import fnac from "../../../Images/fnac.png";
import Galeries from "../../../Images/Galeries.png";
import GroupeBPCE from "../../../Images/GroupeBPCE.png";
import Infiniti from "../../../Images/Infiniti.png";
import Lcl from "../../../Images/Lcl.png";
import Maisons from "../../../Images/Maisons.png";
import monoprix from "../../../Images/monoprix.png";
import Profil from "../../../Images/Profil.png";
import RENAULT from "../../../Images/RENAULT.png";
import saintLaurent from "../../../Images/saintLaurent.png";
import sg from "../../../Images/sg.png";
import OwlCarousel from "react-owl-carousel";
import "./Client.scss";
const Clients = () => {
  return (
    <div>
      <div className="container">
        <h1 style={{ padding: "0 0 50px 0" }}>Clients</h1>

        <div class="home-demo">
          <OwlCarousel
            items={6}
            autoplay={true}
            autoPlayTimeout={1000}
            dots={false}
            loop={true}
            class="owl-carousel owl-theme"
            style={{ paddingBottom: "0 !important" }}
          >
            <div class="home-demo__item">
              <img src={Lcl} />
            </div>{" "}
            <div class="home-demo__item">
              <img src={but} />
            </div>{" "}
            <div class="home-demo__item">
              <img src={RENAULT} />
            </div>{" "}
            <div class="home-demo__item">
              <img src={monoprix} />
            </div>{" "}
            <div class="home-demo__item">
              <img src={Galeries} />
            </div>{" "}
            <div class="home-demo__item">
              <img src={dominos} />
            </div>
            <div class="home-demo__item">
              <img src={Profil} />
            </div>
            <div class="home-demo__item">
              <img src={ELeclerc} />
            </div>
            <div class="home-demo__item">
              <img src={sg} />
            </div>
            <div class="home-demo__item">
              <img src={saintLaurent} />
            </div>
            <div class="home-demo__item">
              <img src={Maisons} />
            </div>
            <div class="home-demo__item">
              <img src={fnac} />
            </div>
            <div class="home-demo__item">
              <img src={carrefour} />
            </div>{" "}
            <div class="home-demo__item">
              <img src={bmw} />
            </div>
            <div class="home-demo__item">
              <img src={boucheron} />
            </div>
            <div class="home-demo__item">
              <img src={Infiniti} />
            </div>
            <div class="home-demo__item">
              <img src={chalhoub} />
            </div>
            <div class="home-demo__item">
              <img src={GroupeBPCE} />
            </div>
            <div class="home-demo__item">
              <img src={coca} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Clients;
