import React from "react";
import styling from "./footer.module.css";

const Footer=()=>{
return(
    <div className={styling.copyright}>
      <div className={styling.up}  onClick={() => window.scrollTo({top:0,left:0, behavior:"smooth"})}>
        <a href="index.html">
          <i class="fas fa-chevron-up"></i>
        </a>
       
      </div>
      <p>&copy; 2020 Mahaboob Pasha M</p>
    </div>
  
)
}
export default Footer;