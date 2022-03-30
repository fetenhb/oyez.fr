import React from "react";
import "./Progress.scss";
const Progress = () => {
  return (
    <div className="container">
      <div class="percentage " data-percentage="96">
        <div class="prog-label" style={{ width: "96%" }}>
          <span className="label">
            Des vendeurs se sentent perçus plus positivement depuis qu’ils sont
            équipés de tablette
          </span>
          <span className="percent"></span>
        </div>
        <div class="animation-progress">
          <div class="animation-bar"></div>
        </div>
      </div>
      <div class="percentage " data-percentage="72">
        <div class="prog-label" style={{ width: "72%" }}>
          <span className="label">
            Estiment que la tablette leur permet de vendre plus
          </span>
          <span className="percent"></span>
        </div>
        <div class="animation-progress">
          <div class="animation-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
