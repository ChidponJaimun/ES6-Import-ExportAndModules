import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math.jsx"; //this way for faster
// import pi2, { doublePi, triplePi } from "./math.jsx"; prefer this way for esy error checking.

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
