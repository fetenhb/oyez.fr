import React from "react";
import "./LclCarousel.scss";
import lcl150 from "../../../../../Images/Le19LCL-150.jpg";
import lcl210 from "../../../../../Images/Le19LCL-210.jpg";
import lcl134 from "../../../../../Images/Le19LCL-134.jpg";
import lcl096 from "../../../../../Images/Le19LCL-096.jpg";
import lcl052 from "../../../../../Images/Le19LCL-052.jpg";
import lcl042 from "../../../../../Images/Le19LCL-042.jpg";
import OwlCarousel from "react-owl-carousel";

const LclCarousel = () => {
  return (
    <div>
      <OwlCarousel
        stagePadding={400}
        loop={true}
        margin={50}
        items={1}
        dots={true}
        navText={[
          "<div class='nav-btn prev-slide'> </div><div class='arrow-prev-line'></div>",
          "<div class='nav-btn next-slide'></div><div class='arrow-next-line'></div>",
        ]}
        nav={true}
        responsive={{
          0: {
            items: 1,
            stagePadding: 60,
          },
          600: {
            items: 1,
            stagePadding: 100,
          },
          1000: {
            items: 1,
            stagePadding: 200,
          },
          1200: {
            items: 1,
            stagePadding: 250,
          },
          1400: {
            items: 1,
            stagePadding: 400,
          },
          1600: {
            items: 1,
            stagePadding: 400,
          },
          1800: {
            items: 1,
            stagePadding: 400,
          },
        }}
        class="owl-carousel"
      >
        <div class="lclItem">
          <a href="#">
            <img src={lcl096} alt="" />
          </a>
        </div>
        <div class="lclItem black">
          <a href="#">
            <img src={lcl042} alt="" />
          </a>
        </div>
        <div class="lclItem">
          <a href="#">
            <img src={lcl052} alt="" />
          </a>
        </div>
        <div class="lclItem black">
          <a href="#">
            <img src={lcl134} alt="" />
          </a>
        </div>
        <div class="lclItem">
          <a href="#">
            <img src={lcl150} alt="" />
          </a>
        </div>
        <div class="lclItem black">
          <a href="#">
            <img src={lcl210} alt="" />
          </a>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default LclCarousel;
