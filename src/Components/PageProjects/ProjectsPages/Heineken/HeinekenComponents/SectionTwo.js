import React from "react";
import { TwoColumn, MiniParagraph, SubTitle, Row } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Row className="container">
      <TwoColumn>
        <SubTitle>
          <span>
            {" "}
            <strong>Production de contenus</strong>
          </span>{" "}
        </SubTitle>
        <MiniParagraph>
          <ul>
            <li>
              <strong>
                {" "}
                5 templates HTML5 permettent de varier et personnaliser les
                différents contenus animés.
              </strong>
            </li>
            <li>
              {" "}
              <strong>
                1 jingle assure lien et respiration entre les contenus.{" "}
              </strong>
            </li>
          </ul>
        </MiniParagraph>
      </TwoColumn>
      <TwoColumn>
        <SubTitle>
          {" "}
          <strong>Solution d’administration de contenus</strong>
        </SubTitle>
        <MiniParagraph>
          <ul>
            <li>
              <strong>
                {" "}
                Le point de vente peut programmer et actualiser ses contenus
                simplement de façon autonome.
              </strong>
            </li>
          </ul>
        </MiniParagraph>
      </TwoColumn>
    </Row>
  );
};

export default SectionTwo;
