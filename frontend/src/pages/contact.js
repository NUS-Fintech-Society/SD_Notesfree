import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: top;
  background: rgba(105,180,222,0.7);
`;

const Heading = styled.h1`
color: #005;
font-size: 5rem; 
font-weight: 200;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>
    </>
  );
}