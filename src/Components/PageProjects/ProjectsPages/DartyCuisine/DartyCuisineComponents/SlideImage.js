import React from "react";
import carouselDartyCuisine01 from "../../../../../Images/carousel_darty-cuisine01.jpg";
import carouselDartyCuisine03 from "../../../../../Images/carousel_darty-cuisine03.jpg";

const SlideImage = () => {
  return (
    <div>
      <div className="slider">
        <input checked id="slide-1" name="active" type="radio" />
        <div
          className="slide"
          data-content="1"
          style={{ backgroundImage: `url(${carouselDartyCuisine01})` }}
        ></div>
        <nav className="navSlide">
          <label className="prev" for="slide-2"></label>
          <label className="next" for="slide-2"></label>
        </nav>

        <input id="slide-2" name="active" type="radio" />
        <div
          className="slide"
          data-content="2"
          style={{ backgroundImage: `url(${carouselDartyCuisine03})` }}
        ></div>
        <nav className="navSlide">
          <label className="prev " for="slide-1"></label>
          <label className="next " for="slide-1"></label>
        </nav>
      </div>
    </div>
  );
};

export default SlideImage;
