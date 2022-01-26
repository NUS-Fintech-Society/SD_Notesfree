import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({

  FooterSection: {
    background: "#b3cde0",
    color: "#23272a",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center"
  }
  
}));



const Footer = () => {
  const classes = useStyles();
  return (
    <div className = {classes.FooterSection}>
      <p>NUS Fintech Society 2021 &copy; All Rights Reserved</p>
    </div>
  );
};

export default Footer;