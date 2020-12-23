import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  width: 100%;
  height: 4em;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background :#16162d;
  position:relative;

position:fixed;
z-index:20;
 
`;

 
 

const Navbar = () => {
  return (
    <Nav>
      <Burger/>
    </Nav>
  )
}

export default Navbar
