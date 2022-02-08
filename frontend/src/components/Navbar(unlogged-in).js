import Image from 'next/image';
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles} from "@material-ui/core";
import Link from 'next/link';
import Logo from '../../public/Logo.png';
import { imageConfigDefault } from 'next/dist/server/image-config';
import TestThis from '../../public/TestThis.svg';
import { useContext } from 'react';
import IsLoggedInContext from '../store/isloggedin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 


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

    const isLoggedInCtx = useContext(IsLoggedInContext);

    console.log(isLoggedInCtx.loggedIn);
    
    if (isLoggedInCtx.loggedIn == false) {
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
            <Link href='/contact' passHref>
              <div className = {classes.StyledLink}>Contact</div>
            </Link>
            <Link href='/login' passHref>
              <div className = {classes.StyledLink}>Login</div>
            </Link>
          </div>
        </Toolbar>
        </AppBar>
      );
    } else { 
      return ( /*
        <AppBar position = "static">
        <CssBaseline />
        <Toolbar className ={classes.Nav}>
          <div>
            <Link href='/library/' passHref>
              <div className = {classes.StyledLink}>
                <Image src={Logo} alt="Logo" width="110" height="70" />
              </div>
            </Link>
          </div>
          <div className = {classes.NavLinks}>
            <Link href='/library/' passHref>
              <div className = {classes.StyledLink}>Library</div>
            </Link>
            <Link href='/login' passHref>
              <div className = {classes.StyledLink}>Login</div>
            </Link>
          </div>
        </Toolbar>
        </AppBar> */
        <AppBar position = "static">
        <CssBaseline />
        <Toolbar className ={classes.Nav}>
          <div className={classes.NavLinks}>
            <Link href='/' passHref>
              <div className = {classes.StyledLink}>
                <Image src={Logo} alt="Logo" width="110" height="70" />
              </div>
            </Link>
            <Link href='/record' passHref> 
                <div className={classes.StyledLink}>
                    <Image src={TestThis} alt="Record Button" width="110" height="70" />
                </div>
            </Link>
          </div>
          <div className = {classes.NavLinks}>
            <Link href='/library' passHref>
              <div className = {classes.StyledLink}>Library</div>
            </Link>
            <Link href='/help' passHref>
              <div className = {classes.StyledLink}>Help</div>
            </Link>
            <Link href='/profile' passHref>
              <div className = {classes.StyledLink}>
                  <AccountCircleIcon/>
              </div>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
    }
  }
    
export default Navbar;
    