import React from "react";
import styling from "./project.module.css";
import ProjectCards from "./ProjectCards";


const Project =()=>{
    return(
<div className={styling.container}>
<ProjectCards src="adaya.png" alt="adaya" h3="Adaya" p=""/>
<ProjectCards src="access.png" alt="access" h3="access" p=""/>
<ProjectCards src="clinics.png" alt="clinics" h3="Health+" p=""/>
<ProjectCards src="breakingbad.png" alt="breaking" h3="Breaking bad" p=""/>
<ProjectCards src="portfolio.png" alt="portfolio" h3="Portfolio" p=""/>
<ProjectCards src="stop-change.png" alt="stop" h3="Stop climate change" p=""/>

</div>
    )
}
export default Project;