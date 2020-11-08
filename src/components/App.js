import React from "react";
import AirPollution from "./application/AirPollution";
import {BrowserRouter as Router} from "react-router-dom";
import {AirlyDataProvider} from "./session/context";

function App() {
  return (
    <>
      <AirlyDataProvider>
        <Router>
          <AirPollution/>
        </Router>
      </AirlyDataProvider>
    </>
  );
}

export default App;
