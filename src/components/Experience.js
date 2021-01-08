import React from "react";
import styling from "./experience.module.css";
import ExperienceCards from "./ExperienceCards";

const Experience=()=>{
return(
    <div className={styling.container}>
        <ExperienceCards ha="Internship : 6 months" hb="Code-one Technologies"/>
        <ExperienceCards ha="Freelancing" hb="since oct 2020"/>
    </div>
)
}
export default Experience;