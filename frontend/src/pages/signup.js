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

import React, { Component } from "react";
//import '../styles.css';
import CustomInput from '../components/CustomInput';
import Button from "../components/Button";
import {getUserByEmail, sha256} from "../api/api"

function userExist(form){
  getUserByEmail(form["email"]).then(userData => {
    if ( userData === "User does not exist"){
      alert("User does not exist");
    } 
    else {
      sha256(form["password"]).then(hashedPassword => {
        //console.log("input hash: "+ hashedPassword)
        //console.log("database hash: " + userData[0]["password"])
        if (hashedPassword === userData[0]["password"]){
          alert("Logging in!!")
        } else{
          alert("wrong password")
        }
      });
    }
  });  
}

export default class signup extends Component {
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
}