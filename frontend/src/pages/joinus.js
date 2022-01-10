import React, { Component } from "react";
//import '../styles.css';
import CustomInput from '../components/CustomInput';
import Button from "../components/Button";
import {addUser} from "../api/api"

export default class joinus extends Component {
  state = {
    _id: Math.floor(Math.random() * 200),
    name: "",
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    alert('Sign up form submitted!');
    e.preventDefault();
    addUser(this.state);
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