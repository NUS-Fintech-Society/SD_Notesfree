import axios from 'axios';

const axios = require('axios').default;

const apiURL = 'http://localhost:3000/'

// Get all users:GET /api/users 
// Get user by user id:GET /api/users/userId 
// Create a user: POST /api/users 
// Get all chats: GET /api/chat 
// Get chat by chat id: GET /api/chat/chatId   
// Create a chat room: POST /api/chat/ 
// Create a message: POST /api/message 
// Get all messages: GET /api/message 
// Get message by message id: GET /api/message/messId

//from stackOverFlow
// const getAllUsers = async () => {
//     try {
//       let allUsers = await axios(`${apiURL}/api/users`);
//       console.log(allUsers);
//     } catch (error) {
//       console.error('Error:', error);
//     };
// };
  
// const getUserById = async() => {
//     try {
//       let response = await axios.get(`${apiURL}/api/users/${userID}`);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
// };

// const createUser = async() => {
//     axios.post('/user', {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }

//from Youtube tut
function getAllUser(){
    axios
    .get(`${apiURL}/api/users`, {
      timeout: 5000
    })
    .then(res => itsWorking(res))
    .catch(err => console.error(err));
}

function addTodo(res) {
    axios
      .post(`${apiURL}/api/users`, {
        //data to be posted to the url
        '_id': 1,
        'name': "test",
        'email': 'testemail',
        'Username': 'testUname',
        'Password': 'testPS'
      })
      .then(res => itsWorking(res))
      .catch(err => console.error(err));
}

function itsWorking(){
    console.log(res);
    console.log('its working');
}