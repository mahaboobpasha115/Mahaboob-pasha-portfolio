import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items:center ;
 padding-left:1em;
 max-width:1200px;
 margin:0 auto;
 

  li {
    font-size:2em;
    margin-bottom:0.5em;
  }
  li img{
    display:none;
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
  }

  @media(min-width:768px){

      li{
          color:white;
          margin-top:15px;
          margin-right:25px;
          font-size:20px;

      }
      li img{
        display:block;
        width:60px;
        height:55px;
        object-fit:contain;
      }
      #contact{
        display:none;
      }
    
  }
  @media(min-width:1024px){

li{
    color:white;
    margin-top:15px;
    margin-right:35px;
    font-size:25px;


}
}
@media(min-width:1200px){

li{
  
    margin-top:20px;
    margin-right:40px;
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
      <li><img src="MP.jpeg" alt="logo"/></li>
     <li>Home</li>
     <li>About</li>
     <li>Education</li>
     <li>Skills</li>
     <li>Projects</li>
     <li>Hobbies</li>
     <li>Contact</li>
    </Ul>
  )
}

export default RightNav;
