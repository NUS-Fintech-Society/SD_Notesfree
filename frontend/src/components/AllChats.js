import { getAllChat } from "../api/api.js";
import React, {useContext, useState, useEffect} from "react";
import SingleChat from "./SingleChat.js";
import {Grid} from "@material-ui/core";
import IsLoggedInContext from "../store/isloggedin.js";

function AllChats(){

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

    return (
        <Grid container spacing={12} justifyContent = 'center'>
    
            {!loading && (filteredMeetings).map((chat) => ( 
        
                <Grid item key={chat._id}>
                    <SingleChat meetingName={chat.meeting_name} />
                </Grid>
            
                
        ))}
            
        </Grid>
        
    );
}

export default AllChats;

