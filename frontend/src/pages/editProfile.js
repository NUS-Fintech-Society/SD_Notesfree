import { Typography, makeStyles, Button } from '@material-ui/core'; 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import Image from 'next/image';
import Confirm from '../../public/Confirm.svg';



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
        alignSelf: 'center', 
        marginLeft: '2vw'
    }, 
    PureInfo: {
        height: '15vh', 
        width: '95vw', 
    }, 
    Info: {
        color: "rgba(16, 31, 64, 1)",
        width: '25vw' 
    }, 
    Confirm: {
        width: '10vw', 
        height: '10vh', 
        marginTop: '10vh'
    }
})); 

const EditProfile = () => {
    const classes = useStyles(); 
    const ariaLabel = { 'aria-label': 'description' };

    return (
        <div className={classes.Background}> 
            <div className={classes.Basis}> 
                <div className={classes.Banner}> 
                    <Typography className={classes.Profile}> Profile</Typography>
                    <MoreHorizIcon color="action" className={classes.Dots}/>
                </div>
                <div className={classes.Body}> 
                    <div className={classes.PictureWithName}> 
                        <AccountCircleIcon className={classes.Account}/>
                        <Input className={classes.Name} defaultValue="Evan Ah" inputProps={ariaLabel} />
                    </div> 
                    <div className={classes.PureInfo}> 
                        <Typography className={classes.Info} style={{fontWeight: "bold"}} variant="body2"> About you</Typography>
                        <Input maxRows={5} multiline className={classes.Info} defaultValue="Hello! I am a legit person!" inputProps={ariaLabel} />
                    </div>
                    <Button className={classes.Confirm}> 
                        <Image src={Confirm} alt="Confirm" />
                    </Button>
                </div>
            </div> 
        </div>
    )
}; 

export default EditProfile; 