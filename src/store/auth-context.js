import React, { useState, useEffect } from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    onSignIn: (email, password) => { },
    onSignUp: (name, email, password) => { },
    onSignOut: () => { }
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = sessionStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === true) {
            setIsLoggedIn(true);
        }
    }, []);

    const signInHandler = (email, password) => {
        sessionStorage.setItem('isLoggedIn', true)

        setIsLoggedIn(true);
    }

    const signUpHandler = (name, email, password) => {
        sessionStorage.setItem('isLoggedIn', true)

        setIsLoggedIn(true);
    }

    const signOutHandler = () => {
        sessionStorage.removeItem('isLoggedIn');

        setIsLoggedIn(false);
    }

    const context = {
        isLoggedIn: isLoggedIn,
        onSignIn: signInHandler,
        onSignUp: signUpHandler,
        onSignOut: signOutHandler
    }

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;