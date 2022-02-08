import Image from 'next/image';
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles} from "@material-ui/core";
import Link from 'next/link';
import Logo from '../../public/Logo.png';
import { imageConfigDefault } from 'next/dist/server/image-config';

const useStyles = makeStyles( (theme) => ({
  
  Nav: {
    height: "80px",
    background: "#22536E",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#F6C15D",
    borderBottom: "5px solid #F6C15D",
  },

  NavLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    cursor: "pointer",

  },

  StyledLink: {
    padding: "0rem 2rem",
    "&:hover": {
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  }

}));

const Navbar = () => {

    const classes = useStyles();

    return (
      <AppBar position = "static">
        <CssBaseline />
        <Toolbar className ={classes.Nav}>
          <div>
            <Link href='/' passHref>
              <div className = {classes.StyledLink}>
                <Image src={Logo} alt="Logo" width="110" height="70" />
              </div>
            </Link>
          </div>
          <div className = {classes.NavLinks}>
            <Link href='/' passHref>
              <div className = {classes.StyledLink}>Home</div>
            </Link>
            <Link href='/about' passHref>
              <div className = {classes.StyledLink}>About</div>
            </Link>
            <Link href='/contact' passHref>
              <div className = {classes.StyledLink}>Contact</div>
            </Link>
            <Link href='/login' passHref>
              <div className = {classes.StyledLink}>Login</div>
            </Link>
            <Link href='/meetings' passHref>
              <div className = {classes.StyledLink}>testMeeting</div>
            </Link>
          </div>
        </Toolbar>
        </AppBar>
      );
    };
    
    export default Navbar;
    