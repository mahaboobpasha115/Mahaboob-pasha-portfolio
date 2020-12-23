import React from "react";
import styling from "./homebanner.module.css";

function Homebanner() {
  return (
    <div id="home" className={styling.wrapper}>
     <div className={styling.landing}>
        <h1>Mahaboob Pasha M</h1>
        <h6>Front-end developer</h6>
      </div>
    </div>
  );
}

export default Homebanner;