import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { THEME } from "../ui/Theme";
import { CustomInput } from "../ui/CustomInput";
import { CustomButton } from "../ui/CustomButton";
import { GoSignUp } from "./GoSignUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AppContext } from "../ContextApi/context";

export const SignIn = ({navigation}) => {
    const{f} = useContext(AppContext)
    const[error, setError] = useState(false)
    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          f()
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true)
          console.log(errorMessage)
          // ..
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