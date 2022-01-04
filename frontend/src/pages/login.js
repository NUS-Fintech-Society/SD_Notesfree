import Head from 'next/head';
import styled from 'styled-components';
import Home from '.';
import Link from 'next/link';
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



function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <useStyles>
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
       </useStyles>
    </>
  );
}

Login.getInitialProps = async (ctx) => {
    return {}
}

export default Login;
