import styled from "styled-components";
import dominos01bis from "../../../Images/dominos01bis.jpg";
import infiniti02 from "../../../Images/infiniti02.jpg";

export const Header = styled.div`
  background-color: ${(props) => props.bgc};
  height: 361px;
  width: 100%;
  font-family: Manrope !important;
  h1 {
    font-size: 50px;
    color: #ffffff;
    margin: 0;
    vertical-align: middle;
  }
`;
export const P = styled.p`
margin-top: 10px;
font-size: 24px;
font-family: Manrope !important;
color: ${(props) => props.theme};
  }

`;
export const SectionOneStyle = styled.div`
  padding-top: 115px;
  padding-bottom: 100px;
  padding-left: 15px;
  h5 {
    color: #000000;
    font-size: 50px;

    margin: 0;
  }
  p {
    font-weight: 400;
    color: #010101;
    font-size: 24px;
    line-height: 30pt;
    font-family: "Montserrat light";
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ul {
    padding-left: 20px;
  }
`;
export const MiniParagraph = styled.div`
  color: #000000;
  font-size: 18px;
  margin-top: 20px;
  font-family: "Montserrat light";
  margin-bottom: 15px;
  line-height: 25px;
`;
export const Paragraph = styled.div`
  color: #010101;
  font-size: 24px;
  line-height: 30pt;
  font-family: "Montserrat light";
  margin-bottom: 10px;
  margin-top: 20px;
  a {
    text-decoration: none;
    font-weight: 400;
    color: black;
    font-family: "Circular Std";
  }
`;
export const SectionTitle = styled.div`
  color: #000000;
  font-size: 50px;
  margin-top: 70px;
`;
export const MiniTitle = styled.div`
  color: #000000;
  font-size: 22px;
  margin-bottom: 20px;
  line-height: 25px;
  margin-top: 50px;
`;
export const SubTitle = styled.div`
  color: #000000;
  font-size: 38px;
  margin-bottom: 20px;
  line-height: 40px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 80px;
`;
export const Column = styled.div`
  width: 30%;
  padding: 0 15px;
`;

export const PizzaImg = styled.div`
  background-image: url(${dominos01bis});
  background-size: cover;

  width: 100%;
  height: 500px;
`;
export const TwoColumn = styled.div`
  width: 50%;
  padding: 0 15px;
`;
export const InfinitiImg = styled.div`
  background-image: url(${infiniti02});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-bottom: 100px;
  width: 100%;
  height: 600px;
`;
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
export const Projet = styled.div`
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  background-color: #1f1447 !important;
`;
export const SectionProjet = styled.div`
  font-size: 38px;
  color: #ffffff;
`;
export const ImgColumn = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
`;
export const BackColumn = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center center;

  height: 100%;
  width: 100%;
`;
export const EspaceVide = styled.div`
  height: 100px;
`;
export const Lien = styled.a`
  color: rgb(0, 0, 0);
  outline: 0px;
  font-weight: 400 !important;
  font-family: "Circular Std" !important;
`;
export const Subject = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
  text-align: center;
  letter-spacing: 3px;
  color: #999;
  text-transform: uppercase;
  font-family: "Montserrat light";
  color: #000000;
  font-size: 18px;
`;
// export const Counters = styled.div`
//   line-height: 48px;
//   margin-bottom: 5px;
//   color: #000;
//   font-size: 48px;
//   text-align: center;
// `;
