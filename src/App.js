import React, { Fragment, useState } from "react";
import Clients from "./Components/Clients/Clients";
import CardExpertises from "./Components/Card/Card";

import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import ProjectFormation from "./Components/ProjectFormation/ProjectFormation";
import Methode from "./Components/Methode/Methode";
import Partenaires from "./Components/Partenaires/Partenaires";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <div style={{ height: "800px" }}></div> */}
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
    </Fragment>
  );
}

export default App;
