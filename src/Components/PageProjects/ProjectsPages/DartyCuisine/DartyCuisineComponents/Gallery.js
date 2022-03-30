import React from "react";
import "../../../../../App.css";
import image1 from "../../../../../Images/images/fullscreen/1.jpg";
import image2 from "../../../../../Images/images/fullscreen/2.jpg";
import image3 from "../../../../../Images/images/fullscreen/3.jpg";
import image4 from "../../../../../Images/images/fullscreen/4.jpg";
import image5 from "../../../../../Images/images/fullscreen/5.jpg";
import image6 from "../../../../../Images/images/fullscreen/6.jpg";
import image7 from "../../../../../Images/images/fullscreen/7.jpg";
import image8 from "../../../../../Images/images/fullscreen/8.jpg";
import "./Gallery.scss";
const Gallery = () => {
  return (
    <div class="main-container">
      <ul class="gallery clearfix grid-wrapper">
        <li>
          <a
            href={image1}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image1} />
          </a>
        </li>
        <li>
          <a
            href={image2}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image2} alt="" />
          </a>
        </li>
        <li>
          <a
            href={image3}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image3} alt="" />
          </a>
        </li>
        <li>
          <a
            href={image4}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image4} alt="" />
          </a>
        </li>
        <li>
          <a
            href={image5}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image5} alt="" />
          </a>
        </li>
        <li>
          <a
            href={image6}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image6} alt="" />
          </a>
        </li>
        <li>
          <a
            href={image7}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image7} alt="" />
          </a>
        </li>
        <li>
          <a
            href={image8}
            rel="prettyPhoto[gallery2]"
            title="Darty Cuisine Retail Design Wagram"
          >
            <img src={image8} alt="" />
          </a>
        </li>
      </ul>

      <br />
      <br />
    </div>
  );
};

export default Gallery;
