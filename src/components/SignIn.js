import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { THEME } from "../ui/Theme";
import { CustomInput } from "../ui/CustomInput";
import { CustomButton } from "../ui/CustomButton";
import { GoSignUp } from "./GoSignUp";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AppContext } from "../ContextApi/context";
import { CustomVerl } from "../ui/CustomVer";

export const SignIn = ({navigation}) => {
    const{f, getLocalEmail, setLocalEmail, deleteLocalEmail} = useContext(AppContext)
    const[error, setError] = useState(false)
    const[modalVisible, setModalVisible] = useState(false)
    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (!user.emailVerified) {
            setModalVisible(true)
          }
          console.log(user)
          setLocalEmail(email, password)
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

    // getLocalEmail()
    // console.log(Email)
    // if (Email) {
    //   console.log(Email)
    //   signInWithEmailAndPassword(auth, Email, Password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user)
    //     f()
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message
    //     console.log(errorMessage)
    //   })
    // }
    useEffect(() => {
      (async() => {
        let data = await getLocalEmail()
        console.log(data)
        if (data.email) {
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            f();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            console.log("s");
          });
      }
      })()

    }, [])
    
    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    return(
        <View style={styles.wrapper}>
            <CustomInput value={loginValue} setValue={setLoginValue} placeholder={"логин"} secureTextEntry={false}/>
            <CustomInput value={passwordValue} setValue={setPasswordValue} placeholder={"пароль"} secureTextEntry={true}/>
            {
          error ? <Text style={styles.error}>
          Неверный логин или пароль, или Ваш аккаунт не подтвержден!
        </Text> : false
        }
            <CustomButton style={styles.button} text='Вход' onPress={() => handleSignIn(loginValue, passwordValue)}/>
            <GoSignUp setError={setError} navigation={navigation} />
            <CustomVerl  modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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