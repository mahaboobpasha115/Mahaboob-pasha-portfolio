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



function App() {
  return (
    <div className={styling.conatiner}>
      <Navbar/>
 <Homebanner/>
<About/>
<Heading h1="Education" h6="Where i have studied"/>
<EducationCard/>
<Heading h1="Skills" h6="Technologies i am good at"/>
<Skills/>
<Heading h1="Projects" h6="some of the projects done by me"/>
<Project/>
<Heading h1="Hobbies" h6="What i do at free time"/>

<Hobbies/>
<Heading h1="Contact me" h6="Let us work together"/>

<Contact/>


<Footer/>
    </div>
  );
}

export default App;
