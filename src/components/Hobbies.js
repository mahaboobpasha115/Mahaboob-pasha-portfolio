import React from "react";
import styling from "./hobbies.module.css";
import HobbiesCard from "./HobbiesCard";

const Hobbies=()=>{
    return (
      <div className={styling.container}>
<HobbiesCard i="fas fa-gamepad" h2="Games"/>
<HobbiesCard i="fas fa-music" h2="Singing"/>
<HobbiesCard i="fas fa-baseball-ball" h2="Cricket"/>
<HobbiesCard i="fas fa-film" h2="Movies"/>
      </div>
    )
}

export default Hobbies;