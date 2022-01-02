import { Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({

  Background: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(105,180,222,0.7)",
  }
  
}));


const Contact = () =>  {
  const classes = useStyles();
  return (
    <div className = {classes.Background}>
      <Typography variant="h2" align="center">
        Contact Us
      </Typography>
    </div>
  );
}

export default Contact;
