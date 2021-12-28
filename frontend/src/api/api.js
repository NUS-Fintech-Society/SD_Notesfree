import axios from 'axios';

const axios = require('axios').default;

const apiURL = 'http://localhost:5000'

// Get all users:GET /api/users 
// Get user by user id:GET /api/users/userId 
// Create a user: POST /api/users 
// Get all chats: GET /api/chat 
// Get chat by chat id: GET /api/chat/chatId   
// Create a chat room: POST /api/chat/ 
// Create a message: POST /api/message 
// Get all messages: GET /api/message 
// Get message by message id: GET /api/message/messId


const getAllUser = async () => {
  try {
      const resp = await axios.get(`${apiURL}/api/users`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};

const getUserById = async (id) => {
  try {
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


const getAllChat = async () => {
  try {
      const resp = await axios.get(`${apiURL}/api/chat`);
      return(resp.data);
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

const addChat = async(newchat) => {
  try {
    const resp = await axios.post(`${apiURL}/api/chat`, {
      //data to be posted to the url
      "_id" : newchat["_id"],
      "members": newchat["members"],
      "creator": newchat["creator"],            
      "delete_by": newchat["delete_by"]
    })
    .then(console.log("new chat added"));
  } catch (err) {
    // Handle Error Here
    console.log("err: " + err);
  }
};

const getAllMessage = async () => {
  try {
      const resp = await axios.get(`${apiURL}/api/message`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};

const getMessageById = async (id) => {
  try {
      const resp = await axios.get(`${apiURL}/api/message/${id}`);
      return(resp.data);
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

module.exports = {
  addMessage, getMessageById, getAllMessage, addChat,
  getChatById,getAllChat, addUser, getUserById, getAllUser
}