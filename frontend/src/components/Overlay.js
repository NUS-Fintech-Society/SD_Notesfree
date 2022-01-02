import React, { cloneElement, useState } from 'react';
import { makeStyles, Typography, List } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 


const useStyles = makeStyles((theme) => ({

    Overall: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '80%', 
        backgroundColor: 'rgba(245, 245, 245, 1)',
        // border: '2px solid #000',
        p: 4, 
    }, 

    ClearIcon: {
        color: 'rgba(189, 195, 199, 1)', 
        marginTop: '10px', 
        marginLeft: '10px'
    }, 

    HeadingText: {
        color: 'rgba(16, 31, 64, 1)', 
        textAlign: 'center', 
        fontWeight: 'bold'
    }, 

    PresentText: {
        color: 'rgba(145, 195, 184, 1)', 
        marginLeft: '20px'
    }, 

    AbsentText: {
        color: 'rgba(227, 170, 186, 1)',
        marginLeft: '20px'
    },

    SmallPresentText: {
        color: 'rgba(145, 195, 184, 1)', 
        marginLeft: '5px'
    }, 

    SmallAbsentText: {
        color: 'rgba(227, 170, 186, 1)',
        marginLeft: '5px'
    },

    GreyText: {
        color: 'rgba(189, 195, 199, 1)', 
        fontStyle: 'italic'
    }, 

    Body: {
        display: 'flex',
        flexDirection: 'row', 
        // backgroundColor: 'red', 
        width: '100%', 
        height: '90%', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    }, 

    SmallBox: {
        // backgroundColor: "pink", 
        width: '40%',
        height: '90%'
    }, 

    SmallOverlay: {
        paddingTop: '10px', 
        paddingBottom: '10px', 
        paddingRight: '10px', 
        paddingLeft: '10px', 
        backgroundColor: 'white', 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        display: 'flex',
    }, 


    Row: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 

    Background: {
        height: "80px",
        background: "#22536E",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#F6C15D",
        borderBottom: "5px solid #F6C15D",
    }, 

    
  }));
  
  export default function BasicModal(props) {
    const classes = useStyles(); 

    const [smallOpenGreen, setsmallOpenGreen] = useState(false); 
    const openSmallGreen = () => setsmallOpenGreen(true); 
    const closeSmallGreen = () => setsmallOpenGreen(false); 

    const [smallOpenRed, setsmallOpenRed] = useState(false); 
    const openSmallRed = () => setsmallOpenRed(true); 
    const closeSmallRed = () => setsmallOpenRed(false); 
  
    function generate(element) {
        return [0, 1, 2].map((val) => 
            cloneElement(element, {
                key: val, 
            })
        );
    }


    return (
      <div>
        {/* <Button onClick={handleOpen} className={classes.Background}>Open modal</Button> */}
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <ClickAwayListener onClickAway={props.handleClose}> 

          <Box className={classes.Overall}>
            <Typography variant="h5" className={classes.HeadingText} style={{marginTop: '20px'}}>
              16 Participants
            </Typography>
            <div className={classes.Body}> 
                <Box className={classes.SmallBox}>
                    <Typography variant='h6' className={classes.PresentText}> Present </Typography> 
                    <List>
                    {generate(
                        <ListItemButton onClick={openSmallGreen}>
                            <Modal 
                                open={smallOpenGreen}
                                onClose={closeSmallGreen}> 
                                <ClickAwayListener onClickAway={closeSmallGreen}> 

                                <Box className={classes.SmallOverlay}> 
                                    <div className={classes.SmallBody}> 
                                        <div className={classes.Row}> 
                                            <Typography variant="body1" className={classes.HeadingText}> 
                                                James Matthew 
                                            </Typography>
                                            <Typography variant="body1" className={classes.SmallPresentText}> 
                                                was present 
                                            </Typography>
                                        </div>
                                        <div> 
                                        <Typography variant="body2" className={classes.GreyText}> 
                                            james@gmail.com
                                        </Typography>
                                        </div>
                                    </div>
                                </Box>
                                </ClickAwayListener>
                            </Modal>
                            <ListItemIcon>
                                <AccountCircleIcon sx={{fontSize: 40, color: 'rgba(145, 195, 184, 1)'}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="James Matthew"
                                secondary='james@gmail.com'
                            />
                        </ListItemButton>
                    )}
                    </List> 
                </Box> 
                <Box sx={{width: '2px', height: '80%', backgroundColor: 'rgba(189, 195, 199, 1)'}}></Box> 
                <Box className={classes.SmallBox}>
                    <Typography variant='h6' className={classes.AbsentText}> Absent </Typography> 
                    <List>
                    {generate(
                        <ListItemButton onClick={openSmallRed}>
                        <Modal 
                            open={smallOpenRed}
                            onClose={closeSmallRed}> 
                            <ClickAwayListener onClickAway={closeSmallRed}> 
                            <Box className={classes.SmallOverlay}> 
                                <div className={classes.SmallBody}> 
                                    <div className={classes.Row}> 
                                        <Typography variant="body1" className={classes.HeadingText}> 
                                            James Matthew 
                                        </Typography>
                                        <Typography variant="body1" className={classes.SmallAbsentText}> 
                                            was absent 
                                        </Typography>
                                    </div>
                                    <div> 
                                    <Typography variant="body2" className={classes.GreyText}> 
                                        james@gmail.com
                                    </Typography>
                                    </div>
                                </div>
                            </Box>
                            </ClickAwayListener>
                        </Modal>
                        <ListItemIcon>
                            <AccountCircleIcon sx={{fontSize: 40,color: 'rgba(227, 170, 186, 1)'}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary="James Matthew"
                            secondary='james@gmail.com'
                        />
                    </ListItemButton>
                    )}
                    </List> 
                </Box> 
            </div> 
          </Box>
          </ClickAwayListener>

        </Modal>
      </div>
    );
  }