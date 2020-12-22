import React from "react";
import styling from "./heading.module.css";

const Heading =(props)=>{
    return(
        <div class={styling.heading}>
        <h1>{props.h1}</h1>
        <h6>{props.h6}</h6>
      </div>
    )
}
export default Heading;