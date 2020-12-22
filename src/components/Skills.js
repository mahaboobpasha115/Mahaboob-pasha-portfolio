import React from "react";
import styling from "./skills.module.css";
import SkillsCard from "./SkillsCard";

const Skills =()=>{
    return(
        <div className={styling.container}>
<SkillsCard icons="fab fa-html5" h2="HTML"/>
<SkillsCard icons="fab fa-css3-alt" h2="CSS"/>
<SkillsCard icons="fab fa-js-square" h2="JAVASCRIPT"/>
<SkillsCard icons="fab fa-react" h2="REACT.JS"/>
<SkillsCard icons="fab fa-git-alt" h2="GIT"/>
<SkillsCard icons="fab fa-github" h2="GITHUB"/>

</div>
    )
}
export default Skills;