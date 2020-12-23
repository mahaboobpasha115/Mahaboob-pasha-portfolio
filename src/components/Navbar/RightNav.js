import styled from 'styled-components';
import { HashLink as Link} from "react-router-hash-link";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items:center ;
 padding-left:1em;
 max-width:1440px;
 margin:0 auto;


  li {
    font-size:2em;
    margin-bottom:0.5em;
    
  }
 li:hover{
   cursor: pointer;
 }

  @media (max-width: 767px) {
    flex-flow: column nowrap;
    background-color:#011828;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 80vw;
    padding-top: 1rem;
    transition: transform 0.3s  ease-in-out;

    li {
      color: #fff;
    }
    li:hover{
      background: linear-gradient(to top, #ffe838, #fd57bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

    }
    li:hover{
   cursor: pointer;
 }
  }

  @media(min-width:768px){

      li{
          color:white;
          margin-top:15px;
          margin-right:25px;
          font-size:20px;

      }
      li:hover{
        background: linear-gradient(to top, #ffe838, #fd57bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

    
    }

      #contact{
        display:none;
      }
    
  }
  @media(min-width:1024px){

li{
    color:white;
    margin-top:15px;
    margin-right:50px;
    font-size:25px;


}
}
@media(min-width:1200px){

li{
  
    margin-top:20px;
    margin-right:55px;
    font-size:30px;

}
}
@media(min-width:1440px){
 
li{
  
    margin-top:20px;
    margin-right:50px;
    font-size:35px;

}
}
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link smooth to="#home">
      <li>Home</li>
      </Link>
      <Link smooth to="#about">
      <li>About</li>
      </Link>
      <Link smooth to="#education">
      <li>Education</li>
      </Link>
      <Link smooth to="#skills">
      <li>Skills</li>
      </Link>
      <Link smooth to="#projects">
      <li>Projects</li>
      </Link>
      <Link smooth to="#experience">
      <li>Experience</li>
      </Link>
      <Link smooth to="#contact">
      <li>Contact</li>
      </Link>
     
    </Ul>
  )
}

export default RightNav;
