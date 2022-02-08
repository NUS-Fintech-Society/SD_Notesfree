import { Typography, makeStyles } from '@material-ui/core'; 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import React, {useContext} from "react";
import IsLoggedInContext from "../store/isloggedin.js";




const useStyles = makeStyles( (theme) => ({
    Background: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(105,180,222,0.7)",
    },
    Basis: {
        height: "85vh", 
        width: "95vw", 
        // justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "rgba(245, 245, 245, 1)", 
        borderRadius: "5px", 
    }, 
    Banner: {
        height: "8vh", 
        paddingTop: "2vh",
        width: "95vw",
        fontFamily: "lato", 
        fontSize: 15, 
        fontWeight: 500, 
        alignSelf: 'flex-start', 
        display: 'flex', 
        flexDirection: 'row',
        paddingLeft: "3vw", 
        // marginTop: '2vh'

        // justifyContent: "space-around"
    },
    Dots: {
        // backgroundColor: 'pink', 
        right: "7vw", 
        position: 'absolute'
    },  

    Profile: {
        color: "rgba(16, 31, 64, 1)", 
        fontWeight: "bold",
        marginRight: '20px'
    },
    Body: {
        // backgroundColor: "rgba(245, 245, 245, 1)", 
        height: '77vh', 
        width: '95vw',
        paddingLeft: "3vw", 
        // backgroundColor: "pink", 

      
    }, 
    PictureWithName: {
        // backgroundColor: "red", 
        height: '20vh', 
        width: '95vw', 
        flexDirection: 'row', 
        display: 'flex'
    }, 

    Account: {
        width: '100px', 
        height: '100px', 
        color: 'rgba(149, 165, 166, 1)'
    }, 

    Name: {
        color: "rgba(16, 31, 64, 1)", 
        fontWeight: "bold",
        alignSelf: 'center', 
        marginLeft: '2vw'
    }, 
    PureInfo: {
        height: '15vh', 
        width: '95vw', 
    }, 
    Info: {
        color: "rgba(16, 31, 64, 1)", 
    }
})); 

const Profile = () => {


    const loggedInCtx = useContext(IsLoggedInContext);
    const userName = loggedInCtx.user_name;
    console.log(userName);

    const classes = useStyles(); 
    return (
        <div className={classes.Background}> 
            <div className={classes.Basis}> 
                <div className={classes.Banner}> 
                    <Typography className={classes.Profile}> Profile</Typography>
                    <Link href="/editProfile" passHref> 
                        <EditIcon className={classes.Pencil} sx={{color: "rgba(16, 31, 64, 1)"}}/>
                    </Link>
                    <MoreHorizIcon color="action" className={classes.Dots}/>
                </div>
                <div className={classes.Body}> 
                    <div className={classes.PictureWithName}> 
                        <AccountCircleIcon className={classes.Account}/>
                        <Typography className={classes.Name}> {userName} </Typography> 
                    </div> 
                    <div className={classes.PureInfo}> 
                        <Typography className={classes.Info} style={{fontWeight: "bold"}} variant="body2"> About you</Typography>
                        <Typography className={classes.Info} variant="body2"> Hello! I am a legit person! </Typography>
                    </div>
                    <div className={classes.PureInfo}> 
                        <Typography className={classes.Info} style={{fontWeight: "bold"}} variant="body2"> Your Groups</Typography>
                        <Typography className={classes.Info} variant="body2"> NUS Fintech Society </Typography>
                    </div>
                </div>
            </div> 
        </div>
    )
}; 

export default Profile; 