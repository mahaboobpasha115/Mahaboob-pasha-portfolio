import React from "react";
import styling from "./footer.module.css";

const Footer=()=>{
return(
    <div className={styling.copyright}>
      <div className={styling.up}>
        <a href="index.html">
          <i class="fas fa-chevron-up"></i>
        </a>
       
      </div>
      <p>&copy; 2020 Mahaboob Pasha M</p>
    </div>
  
)
}
export default Footer;