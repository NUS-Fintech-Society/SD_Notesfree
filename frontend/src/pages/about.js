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

function getAllUser(){
  axios
  .get(`${apiURL}/api/users`, {
    timeout: 5000
  })
  .then(res => itsWorking(res))
  .catch(err => console.log("err=="+err));
}

function itsWorking(){
  console.log(res);
  console.log('its working');
}

// const axiosInstance = axios.create({
//   // Other custom settings
//   baseURL: 'https://jsonplaceholder.typicode.com'
// });

function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}


// Event listeners
// document.getElementById('get').addEventListener('click', getTodos);
// document.getElementById('post').addEventListener('click', addTodo);
// document.getElementById('update').addEventListener('click', updateTodo);
// document.getElementById('delete').addEventListener('click', removeTodo);
// document.getElementById('sim').addEventListener('click', getData);
// document.getElementById('headers').addEventListener('click', customHeaders);
// document
//   .getElementById('transform')
//   .addEventListener('click', transformResponse);
// document.getElementById('error').addEventListener('click', errorHandling);
// document.getElementById('cancel').addEventListener('click', cancelToken);
getAllUser();
export default About;