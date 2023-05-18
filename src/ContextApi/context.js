import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import * as SecureStore from 'expo-secure-store';


export const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [userBankInfo, setUserBankInfo] = useState(null)
    const [Email, SetEmail] = useState(null)
    const [Password, SetPassword] = useState(null)

    const changeNick = (nick) => {
      const ref = doc(database, 'users', userInfo[0].id)
      updateDoc(ref, {
        nickName: nick
      })
    }

    const f = () => {
        let usersRef = collection(database, "users");
        let q = query(usersRef, where("studentId", "==", auth.currentUser.uid));
        onSnapshot(q, (snapshot) => {
          setUserInfo(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              nickname: doc.data().nickName,
              surname: doc.data().surname,
              dadname: doc.data().dadname,
              isStudent: doc.data().isStudent
            }))
          );
        }
        )
        usersRef = collection(database, "bank");
        q = query(usersRef, where("studentId", "==", auth.currentUser.uid));
        onSnapshot(q, (snapshot) => {
          setUserBankInfo(
            snapshot.docs.map((doc) => ({
              bankScore: doc.data().bankScore,
              studyPay: doc.data().studyPay,
            }))
          );
        }
        )
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
          const email = await SecureStore.getItemAsync("email")
          const password =  await SecureStore.getItemAsync("password")
          SetEmail(email);
          SetPassword(password);
        }

            
    return(
        <AppContext.Provider value={{user, userInfo, setUser, setUserInfo, userBankInfo, f, setLocalEmail, getLocalEmail, deleteLocalEmail, Email, Password, changeNick}}>
            {children}
        </AppContext.Provider>
    )
}