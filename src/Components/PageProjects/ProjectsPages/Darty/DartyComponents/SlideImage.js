import React from "react";
import "./SlideImage.scss";
import dartyCover from "../../../../../Images/darty-cover.jpg";
import TPE from "../../../../../Images/TPE_light-darty.jpg";

const SlideImage = () => {
  return (
    <div>
      <div class="slider">
        <input checked id="slide-1" name="active" type="radio" />
        <div
          class="slide"
          data-content="1"
          style={{ backgroundImage: `url(${dartyCover})` }}
        ></div>
        <nav class="navSlide">
          <label class="prev" for="slide-2"></label>
          <label class="next" for="slide-2"></label>
        </nav>

        <input id="slide-2" name="active" type="radio" />
        <div
          class="slide"
          data-content="2"
          style={{ backgroundImage: `url(${TPE})` }}
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
