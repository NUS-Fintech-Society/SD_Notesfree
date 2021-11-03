import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #011f4b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
    return (
        <Nav>
          <div>
            <Link href='/' passHref>
              <StyledLink>NotesFree</StyledLink>
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
    