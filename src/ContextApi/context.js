import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";



export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [login, setLogin] = useState('1')
    

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('signeds')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
    }
    return(
        <AppContext.Provider value={{login, setLogin, handleSignIn}}>
            {children}
        </AppContext.Provider>
    )
}