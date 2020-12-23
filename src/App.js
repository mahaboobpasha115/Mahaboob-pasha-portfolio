import React from "react";
import styling from "./home.module.css";
import About from "./components/About";
import EducationCard from "./components/EducationCard";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Homebanner from "./components/Homebanner";
import Heading from "./components/Heading";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import Experience from "./components/Experience";



function App() {
  return (
    <div className={styling.conatiner}>
      <Navbar/>
 <Homebanner/>
<About/>
<Heading id="education" h1="Education" h6="Where i have studied"/>
<EducationCard/>
<Heading id="skills"  h1="Skills" h6="Technologies i am good at"/>
<Skills/>
<Heading id="projects" h1="Projects" h6="some of the projects done by me"/>
<Project/>
<Heading id="experience" h1="Experience" h6="experience in this field"/>
<Experience/>
<Heading id="hobbies" h1="Hobbies" h6="What i do at free time"/>

<Hobbies/>

<Heading h1="Contact me" h6="Let us work together"/>

<Contact/>


<Footer/>
    </div>
  );
}

export default App;
