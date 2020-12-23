import React from "react";
import styling from "./contact.module.css";

const Contact =()=>{
    return(
        <div id="contact" className={styling.container}>
           <ul className={styling.icons}>
           <li className={styling.phone}>
           <a href="tel:+919611720386" className={styling.phone}><i class="fas fa-phone-alt"></i></a>
               </li>
               <li className={styling.whatsapp}>
               <a href="https://wa.me/+919611720386" className={styling.whatsapp}><i class="fab fa-whatsapp"></i></a>

                   </li>
               <li className={styling.insta}>
               <a href="https://instagram.com/Pashamahaboob98" className={styling.insta}><i class="fab fa-instagram"></i></a>
                   </li>
               <li className={styling.linkedin}>
               <a href="https://www.linkedin.com/in/mahaboob-pasha-m-63960a1a4" className={styling.linkedin}><i class="fab fa-linkedin-in"></i></a>
               </li>
               <li className={styling.mail}>
               <a href="mailto:mahaboobpasha115@gmail.com" target="blank" className={styling.mail}><i class="fas fa-envelope"></i></a>
                   </li>
               <li className={styling.github}>
               <a href="https://www.github.com/mahaboobpasha115" className={styling.github}><i class="fab fa-github"></i></a>
                   </li>
               

           </ul>
        </div>
    )
}
export default Contact;