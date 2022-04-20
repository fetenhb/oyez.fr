import React from "react";
import "./Progress.scss";
const Progress = () => {
  return (
    <div className="container">
      <div className="percentage " data-percentage="96">
        <div className="prog-label" style={{ width: "96%" }}>
          <span className="label">
            Des vendeurs se sentent perçus plus positivement depuis qu’ils sont
            équipés de tablette
          </span>
          <span className="percent"></span>
        </div>
        <div className="animation-progress">
          <div className="animation-bar"></div>
        </div>
      </div>
      <div className="percentage " data-percentage="72">
        <div className="prog-label" style={{ width: "72%" }}>
          <span className="label">
            Estiment que la tablette leur permet de vendre plus
          </span>
          <span className="percent"></span>
        </div>
        <div className="animation-progress">
          <div className="animation-bar"></div>
        </div>
      </div>
      <div className="percentage " data-percentage="92">
        <div className="prog-label" style={{ width: "92%" }}>
          <span className="label">
            Des vendeurs estiment les clients davantage satisfaits
          </span>
          <span className="percent"></span>
        </div>
        <div className="animation-progress">
          <div className="animation-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
