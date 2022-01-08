import { getAllChat } from "../pages/api/api.js";
import React, {useState, useEffect} from "react";
import SingleChat from "./SingleChat.js";
import {Grid} from "@material-ui/core";

function AllChats(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
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

    return (
        <Grid container spacing={12} justifyContent = 'center'>
    
            {!loading &&(data).map((chat) => (
        
            <Grid item key={chat._id}>
                <SingleChat meetingName={chat._id} />
            </Grid>
                
        ))}
            
        </Grid>
        
    );
}

export default AllChats;

