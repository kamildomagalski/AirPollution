import React from 'react';
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppSearch from "./AppSearch";
import CityResult from "./CityResult";

function AirPollution() {
  return (
    <>
      {/*<CssBaseline/>*/}
      <Header/>
      <AppSearch/>
      <CityResult/>
    </>
  );
}

export default AirPollution;