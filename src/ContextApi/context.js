import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";

import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { signInWithEmailAndPassword } from "firebase/auth";


  // if (result) {
//    let uuid = uuidv4();

  //   alert("🔐 Here's your value 🔐 \n" + result);
  // } else {
  //   await SecureStore.setItemAsync('secure_deviceid', JSON.stringify(uuid));
  // }
  // console.log('fetchUUID')





export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [userToken, setUserToken] = useState(null)
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
            isStudent: doc.data().isStudent,
            chats: doc.data().chats,
          }))
        );
      });
    }
    const setLocalEmail = async(email, password) => {
      await SecureStore.setItemAsync('email', email);
      await SecureStore.setItemAsync('password', password);
      console.log(await SecureStore.getItemAsync('email'))
    }

    const deleteLocalEmail = async() => {
      SetEmail(null)
      SetPassword(null)
      await SecureStore.deleteItemAsync('email');
      await SecureStore.deleteItemAsync('password');
    }

    const getLocalEmail = async() => {
      SetEmail(await SecureStore.getItemAsync('email'))
      SetPassword(await SecureStore.getItemAsync('password'));
    }


    return(
        <AppContext.Provider value={{userToken, userInfo, setUserToken, setUserInfo, f, setLocalEmail, getLocalEmail, deleteLocalEmail, Email, Password}}>
            {children}
        </AppContext.Provider>
    )
}