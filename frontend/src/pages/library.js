import {Typography, makeStyles} from "@material-ui/core";
import React, { cloneElement, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from '@mui/material/Link';
import Image from 'next/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import More from '../../public/More.svg';
import ViewTranscript from '../../public/Button.svg';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import Overlay from '../components/Overlay';


import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

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
        // height: "10vh", 
        paddingTop: "2vh", 
        width: "45vw",
        alignItems: "center", 
        // backgroundColor: "pink",
        alignSelf: 'center', 
        alignContent: 'center', 
        display: "flex", 
        fontFamily: "lato", 
        fontSize: 15, 
        fontWeight: 500, 
        marginLeft: "2vw", 

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

    Breadcrumbs: {
        // backgroundColor: 'pink', 
        // display: "flex",
        fontWeight: "bold", 
        marginRight: "10px", 
        marginLeft: "2vw"
    }, 

    Item1: {
        // backgroundColor: 'pink', 
        // display: "flex",
        fontWeight: "bold", 
        marginRight: "10px"
    }, 

    Item2: {
        // backgroundColor: 'pink', 
        // display: "flex",
        marginLeft: "2vw", 
        marginRight: '2vw'
    }, 

    Dots: {
        // backgroundColor: 'pink', 
        right: "7vw", 
        position: 'absolute'
    }, 

    Profile: {
        marginLeft: "30px"
    }, 

    Pencil: {
        marginLeft: "30px", 
        marginTop: '2px'
    }, 

    More: {
        marginLeft: '100px'
    }, 

    Meeting: {
        fontWeight: "bold"
    }, 
    
    Date: {
        color: "rgba(196, 196, 196, 1)", 
        fontStyle: "italic", 
    }, 

    Image: {
        marginLeft: "20vw", 
        marginTop: "10px"
    }, 

    Test1: {
        display: "flex", 
        flexDirection: 'row',
        marginTop: '0px'
    }, 

    Participant: {
        display: 'flex', 
        flexDirection: 'row', 
        // backgroundColor: 'pink', 
        width: '45vw', 
        height: '10vh', 
        marginLeft: '2vw'
    }, 

    Description: {
        fontWeight: 'bold', 
        marginLeft: '2vw'
    }, 

    ImageContainer: {
        width: '15vw', 
        height: '10vh', 
        // backgroundColor: 'pink', 
        marginLeft: '10px', 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'center'
    }, 

    ImageParticipant: {

    }, 

    PlusParticipants: {
        width: '15vw', 
        height: '10vh', 
    }, 

    Plus: {
        color: 'rgba(196, 196, 196, 1)', 
        marginTop: '5px'
    }

}));

const Library = () => {
    const classes = useStyles(); 

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/library" onClick={(event) => event.preventDefault()} >
          NUS Fintech Society
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/library"
          onClick={(event) => event.preventDefault()}
        >
          SD Department Meeting
        </Link>,
      ];

    const participants = [1, 2, 3, 4 , 5, 6]; 

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.log(open);
    };
    const handleClose = () => {
        setOpen(false); 
        console.log(open);
    };

    return (
        <div className={classes.Background}> 
            <div className={classes.Basis}> 
                <div className={classes.Banner}> 
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        className={classes.Breadcrumbs}>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Image src={More} alt="More" width="15" height="15"/>
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
                            <Typography className={classes.Item2} variant="body2"> This meeting is mainly for software development department members to meet and share the updates for their respective projects in the past months. </Typography>
                        </Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <Paper className={classes.Body}> 
                            <div className={classes.Head}> 
                                <div className={classes.Container}> 
                                    <div className={classes.Test1}> 
                                        <Typography variant="h5" className={classes.Meeting}> Meeting 1 </Typography>
                                        <EditIcon className={classes.Pencil} sx={{color: "rgba(16, 31, 64, 1)"}}/>
                                    </div> 
                                    <Typography variant="body1" className={classes.Date}> Happened on 8/10/2021 </Typography>
                                </div>
                                <div className={classes.Image}> 
                                    <Button> 
                                        <Image src={ViewTranscript} alt="View transcript" width="110" height="70"/>
                                    </Button>
                                </div>
                            </div>
                                    {/* <Typography variant="body1" className={classes.Date}> Happened on 8/10/2021 </Typography> */}
                            <div className={classes.Participant}>
                                <Typography variant="body1" className={classes.Meeting} style={{marginTop: '5px'}}> 16 Participants </Typography>
                                <Button onClick={handleOpen}>
                                <Overlay handleOpen={handleOpen} open={open} handleClose={handleClose}/> 
                                <div className={classes.ImageContainer}> 
                                    { 
                                    
                                    participants.slice(0, 5).map((e) => 
                                    
                                
                                    (
                                        <AccountCircleIcon className={classes.ImageParticipant} fontSize="large" sx={{color: "rgba(149, 165, 166, 1)"}}/>
                                    )

                 
                                    
                                    )}

                                </div>
                                </Button> 
                                <div className={classes.PlusParticipants}> 
                                    <Typography className={classes.Plus} variant='body1'> {participants.length > 5? '+ ' +  `${participants.length - 5}` + ' others' : ''} </Typography>
                                </div>
                            </div> 
                            <Typography variant="body1" className={classes.Description}> Description </Typography>
                            <Container> 
                                <Box sx={{my: 2}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar arcu sed egestas lacinia. Aenean faucibus aliquam elit, in consequat ex. Praesent id posuere sapien, in tristique est. Mauris suscipit consequat sollicitudin. Sed et mollis leo. Etiam vehicula in justo non cursus. Duis dapibus sagittis malesuada. Etiam commodo cursus felis vel viverra. Sed in aliquam enim, nec ultricies quam. Nulla iaculis efficitur luctus. Praesent eget ante sit amet magna accumsan dignissim eget a mi. Praesent sit amet ullamcorper ante, vitae facilisis nisi. Nam a mi faucibus tortor ultrices fringilla convallis in lectus. Vestibulum sit amet commodo eros. In hac habitasse platea dictumst.

                                </Box> 
                            </Container>
                        </Paper>
                    </Grid> 
                    </Grid>
                </Box>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Library; 