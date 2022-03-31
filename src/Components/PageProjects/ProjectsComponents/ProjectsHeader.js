import React, { useRef } from "react";
import "./ProjectsContent.scss";

const ProjectsHeader = () => {
  return (
    <div>
      {/* <iframe
        id="mbYTP_playmovie"
        class="playerBox"npm 
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        className="vid"
        src="https://www.youtube.com/embed/XjxDfh_h8is?autoplay=0&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_bgndVideo&origin=https%3A%2F%2Fwww.oyez.fr&allowfullscreen=true&wmode=transparent&iv_load_policy=3&html5=1&widgetid=2"
      ></iframe>
      <div className="head"></div>
      <button style={{ marginTop: "700px" }} id="play" class="btn">
        Play Me
      </button> */}

      <div class="video-background">
        <div class="video-foreground">
          <iframe
            src="https://www.youtube.com/embed/XjxDfh_h8is?playlist=XjxDfh_h8is&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&showinfo=0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* 
      <svg class="defs">
        <defs>
          <path
            id="pause-button-shape"
            d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M21,33.064c0,2.201-1.688,4-3.75,4
	s-3.75-1.799-3.75-4V14.934c0-2.199,1.688-4,3.75-4s3.75,1.801,3.75,4V33.064z M34.5,33.064c0,2.201-1.688,4-3.75,4
	s-3.75-1.799-3.75-4V14.934c0-2.199,1.688-4,3.75-4s3.75,1.801,3.75,4V33.064z"
          />
          <path
            id="play-button-shape"
            d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M31.672,26.828l-9.344,9.344
	C20.771,37.729,19.5,37.2,19.5,35V13c0-2.2,1.271-2.729,2.828-1.172l9.344,9.344C33.229,22.729,33.229,25.271,31.672,26.828z"
          />
        </defs>
      </svg> */}

      {/* <div class="buttons">
        <svg class="button" id="play-button"></svg>
        <svg class="button" id="pause-button"></svg>
      </div> */}

      <button style={{ marginTop: "700px" }} id="play-button" class="play">
        <i class="fa fa-play"></i>
      </button>
    </div>
  );
};

export default ProjectsHeader;
