import {createContext, useState} from 'react';

const IsLoggedInContext = createContext({    
    loggedIn: false,
    user_id: null,
    user_email: null,
    user_name: null,
    loggingIn: (LoggingInHandler) => {},
    loggingOut: (LoggingOutHandler) => {},
});

export function IsLoggedInContextProvider(props) {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const [userId, setUserId] = useState(null);

    const [userEmail, setUserEmail] = useState(null);

    const [userName, setUserName] = useState(null);
    
    function loggingInHandler(user) {
        setUserLoggedIn(true);
        setUserId(user._id);
        setUserEmail(user.email);
        setUserName(user.name);
    }

    function loggingOutHandler(user) {
        setUserLoggedIn(false);
        setUserId(null);
        setUserEmail(null);
        setUserName(null);
    }

    const context = {
        loggedIn: userLoggedIn,
        user_id: userId,
        user_email: userEmail,
        user_name: userName,
        loggingIn: loggingInHandler,
        loggingOut: loggingOutHandler,
    };

    return ( <IsLoggedInContext.Provider value = {context}>
        {props.children}
    </IsLoggedInContext.Provider>
    )};

 export default IsLoggedInContext;

