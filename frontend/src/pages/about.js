import {Typography, makeStyles} from "@material-ui/core";
import axios from 'axios';
import {addUser} from '../api/api'
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
const test = {
  //data to be posted to the url
  '_id': 16,
  'name': "test",
  'email': 'testemail',
  'username': 'testUname',
  'password': 'testPS'
}
console.log(addUser(test))

export default About;
