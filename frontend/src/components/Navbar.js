import Image from 'next/image';
import styled, { StyleSheetManager } from 'styled-components';
import Link from 'next/link';
import Logo from '../../public/Logo.png';
import { imageConfigDefault } from 'next/dist/server/image-config';


const Nav = styled.nav`
  height: 80px;
  background: #22536E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #F6C15D;
  border-bottom: 5px solid #F6C15D;
`;


const StyledLink = styled.a`
  padding: 0rem 2rem;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;

const Navbar = () => {
    return (
        <Nav>
          <div>
            <Link href='/' passHref>
              <StyledLink>
                <Image src={Logo} alt="Logo" width="110" height="70" />
              </StyledLink>
            </Link>
          </div>
          <div>
            <Link href='/' passHref>
              <StyledLink>Home</StyledLink>
            </Link>
            <Link href='/about' passHref>
              <StyledLink>About</StyledLink>
            </Link>
            <Link href='/contact' passHref>
              <StyledLink>Contact</StyledLink>
            </Link>
            <Link href='/login' passHref>
              <StyledLink>Login</StyledLink>
            </Link>
          </div>
        </Nav>
      );
    };
    
    export default Navbar;
    