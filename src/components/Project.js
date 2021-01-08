import React from "react";
import styling from "./project.module.css";
import ProjectCards from "./ProjectCards";


const Project =(props)=>{
    return(
<div id={props.id} className={styling.container}>
<ProjectCards src="adaya.png" alt="adaya" h3="Adaya" p="Adaya is a growing business model by Adaya Pvt Ltd with an aim of delivering 100% fresh fruits, vegetables and food grains to the customer's place directly from the farmers across Karnataka." href="https://adya.netlify.app"/>
<ProjectCards src="access.png" alt="access" h3="access" p="access is the institution started to make tech Education accessible in India. It offers both offline as well as online classes in which students learn coding from basics."  href="https://www.access.org.in"/>
<ProjectCards src="clinics.png" alt="clinics" h3="Health+" p="Health+  is  one place for all your queries related to clinics.It shows the hospitals near you ,address of the hospitals and Doctors working in that hospital." href="https://clinic-project.netlify.app"/>
<ProjectCards src="breakingbad.png" alt="breaking" h3="Breaking bad" p="It shows all the characters of Breaking-bad , This is the project done using fetch api" href="https://breaking-bad-characters-api.netlify.app"/>
<ProjectCards src="converter.png" alt="converter" h3="Converter" p="This web app converts images from one format to other format and images to pdf as well" href="https://image-converter-other-formats.netlify.app/"/>
<ProjectCards src="stop-change.png" alt="stop" h3="Stop climate change" p="Stop climate change is a organisation which aims at creating sustainable work for women in developing nations while helping to slow climate change. " href="https://stop-climate-changes.netlify.app"/>

</div>
    )
}
export default Project;