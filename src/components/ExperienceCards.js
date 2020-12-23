import React from "react";
import styling from "./experiencecards.module.css";

const ExperienceCards=(props)=>{
return(
    <div className={styling.cards}>
        <h2>{props.ha}</h2>
        <h2>{props.hb}</h2>
    </div>
)
}
export default ExperienceCards;