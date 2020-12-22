import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  width: 100%;
  height: 4em;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color:black;
  position:relative;

position:fixed;
z-index:20;
 
`;
 const Image = styled.img`
width:5em;
height:4em;
object-fit:contain;
border-radius:100%; 
position:absolute;
left:0.3em;
top:0em;


@media(min-width:768px){
 
  display:none;
  }
 
 `;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Image src="MP.jpeg" alt="logo"/>
      </div>
      <Burger/>
    </Nav>
  )
}

export default Navbar
