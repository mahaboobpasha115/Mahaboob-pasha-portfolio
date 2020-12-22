import React from "react";
import styling from "./educationcard.module.css";

const EducationCard =()=>{
    return(
      
      <div className={styling.container}>
        <div className={styling.box}>
        <div  className={styling.glass}></div>
        <div className={styling.content}>
          <h1>SSLC</h1>
          <p>Saroja Memorial English School</p>
          <h2>90%</h2>
        </div>
      </div>
      <div className={styling.box}>
        <div  className={styling.glass}></div>
        <div className={styling.content}>
        <h1>PUC</h1>
          <p>Mangalore Independent PU College</p>
          <h2>83%</h2>
        </div>
      </div>
      <div className={styling.box}>
        <div  className={styling.glass}></div>
        <div className={styling.content}>
        <h1>BE</h1>
          <p>Ghousia College of Engineering</p>
          <h2>6.5</h2>
        </div>
      </div>
      </div>
  
     

  )
}
export default EducationCard;