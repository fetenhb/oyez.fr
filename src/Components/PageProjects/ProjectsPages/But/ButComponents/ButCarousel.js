import React from "react";
import "./../../LCL/LclComponents/LclCarousel.scss";
import produit1 from "../../../../../Images/produit1.jpg";
import produit2 from "../../../../../Images/produit2.jpg";
import produit3 from "../../../../../Images/produit3.jpg";
import produit4 from "../../../../../Images/produit4.jpg";
import produit5 from "../../../../../Images/produit5.jpg";
import produit6 from "../../../../../Images/produit6.jpg";
import produit7 from "../../../../../Images/produit7.jpg";
import produit8 from "../../../../../Images/produit8.jpg";

import OwlCarousel from "react-owl-carousel";
const ButCarousel = () => {
  return (
    <div>
      <OwlCarousel
        stagePadding={400}
        loop={true}
        margin={50}
        items={1}
        dots={true}
        navText={[
          "<div className='nav-btn prev-slide'> </div><div className='arrow-prev-line'></div>",
          "<div className='nav-btn next-slide'></div><div className='arrow-next-line'></div>",
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
        className="owl-carousel"
      >
        <div className="lclItem">
          <a href="#">
            <img src={produit1} alt="" />
          </a>
        </div>
        <div className="lclItem black">
          <a href="#">
            <img src={produit2} alt="" />
          </a>
        </div>
        <div className="lclItem">
          <a href="#">
            <img src={produit3} alt="" />
          </a>
        </div>
        <div className="lclItem black">
          <a href="#">
            <img src={produit4} alt="" />
          </a>
        </div>
        <div className="lclItem">
          <a href="#">
            <img src={produit5} alt="" />
          </a>
        </div>
        <div className="lclItem black">
          <a href="#">
            <img src={produit6} alt="" />
          </a>
        </div>{" "}
        <div className="lclItem black">
          <a href="#">
            <img src={produit7} alt="" />
          </a>
        </div>{" "}
        <div className="lclItem black">
          <a href="#">
            <img src={produit8} alt="" />
          </a>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default ButCarousel;
