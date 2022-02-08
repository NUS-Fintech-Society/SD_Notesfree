import { Typography, makeStyles, Button, Box } from "@material-ui/core";
import axios from "axios";
import NewChatButton from "../../components/NewChatButton.js";
import NewChatForm from "../../components/NewChatForm.js";
import SingleChat from "../../components/SingleChat.js";
import NewChatFormBackground from "../../components/NewChatFormBackground.js";
import AllChats from "../../components/AllChats.js";
import {useState} from "react";
import {addUser} from '../../api/api';

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
    width: "95%",
    height: "90%",
    overflow: "scroll",
    justifyContent: "space-evenly"
  }

}));

const Library = () => {

  const [formIsOpen, setFormIsOpen] = useState(false);
  function submitHandler() {
    setFormIsOpen(true);
  }
  function closeForm() {
    setFormIsOpen(false);
  }

  const classes = useStyles();
  return (
    <div className={classes.Background}>
      <Box className={classes.Box}>  

       <NewChatButton submitNew={submitHandler}/>
      
      {formIsOpen && <NewChatForm clickedOnClose={closeForm} submitted={closeForm}/>} 

      <AllChats/>
      </Box>
      {/*<AllChats/> */}

    </div>
  );
}
const test = {
  //data to be posted to the url
  '_id': 16,
  'name': "test",
  'email': 'testemail',
  'username': 'testUname',
  'password': 'testPS'
}
console.log(addUser(test))

export default Library;
