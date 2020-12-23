import React from "react";
import styling from "./about.module.css";

const About=()=>{
return(
    <div id="about" className={styling.wrapper}>
    <div className={styling.container}>
      <div className={styling.profile}>
        <img src="myimage.jpeg" alt="profile-pic"/ >
      </div>
      <div className={styling.details}>
<div className={styling.heading}>
<h1>About</h1>
            <h6>Myself</h6>
</div>
<div className={styling.para}>
<p>
            My name is MAHABOOB PASHA M, lives in Bangalore. Basically I studied Civil Engineering but my interest
            in coding made me to learn coding. I like to do every work with
            complete passion and dedication. 
            I will always be eager to learn new things, the things i don't know
            and also to teach the things i know to others.
          </p>
</div>
      </div>
    </div>
  </div>

)
}
export default About;