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

// function getAllUser(){
//   axios
//   .get(`${apiURL}/api/users`, {
//     timeout: 5000
//   })
//   .then(res => itsWorking(res))
//   .catch(err => console.log("err=="+err));
// }

const getAllUser = async () => {
  try {
      //const resp = await axios.get('`${apiURL}/api/users`');
      const resp = await axios.get(`${apiURL}/api/users`);
      console.log(resp);
  } catch (err) {
      // Handle Error Here
      console.log("err: " + err);
  }
};


const addUser = async() => {
  axios
    .post(`${apiURL}/api/adduser`, {
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

// const axiosInstance = axios.create({
//   // Other custom settings
//   baseURL: 'https://jsonplaceholder.typicode.com'
// });

getAllUser();
addUser();
export default About;