<<<<<<< HEAD
import { Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({

  Background: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(105,180,222,0.7)",
  }
  
}));


const Contact= () =>  {
  const classes = useStyles();
  return (
    <div className = {classes.Background}>
      <Typography variant="h2" align="center">
        Contact Us
      </Typography>
    </div>
  );
}

export default Contact;

=======
import Head from 'next/head';
import styled from 'styled-components';

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
>>>>>>> john/login_page
