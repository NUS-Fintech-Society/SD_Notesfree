import Head from 'next/head';
import styled from 'styled-components';
import Home from '.';
import Link from 'next/link';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: top;
  background: #fff;
`;

const Heading = styled.h1`
  color: #005;
  font-size: 5rem; 
  font-weight: 200;
`;

const Button = styled.button`
display: grid;
grid-gap: 20px;
color: #011f4b;
font-size: 1em;
margin: 5px;
padding: 0.25em 1em;
border: 2px solid #011f4b;
border-radius: 3px;
display: block;
`;

const HomeStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  ....
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;



function About() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
      <HomeStyles>
       <ButtonsWrapper>
        <Link href = "/signup">
           <Button>Sign In</Button>
        </Link>
        <Link href = "/joinus">
           <Button>Join Us</Button>
        </Link>
       </ButtonsWrapper>
       </HomeStyles>
       </Hero>
    </>
  );
}

About.getInitialProps = async (ctx) => {
    return {}
}

export default About;