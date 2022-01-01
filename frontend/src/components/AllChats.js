import { getAllChat } from "../pages/api/api.js";
import React, {useState, useEffect} from "react";


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
        <div>
        <ul>
            {!loading &&(data).map((chat) => (
        
            <li key = {chat._id}>
                <p>{chat.creator}</p>
                <p>{chat.members}</p>
                <p>{chat.delete_by}</p>
            </li>
        ))}
            
        </ul>
        </div>
    );
}

export default AllChats;

