import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/HomePage/Home";
import PageContact from "./Components/PageContact/PageContact";
import PageExpertises from "./Components/PageExpertises/PageExpertises";
import PageFormation from "./Components/PageFormation/PageFormation";
import PageMedias from "./Components/PageMedias/PageMedias";
import PageMethode from "./Components/PageMethode/PageMethode";
import PageProjects from "./Components/PageProjects/PageProjects";
import BMW from "./Components/PageProjects/ProjectsPages/BMW/BMW";
import BNP from "./Components/PageProjects/ProjectsPages/BNP/BNP";
import Boucheron from "./Components/PageProjects/ProjectsPages/Boucheron/Boucheron";
import But from "./Components/PageProjects/ProjectsPages/But/But";
import Carrefour from "./Components/PageProjects/ProjectsPages/Carrefour/Carrefour";
import DaminosPizza from "./Components/PageProjects/ProjectsPages/DaminosPizza/DaminosPizza";
import Darty from "./Components/PageProjects/ProjectsPages/Darty/Darty";
import DartyCuisine from "./Components/PageProjects/ProjectsPages/DartyCuisine/DartyCuisine";
import Heineken from "./Components/PageProjects/ProjectsPages/Heineken/Heineken";
import Infiniti from "./Components/PageProjects/ProjectsPages/Infiniti/Infiniti";
import LCL from "./Components/PageProjects/ProjectsPages/LCL/LCL";
import MaisonsMonde from "./Components/PageProjects/ProjectsPages/MaisonsMonde/MaisonsMonde";
import Moet from "./Components/PageProjects/ProjectsPages/Moet/Moet";
import SaintLaurent from "./Components/PageProjects/ProjectsPages/SaintLaurent/SaintLaurent";

import PageServices from "./Components/PageServices/PageServices";
import PageTechnologies from "./Components/PageTechnologies/PageTechnologies";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />

        <Route
          path="/uni-retail-marketing-data-expertise-groupe-oyez"
          element={<PageExpertises />}
        />
        <Route
          path="/engineering-consulting-technologie-creativite-metiers-groupe-oyez"
          element={<PageServices />}
        />
        <Route path="/medias" element={<PageMedias />} />
        <Route path="/projets-groupe-oyez" element={<PageProjects />} />
        <Route path="/methode-groupe-oyez" element={<PageMethode />} />
        <Route
          path="/technologie-groupe-oyez-2"
          element={<PageTechnologies />}
        />
        <Route
          path="/formation-regie-tunis-groupe-oyez"
          element={<PageFormation />}
        />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/projets-groupe-oyez/infiniti" element={<Infiniti />} />
        <Route path="/projets-groupe-oyez/carrefour" element={<Carrefour />} />

        <Route
          path="/projets-groupe-oyez/dominos-pizza"
          element={<DaminosPizza />}
        />
        <Route path="/projets-groupe-oyez/moet-hennessy" element={<Moet />} />
        <Route
          path="/projets-groupe-oyez/maisons-du-monde"
          element={<MaisonsMonde />}
        />
        <Route path="/projets-groupe-oyez/heineken" element={<Heineken />} />
        <Route
          path="/projets-groupe-oyez/retail-vendeurs-connectes-commerce-unifie"
          element={<Darty />}
        />
        <Route path="/projets-groupe-oyez/boucheron" element={<Boucheron />} />
        <Route path="/projets-groupe-oyez/lcl" element={<LCL />} />

        <Route path="/projets-groupe-oyez/bmw" element={<BMW />} />
        <Route path="/projets-groupe-oyez/but" element={<But />} />
        <Route path="/projets-groupe-oyez/bnp-paribas" element={<BNP />} />
        <Route
          path="/projets-groupe-oyez/saint-laurent"
          element={<SaintLaurent />}
        />
        <Route
          path="/projets-groupe-oyez/murale-darty-cuisine"
          element={<DartyCuisine />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
