import React from "react";
import styling from "./projectcard.module.css";

const ProjectCards =(props)=>{
    return(
    
            <div class={styling.mainbox}>
            <div class={styling.imgbox}>
                <img src={props.src} alt={props.alt}/>
            </div>
            <div class={styling.details}>
                <h3>Details</h3>
                <div class={styling.info}>
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                </div>
            </div>
        </div>
    

    )
}
export default ProjectCards;