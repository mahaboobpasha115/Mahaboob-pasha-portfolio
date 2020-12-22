import React from "react";
import styling from "./hobbiescard.module.css";

const HobbiesCard=(props)=>{
    return (
        <div>
          <div class={styling.hobby}>
            <div class={styling.icon}>
              <i class={props.i}></i>
            </div>
            <h2>{props.h2}</h2>
          </div>
        
        </div>
    )
}

export default HobbiesCard;