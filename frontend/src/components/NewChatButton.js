import {makeStyles, Button} from "@material-ui/core";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

const useStyles = makeStyles((theme) => ({
    Button: {
        maxWidth: "302px",
        minWidth: "302px",
        maxHeight: "175px",
        minHeight: "175px",
        textTransform: "none",
        backgroundColor: "#EAEAEA",
        marginTop: "60px",
        marginLeft: "110px",
        marginRight: "100px",
        marginBottom: "30px",
        /*"&:hover": { */
        display: "flex",
        justifyContent: "center",
        /*}, */
      },
      Icon: {
        width: "80px",
        height: "80px",
        color: "#C4C4C4",
      },
    }));

function NewChatButton(props) {
    const classes = useStyles();
    return (
        <div>
        <Button className={classes.Button} onClick = {props.submitNew}>
             <CreateNewFolderIcon className={classes.Icon} />
             <div>Add a new Meeting</div>
        </Button>
        </div>
    )
};

export default NewChatButton;




