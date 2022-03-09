import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/HomePage/Home";
import PageExpertises from "./Components/PageExpertises/PageExpertises";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />

        <Route
          path="/uni-retail-marketing-data-expertise-groupe-oyez"
          element={<PageExpertises />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
