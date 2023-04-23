import React, { useState } from "react";
import { auth } from "../../firebase";



export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [login, setLogin] = useState('1')
    const handleSignUp = ({email, password}) => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error)
    }

    return(
        <AppContext.Provider value={{login, setLogin, handleSignUp}}>
            {children}
        </AppContext.Provider>
    )
}