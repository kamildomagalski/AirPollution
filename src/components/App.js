import React from "react";
import AirPollution from "./application/AirPollution";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <AirPollution/>
      </Router>
    </>
  );
}

export default App;
