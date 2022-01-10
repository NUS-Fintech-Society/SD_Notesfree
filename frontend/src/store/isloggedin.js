import {createContext, useState} from 'react';

const IsLoggedInContext = createContext({    
    loggedIn: false,
    user_id: null,
    user_email: null,
    loggingIn: (LoggingInHandler) => {},
    loggingOut: (LoggingOutHandler) => {},
});

export function IsLoggedInContextProvider(props) {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const [userId, setUserId] = useState(null);

    const [userEmail, setUserEmail] = useState(null);
    
    function loggingInHandler(user) {
        setUserLoggedIn(true);
        setUserId(user._id);
        setUserEmail(user.email);
    }

    function loggingOutHandler(user) {
        setUserLoggedIn(false);
        setUserId(null);
    }

    const context = {
        loggedIn: userLoggedIn,
        user_id: userId,
        user_email: userEmail,
        loggingIn: loggingInHandler,
        loggingOut: loggingOutHandler,
    };

    return ( <IsLoggedInContext.Provider value = {context}>
        {props.children}
    </IsLoggedInContext.Provider>
    )};

 export default IsLoggedInContext;

