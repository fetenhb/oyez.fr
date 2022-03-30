import React from "react";
import carouselDartyCuisine01 from "../../../../../Images/carousel_darty-cuisine01.jpg";
import carouselDartyCuisine03 from "../../../../../Images/carousel_darty-cuisine03.jpg";

const SlideImage = () => {
  return (
    <div>
      <div class="slider">
        <input checked id="slide-1" name="active" type="radio" />
        <div
          class="slide"
          data-content="1"
          style={{ backgroundImage: `url(${carouselDartyCuisine01})` }}
        ></div>
        <nav class="navSlide">
          <label class="prev" for="slide-2"></label>
          <label class="next" for="slide-2"></label>
        </nav>

        <input id="slide-2" name="active" type="radio" />
        <div
          class="slide"
          data-content="2"
          style={{ backgroundImage: `url(${carouselDartyCuisine03})` }}
        ></div>
        <nav class="navSlide">
          <label class="prev " for="slide-1"></label>
          <label class="next " for="slide-1"></label>
        </nav>
      </div>
    </div>
  );
};

export default SlideImage;
