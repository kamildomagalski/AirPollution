import React from 'react';
import { Switch, Link, Route } from "react-router-dom"
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppSearch from "./AppSearch";
import CityResult from "./CityResult";

function AirPollution() {
  return (
    <>
      {/*<CssBaseline/>*/}
      <Header/>
      <Switch>
        <Route exact path="/">
          <AppSearch/>
        </Route>
        <Route path="/results">
          <CityResult/>
        </Route>
      </Switch>
    </>
  );
}

export default AirPollution;