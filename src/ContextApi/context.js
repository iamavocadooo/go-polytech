import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";



export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null) 
    const f = () => {
        const usersRef = collection(database, "users");
        const q = query(usersRef, where("studentId", "==", auth.currentUser.uid));
        onSnapshot(q, (snapshot) => {
          setUserInfo(
            snapshot.docs.map((doc) => ({
              name: doc.data().name,
              nickname: doc.data().nickName,
              surname: doc.data().surname
            }))
          );
        });
       
        }
    

            
    return(
        <AppContext.Provider value={{user, userInfo, setUser, setUserInfo, f}}>
            {children}
        </AppContext.Provider>
    )
}