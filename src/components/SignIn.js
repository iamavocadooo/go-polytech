import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, ActivityIndicator } from "react-native";
import { THEME } from "../ui/Theme";
import { CustomInput } from "../ui/CustomInput";
import { CustomButton } from "../ui/CustomButton";
import { GoSignUp } from "./GoSignUp";
import { signInWithEmailAndPassword, browserSessionPersistence, setPersistence, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { AppContext } from "../ContextApi/context";
import * as SecureStore from 'expo-secure-store';


export const SignIn = ({navigation}) => {
    const{f, setUserToken, setLocalEmail, getLocalEmail, Email, Password} = useContext(AppContext)
    const[error, setError] = useState(false)
    const [loading, setLooading] = useState(true)

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          setLocalEmail(email, password)
          f()
          setUserToken(true)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true)
          console.log(errorMessage)
        });
    }
      getLocalEmail()
      if (Email) {
        console.log(Email);
        signInWithEmailAndPassword(auth, Email, Password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            f();
            setUserToken(true);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } 
    
      
    

    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    return(
        <View style={styles.wrapper}>
            <CustomInput value={loginValue} setValue={setLoginValue} placeholder={"логин"} secureTextEntry={false}/>
            <CustomInput value={passwordValue} setValue={setPasswordValue} placeholder={"пароль"} secureTextEntry={true}/>
            {
          error ? <Text style={styles.error}>
          Неверный логин или пароль!
        </Text> : false
        }
            <CustomButton style={styles.button} text='Вход' onPress={() => handleSignIn(loginValue, passwordValue)}/>
            <GoSignUp setError={setError} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        height:230,
        maxWidth: 350,
        borderWidth: 0,
        alignItems: 'flex-start'

    },
    
    error: {
        color: 'red',
        fontSize: 11,
        marginBottom: 20,
      }
})