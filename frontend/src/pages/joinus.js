import React, { Component } from "react";
//import '../styles.css';
import CustomInput from '../components/CustomInput';
import Button from "../components/Button";
import addUser from "./api/api";

const submitform = async(event) =>{
  event.preventDefault();
  console.log('check');
};

var testuser ={
  "_id" : 25,
  "name": "direct",
  "email": "email",
  "username": "name",
  "password": "pw"
}

addUser(testuser);

export default class joinus extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    alert('submit form');
    e.preventDefault();
    //addUser(testuser);
    console.log(this.state);
  }

  render() {
    return (
      <div className="joinus">
        <form className="form"
          onSubmit={this.handleSubmit} 
          >
        <CustomInput
            labelText="Name"
            id="name"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Userame"
            id="username"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
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

          <Button 
            type="submit" 
            color="primary" 
            //className="form__custom-button"
            >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}