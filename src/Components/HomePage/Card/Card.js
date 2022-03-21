import React from "react";
import { Technologies, Services, Expertises } from "./Data";
import "./Card.scss";
import ButtonPlusBlack from "../Button/ButtonPlusBlack";
import { Separation } from "../Separation/Separation";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="container">
      {props.content === "expertise" ? (
        <div>
          <h1 className="title">Expertises</h1>
          <div className="card__container">
            {Expertises.map((exp) => (
              <>
                {" "}
                <div className="card">
                  {" "}
                  <div className="card__content">
                    <h4 className="card__header">
                      {exp.title.split(" ")[0]}
                      <br />
                      {exp.title.split(" ")[1]}
                    </h4>
                    <p className="card__info">{exp.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Link to="/uni-retail-marketing-data-expertise-groupe-oyez">
            <ButtonPlusBlack />
          </Link>
          <Separation theme="#d43a75" />{" "}
        </div>
      ) : props.content === "service" ? (
        <div>
          <h1 className="title">Services</h1>
          <div className="card__container">
            {Services.map((exp) => (
              <>
                {" "}
                <div className="card">
                  {" "}
                  <div className="card__content">
                    <h4 className="card__header">
                      {exp.title}
                      <br />
                    </h4>
                    <p className="card__info">{exp.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Link to="/engineering-consulting-technologie-creativite-metiers-groupe-oyez">
            {" "}
            <ButtonPlusBlack />
          </Link>
          <Separation theme="#e1ab33" />{" "}
        </div>
      ) : (
        <div>
          <h1 className="title">Technologies</h1>
          <div className="card__container">
            {Technologies.map((exp) => (
              <>
                {" "}
                <div className="card">
                  {" "}
                  <div className="card__content">
                    <h4 className="card__header">
                      {exp.title.split(" ")[0]}
                      <br />
                      {exp.title.split(" ")[1]}
                    </h4>
                    <p className="card__info">{exp.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <ButtonPlusBlack />
          <Separation theme="#0070c7" />{" "}
        </div>
      )}
    </div>
  );
};

export default Card;
