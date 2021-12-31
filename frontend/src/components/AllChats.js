import { getAllChat } from "../pages/api/api.js";
import React, {useState, useEffect} from "react";


function AllChats(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    

    
    useEffect(() => {
        setLoading(true);
        getAllChat()
        .then(response => console.log(response))
        .then(response => setData(response))
        .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <div>
        <ul>
            {(data).map((chat) => (
        
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

