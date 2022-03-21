import React from "react";
import styled from "styled-components";
import realisations from "../../../Images/realisations.jpg";
import tunis from "../../../Images/tunis.jpg";

import { Button } from "../Button/ButtonPlus";

const ProjectFormation = (props) => {
  const Project = styled.div`
    background-image: ${props.project
      ? `url(${realisations})`
      : `url(${tunis})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 100px;
    padding-top: 30px;
    padding-bottom: 30px;
    color: white;

    p {
      color: white;
      font-size: 20px;
      margin-bottom: 10px;
      font-family: Manrope !important;
    }
  `;
  return (
    <div>
      {/* {props.project ? <p>project</p> : <p>formation</p>} */}
      <Project>
        <div className="container">
          {props.project ? (
            <>
              {" "}
              <h1> #PROJETS #STUDYCASE</h1>{" "}
              <p>
                Magasins connectés, e-commerce, marketing expérientiel,
                marketing conversationnel…
              </p>
            </>
          ) : (
            <>
              {" "}
              <h1> #TUNIS #DEVELOPPEMENT #FORMATION</h1>
              <p>
                Vous cherchez à constituer vos équipes développeurs pour vos
                projets ? Les candidats se font rares ?
              </p>
            </>
          )}

          <Button theme={{ wh: "black", bl: "#ffffff" }}> En savoir +</Button>
        </div>
      </Project>
    </div>
  );
};

export default ProjectFormation;
