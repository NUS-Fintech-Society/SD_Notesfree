<<<<<<< HEAD
import {Typography, makeStyles} from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles( (theme) => ({

  Background: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(105,180,222,0.7)",
  }
  
}));


const About= () =>  {
  const classes = useStyles();
  return (
    <div className = {classes.Background}>
      <Typography variant="h2" align="center">
        About Us
      </Typography>
    </div>
  );
}

const apiURL = 'http://localhost:5000';


const getAllUser = async () => {
  try {
      //const resp = await axios.get('`${apiURL}/api/users`');
      const resp = await axios.get(`${apiURL}/api/users`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};

const getUserById = async (id) => {
  try {
      //const resp = await axios.get('`${apiURL}/api/users`');
      const resp = await axios.get(`${apiURL}/api/users/${id}`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};

const addUser = async(newuser) => {
  try {
    //const resp = await axios.get('`${apiURL}/api/users`');
    const response = await axios.post(`${apiURL}/api/users`, {
      //data to be posted to the url
      "_id": newuser["_id"],
      "name": newuser["name"],
      "email": newuser["email"],
      "username": newuser["username"],
      "password": newuser["password"]
    })
    console.log(response);
  } catch (err) {
    // Handle Error Here
    console.log("err: " + err);
  }
}

const addChat = async (newchat) => {
  try {
    const response = await axios.post(`${apiURL}/api/chat`, {
      //data to be posted to the url
      "_id" : newchat["_id"],
      "members": newchat["members"],
      "creator": newchat["creator"],            
      "delete_by": newchat["delete_by"]
    })
    console.log(response);
  } catch (err) {
    // Handle Error Here
    console.log("err: " + err);
  }
};

const addMessage = async(newmessage) => {
  try {
    const resp = await axios.post(`${apiURL}/api/message`, {
      //data to be posted to the url
      "convo_id": newmessage["convo_id"], 
      "author": newmessage["author"], 
      "content": newmessage["content"]
    })
    .then(console.log("new message added"));
  } catch (err) {
    // Handle Error Here
    console.log("err: " + err);
  }
};

const getChatById = async (id) => {
  try {
      const resp = await axios.get(`${apiURL}/api/chat/${id}`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};

const getAllChat = async () => {
  try {
      const resp = await axios.get(`${apiURL}/api/chat`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};

export default About;
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
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>About Us</Heading>
      </Hero>
      </>
  );
}
>>>>>>> john/login_page
