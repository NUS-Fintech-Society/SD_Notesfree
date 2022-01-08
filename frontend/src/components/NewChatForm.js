import { useRef, useState } from "react";
import { addChat } from "../pages/api/api.js";
import { Button, TextField} from "@material-ui/core";

function NewChatForm(props) {
  const MembersInputRef = useRef();
  const CreatorInputRef = useRef();
  const TitleInputRef = useRef();

  //for word limit counter
  const CHARACTER_LIMIT = 200;
  const [meetingDescription, setMeetingDescription] = useState({
    name: "Maximum of 200 words",
  });

  const handleChange = (name) => (event) => {
    setMeetingDescription({
      ...meetingDescription,
      [name]: event.target.value,
    });
  };

  //end of variables and functions for word limit counter

  function submitHandler(event) {
    event.preventDefault();

    const newMembers = MembersInputRef.current.value;
    const newCreator = CreatorInputRef.current.value;
    const newTitle = TitleInputRef.current.value;

    addChat({
      _id: newTitle,
      members: newMembers,
      creator: newCreator,
      delete_by: newCreator,
    });

    props.submitted();
  }



  return (
    <form
      onSubmit={submitHandler}
      style={{
        backgroundColor: "#F5F5F5",
        width: 554,
        position: "fixed",
        top: "50%",
        left: "50%",
        marginLeft: -275,
        marginTop: -275,
        zIndex: "10",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Arial",
          fontStyle: "normal",
          color: "#101F40",
        }}
      >
        {" "}
        Add a new Meeting
      </h1>
      <div>
        <TextField
          label="Meeting Name"
          variant="outlined"
          id="Meeting"
          placeholder="Meeting Name"
          inputRef={TitleInputRef}
          margin="normal"
          style={{ padding: 5, backgroundColor: "#FFFFFF" }}
          fullWidth
        ></TextField>
      </div>
      <div>
        <TextField
          label="Owners' Email Addresses"
          fullWidth
          variant="outlined"
          id="Owners' Email Addresses"
          placeholder="Owners' Email Addresses"
          inputRef={CreatorInputRef}
          margin="normal"
          style={{ padding: 5, backgroundColor: "#FFFFFF" }}
        ></TextField>
      </div>
      <div>
        <TextField
          label="Invitees' Email Addresses"
          fullWidth
          variant="outlined"
          id="Invitees' Email Addresses"
          placeholder="Invitees' Email Addresses"
          inputRef={MembersInputRef}
          margin="normal"
          style={{ padding: 5, backgroundColor: "#FFFFFF" }}
        ></TextField>
      </div>
      <div>
        <TextField
          label="Enter a description of the meeting:"
          multiline
          rows={4}
          id="Meeting Description"
          value={meetingDescription.name}
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange("name")}
          inputProps={{
            maxLength: CHARACTER_LIMIT,
          }}
          helperText={`${meetingDescription.name.length}/${CHARACTER_LIMIT}`}
          name="meetingDescription"
          style={{ padding: 5, backgroundColor: "#FFFFFF" }}
        ></TextField>
      </div>
      <div>
          <Button
            variant="contained"
            type="submit"
            style={{ padding: 5, backgroundColor: "#F6C15D", margin: 2 }}
          >
            Submit
          </Button>

          <Button
            variant="contained"
            type = "button"
            onClick={props.clickedOnClose}
            style={{ padding: 5, backgroundColor: "#F6C15D", margin: 2 }}
          >
            Close
          </Button>
      </div>
    </form>
  );
}

export default NewChatForm;
