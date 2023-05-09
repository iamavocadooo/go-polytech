import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import * as SecureStore from 'expo-secure-store';


export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [Email, SetEmail] = useState(null)
    const [Password, SetPassword] = useState(null)
    const f = () => {
        const usersRef = collection(database, "users");
        const q = query(usersRef, where("studentId", "==", auth.currentUser.uid));
        onSnapshot(q, (snapshot) => {
          setUserInfo(
            snapshot.docs.map((doc) => ({
              name: doc.data().name,
              nickname: doc.data().nickName,
              surname: doc.data().surname,
              isStudent: doc.data().isStudent
            }))
          );
        });
       
        }
    
        const setLocalEmail = async(email, password) => {
          await SecureStore.setItemAsync('email', email);
          await SecureStore.setItemAsync('password', password);
        }
    
        const deleteLocalEmail = async() => {
          SetEmail(null)
          SetPassword(null)
          await SecureStore.deleteItemAsync('email');
          await SecureStore.deleteItemAsync('password');
        }
    
        const getLocalEmail = async() => {
          SetEmail(await SecureStore.getItemAsync("email"));
          SetPassword(await SecureStore.getItemAsync("password"));
        }

            
    return(
        <AppContext.Provider value={{user, userInfo, setUser, setUserInfo, f, setLocalEmail, getLocalEmail, deleteLocalEmail, Email, Password}}>
            {children}
        </AppContext.Provider>
    )
}