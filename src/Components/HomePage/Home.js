import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import CardExpertises from "./Card/Card";
import Info from "./Info/Info";
import Clients from "./Clients/Clients";
import ProjectFormation from "./ProjectFormation/ProjectFormation";
import Methode from "./Methode/Methode";
import Partenaires from "./Partenaires/Partenaires";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CardExpertises content={"expertise"} />
      <Info />
      <Clients />
      <ProjectFormation project={true} />
      <CardExpertises content={"service"} />
      <Methode />
      <ProjectFormation project={false} />
      <CardExpertises content={"technologie"} />
      <Partenaires />
      <Footer />
    </div>
  );
};

export default Home;
