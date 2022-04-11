import React, { useRef, useState } from "react";
import "./ProjectsContent.scss";
import vid from "../../../Images/OYEZ.mp4";
const ProjectsHeader = () => {
  const backgroundVideo = useRef(null);
  const overlay = useRef(null);
  let time = 0;
  const playVideo = () => {
    time = backgroundVideo.current.currentTime;
    backgroundVideo.current.currentTime = 0;
    overlay.current.style.visibility = "hidden";
    backgroundVideo.current.play();
  };
  const stopVideo = () => {
    backgroundVideo.current.currentTime = time;
    overlay.current.style.visibility = "visible";
    backgroundVideo.current.play();
  };

  return (
    <div style={{ height: "600px" }}>
      <video
        ref={backgroundVideo}
        id="background-video"
        autoPlay
        loop
        muted
        onClick={stopVideo}
      >
        <source src={vid} type="video/mp4" />
      </video>{" "}
      <div
        ref={overlay}
        class="overlay "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div class="clapat-caption animated light-content">
          <div class="caption-content center-center">
            <div class="play-icon" onClick={playVideo}>
              <i class="fa fa-play"></i>
            </div>
            <h1 style={{ textAlign: "left", color: "#ffffff" }}>#SHOWREEL</h1>
            <p style={{ textAlign: "left" }}>
              <span style={{ fontSize: "20px", color: "#ffffff" }}>
                <strong>
                  #TRANSFORMATION #COMMERCEUNIFIE #PHYGITAL #ECOMMERCE
                  #RELATIONCLIENT #FOCUSTECHNO #BUSINESSCASE #NOS REALISATIONS
                </strong>
              </span>
            </p>{" "}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProjectsHeader;
