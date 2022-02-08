import {Typography, makeStyles} from "@material-ui/core";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from '@mui/material/Link';
import Image from 'next/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import More from '../../../public/More.svg';
import {useRouter} from "next/router";
import {getChatById} from '../../api/api';
import React, {useContext, useState, useEffect} from "react";
import IsLoggedInContext from "../../store/isloggedin.js";


//import '@fontsource/lato/300.css';
//import '@fontsource/lato/400.css';
//import '@fontsource/lato/700.css';

/*
const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loggedInCtx = useContext(IsLoggedInContext);
    const userEmail = loggedInCtx.user_email;
    const userId = loggedInCtx.user_id;
    
    const fetchEvents = async () => {
        try {
            const response = await getAllChat()
            console.log(response)
            setData(response)
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        fetchEvents().then(() => {
            setLoading(false);
        });
      }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    const filteredMeetings = data.filter((chat) => chat.creator === userEmail);
    console.log(userEmail);

*/

const useStyles = makeStyles( (theme) => ({

    Background: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(105,180,222,0.7)"
    }, 

    Basis: {
        height: "85vh", 
        width: "95vw", 
        display: "flex", 
        // justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "rgba(245, 245, 245, 1)", 
        borderRadius: "5px", 
        flexDirection: "column"   
    }, 

    Head: {
        height: "10vh", 
        width: "95vw",
        alignItems: "center", 
        // backgroundColor: "red",
        alignSelf: 'center', 
        alignContent: 'center', 
        display: "flex", 
        /*fontFamily: "lato",*/
        fontSize: 15, 
        fontWeight: 500
    }, 

    Banner: {
        height: "10vh", 
        width: "95vw",
        alignItems: "center", 
        alignSelf: 'center', 
        alignContent: 'center', 
        display: "flex", 
        fontFamily: "lato", 
        fontSize: 15, 
        fontWeight: 500, 
        // justifyContent: "space-around"
    }, 

    Body: {
        backgroundColor: "rgba(245, 245, 245, 1)", 
        // textAlign: "center", 
        height: "75vh", 
        justifyContent: "flex-start", 
        // backgroundColor: "red"
        // display: "flex", 
        // marginTop: "5vh", 
        // width: "95vw"
    }, 

    Item1: {
        // backgroundColor: 'pink', 
        // display: "flex",
        marginLeft: "5vw", 
        fontWeight: "bold", 
        marginRight: "10px"
    }, 

    Item2: {
        // backgroundColor: 'pink', 
        // display: "flex",
        marginLeft: "5vw"
    }, 

    Dots: {
        // backgroundColor: 'pink', 
        right: "7vw", 
        position: 'absolute'
    }, 

    Profile: {
        marginLeft: "30px"
    }, 

    More: {
        marginLeft: '100px'
    }

}));



const SelectedMeetingPage = () => {

    const classes = useStyles(); 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter(); 
    console.log(router.query);



    const fetchEvents = async () => {
        try {
        const id = router.query.id;
        console.log(id);
         const response = await getChatById(id);
         console.log("test");
         console.log(response)
         setData(response)
        } catch (err) {
         console.log(err);
        }
    }

    useEffect(() => {
        fetchEvents().then(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }

   const meetingData = data;
   const meeting_name = meetingData[0].meeting_name;
   const meeting_description = meetingData[0].meeting_description.name;
   console.log(meetingData);
   console.log(meetingData[0].meeting_name);
   console.log(meetingData[0].meeting_description.name);

   function clickHandlerOne() {
    router.push(`/library`)
   };
    

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/library" onClick={clickHandlerOne} >
          {"  NUS Fintech Society"}
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/library"
          onClick={clickHandlerOne}
        >
          {meeting_name}
        </Link>,
      ];

    return (
        <div className={classes.Background}> 
            <div className={classes.Basis}> 
                <div className={classes.Banner}> 
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        className={classes.Item1}>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Image src={More} alt="More" width="15" height="15"/>
                    {/* <p className={classes.Item1}> NUS Fintech Society - SD Department Meeting</p> */}
                    <MoreHorizIcon color="action" className={classes.Dots}/>
                </div>
                {/* <div className={classes.Body}>  */}
                <Box sx={{ flexGrow: 1, width: "95vw"}}> 
                    <Grid container> 
                    <Grid item xs={6}>
                        <Paper className={classes.Body}> 
                            <div className={classes.Head}> 
                                <Typography className={classes.Item1}> Owner </Typography>
                                <AccountCircleIcon className={classes.Profile} fontSize="large" sx={{color: "rgba(149, 165, 166, 1)"}}/>
                            </div>
                            <Typography className={classes.Item2} variant="body2"> {meeting_description} </Typography>
                        </Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <Paper className={classes.Body}> 
                        </Paper>
                    </Grid> 
                    </Grid>
                </Box>
                {/* </div> */}
            </div>
        </div>
    )};

export default SelectedMeetingPage; 