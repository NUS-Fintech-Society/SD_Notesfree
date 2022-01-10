/*
import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/Layout";
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Home() {
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin">
                    <img className="mb-4" alt="" width="72" height="72" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="useremail@domain.com" className="mr-sm-2" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                        <FormControl type="password" className="mr-sm-2" />
                    </FormGroup>
                    <Button className="btn-lg btn-block" variant="primary">Sign In</Button>
                </Form>
            </div>
        </Layout>
      </>
  )
}
*/

import {useRef, useState, useContext} from "react";
//import '../styles.css';
import CustomInput from '../components/CustomInput';
import {getUserByEmail, sha256} from "../api/api";
import IsLoggedInContext from "../store/isloggedin";
import { Button, TextField, makeStyles} from "@material-ui/core";
import {Router, useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  Background: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(105,180,222,0.7)",
  }
}));

function Signup() {

  const isLoggedInCtx = useContext(IsLoggedInContext); 
  const router = useRouter();

  function userExist(email, password){
  
  getUserByEmail(email).then(userData => {
    console.log(userData);
    if ( userData === "User does not exist"){
      alert("User does not exist");
    } 
    else {
      sha256(password).then(hashedPassword => {
        //console.log("input hash: "+ hashedPassword)
        //console.log("database hash: " + userData[0]["password"])
        if (hashedPassword === userData[0]["password"]){
          alert("Logging in!!");
          const user = userData[0];
          //set context to logged in and user_id
          isLoggedInCtx.loggingIn(user);
          router.push('/library');

        } else{
          alert("wrong password")
        }
      });
    }
  });  
}
    const EmailInputRef = useRef();
    const PasswordInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();
      const email = EmailInputRef.current.value;
      const password = PasswordInputRef.current.value;

      userExist(email, password);
    }

    const classes = useStyles();

    return (

      <div className={classes.Background}>
      <form
        onSubmit={submitHandler}
        style={{
          backgroundColor: "#F5F5F5",
          width: 554,
          position: "fixed",
          top: "50%",
          left: "50%",
          marginLeft: -275,
          marginTop: -275,
          zIndex: "10",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Arial",
            fontStyle: "normal",
            color: "#101F40",
          }}
        >
          {" "}
          Log In
        </h1>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            id="Email"
            placeholder="Email"
            inputRef={EmailInputRef}
            margin="normal"
            style={{ padding: 5, backgroundColor: "#FFFFFF" }}
            fullWidth
          ></TextField>
        </div>
        <div>
          <TextField
            type = "password"
            label="Password"
            fullWidth
            variant="outlined"
            id="Password"
            placeholder="Password"
            inputRef={PasswordInputRef}
            margin="normal"
            style={{ padding: 5, backgroundColor: "#FFFFFF" }}
          ></TextField>
        </div>
        
        <div>
            <Button
              variant="contained"
              type="submit"
              fullWidth 
              style={{ padding: 5, backgroundColor: "#F6C15D", margin: 2 }}
            >
              Submit
            </Button>
  
        </div>
      </form>
      </div>
    );
  }

  export default Signup;


/* export default class signup extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    alert('Sign in form submitted!');
    e.preventDefault();
    console.log(this.state);
    userExist(this.state);
  }

  render() {
    return (
      <div className="signup">
        <form className="form"
          onSubmit={this.handleSubmit}
          >
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="submit" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );
  }
} */ 

