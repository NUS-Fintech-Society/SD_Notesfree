import { Typography, makeStyles, Button, Box } from "@material-ui/core";
import axios from "axios";
import NewChat from "../components/NewChat.js";
import AllChats from "../components/AllChats.js";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
  Background: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(105,180,222,0.7)",
  },

  Box: {
    backgroundColor: "#F5F5F5",
    borderRadius: "5px", 

  },

  Button: {
    maxWidth: "302px",
    minWidth: "302px",
    maxHeight: "225px",
    minHeight: "225px",
    textTransform: "none",
    backgroundColor: "#F5F5F5",
    margin: "3px",
    "&:hover": {
    backgroundColor: "#EAEAEA",
    display: "flex",
    justifyContent: "center",
    },
  },

  Icon: {
    width: "80px",
    height: "80px",
    color: "#C4C4C4",
  }

}));

const About = () => {

  const [formIsOpen, setFormIsOpen] = useState(false);
  function submitHandler() {
    setFormIsOpen(true);
  }

  const classes = useStyles();
  return (
    <div className={classes.Background}>

      {/* <Button className={classes.Button} onClick={submitHandler}>
        <CreateNewFolderIcon className={classes.Icon} />
        {" Add a new Meeting"}
      </Button>
      {formIsOpen && <NewChat/>} */}
      <AllChats/>

    </div>
  );
};

const apiURL = "http://localhost:5000";

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

const addUser = async () => {
  axios
    .post(`${apiURL}/api/adduser`, {
      //data to be posted to the url
      _id: 1,
      name: "test",
      email: "testemail",
      Username: "testUname",
      Password: "testPS",
    })
    .then((res) => itsWorking(res))
    .catch((err) => console.error(err));
};

function itsWorking() {
  console.log(res);
  console.log("its working");
}

// const axiosInstance = axios.create({
//   // Other custom settings
//   baseURL: 'https://jsonplaceholder.typicode.com'
// });

getAllUser();
addUser();
export default About;
