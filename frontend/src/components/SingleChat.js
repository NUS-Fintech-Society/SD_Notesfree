import {makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import ChatDefaultImage from "../../public/ChatDefaultImage.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    Card: {
        maxWidth: "302px",
        minWidth: "302px",
        maxHeight: "175px",
        minHeight: "175px",
        marginTop: "30px",
        marginBottom: "30px",
        marginLeft: "60px",
        marginRight: "60px",
    },

    Content: {
        backgroundColor: "#C4C4C4",
    },
    MeetingName: {
        textAlign: "left",
        color: "#101F40",
        fontWeight: "bold",
        fontSize: "subtitle1",
        lineHeight: "1",
    },

    MeetingDetails: {
        textAlign: "left",
        color: "#101F40",
        fontStyle: "italic",
        fontSize: "body2",
        lineHeight: "1" 
    },
}));

function SingleChat(props) {

    function clickHandler() {
        console.log("clicked!")
    }
    const classes = useStyles();
    return (
        <Card className = {classes.Card} onClick = {clickHandler}>
            <CardActionArea>
                <CardMedia>
                    <Image src={ChatDefaultImage} alt="Image" width="302px" height="110px"/>
                    </CardMedia>
                <CardContent className = {classes.Content}>
                <Typography className = {classes.MeetingName} gutterBottom component="div">
                {(props.meetingName)? props.meetingName : "Meeting Name" } 
                </Typography>
                <Typography className = {classes.MeetingDetails} gutterBottom component="div"> 
                    Last seen: 
                </Typography>

                    </CardContent>
                    </CardActionArea> 
        </Card>
    )

}


export default SingleChat; 