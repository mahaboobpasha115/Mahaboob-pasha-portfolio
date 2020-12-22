import React from "react";
import styling from "./skillscard.module.css";

const SkillsCard =(props)=>{
    return(
        <div className={styling.container}>
        <div class={styling.card}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styling.content}>
           
            <div class={styling.icon}>
            <i class={props.icons}></i>
            </div>
            <h2>{props.h2}</h2>
        
            </div>
        </div>
        
        </div>
            )
}
export default SkillsCard;