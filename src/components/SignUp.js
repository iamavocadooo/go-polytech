import React, {useContext, useState} from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { CustomButton } from "../ui/CustomButton";
import { CustomInput } from "../ui/CustomInput";
import { GoSignIn } from "./GoSignIn";
import { AppContext } from "../ContextApi/context";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { MaskedTextInput} from "react-native-mask-text";

export const SignUp = ({navigation}) => {
    const {f, setLocalEmail} = useContext(AppContext)
    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    const[error, setError] = useState(false)
    const[confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [phone, setPhone] = useState('');
    const minNumberofChars = 7;
    const maxNumberofChars = 20;
    const regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const handleSignUp = (email, password) => {
    if (passwordValue !== confirmPasswordValue) {
      setError(true)
        return false
    }
    if(passwordValue.length < minNumberofChars || password.length > maxNumberofChars){
      setError(true)
      return false
    }
    if(!regularExpression.test(passwordValue)) {
        setError(true)
        return false
    }
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        if (!auth.currentUser.emailVerified) {
          console.log('r')
          sendEmailVerification(auth.currentUser).then((response) => {
            console.log(response)
          } ).catch(error => {
            console.log(error)
          })
        }
        const user = userCredential.user;
        setError(false)
        addDoc(collection(database, "users"), {
          studentId: auth.currentUser.uid,
          name:'',
          surname: '',
          dadname: '',
          chats: [],
          posts: [],
          isStudent: false,
          nickName: '',
          groupName: ''
        })

        addDoc(collection(database, "bank"), {
          studentId: auth.currentUser.uid,
          bankScore: 0,
          studyPay: 0
        })
        f()

        setLocalEmail(email, password)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }
  const [maskedValue, setMaskedValue] = useState("");
  const [unMaskedValue, setUnmaskedValue] = useState("");

    return (
      <View style={styles.wrapper}>
        <MaskedTextInput
        mask="99/99/9999"
        onChangeText={(text, rawText) => {
          setMaskedValue(text);
          setUnmaskedValue(rawText);
        }}
        style={styles.input}
        keyboardType="numeric"
      />
        <CustomInput
          value={loginValue}
          setValue={setLoginValue}
          placeholder={"логин"}
          secureTextEntry={false}
        />
        <CustomInput
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder={"Номер телефона"}
          secureTextEntry={true}
        />
         <CustomInput
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder={"пароль"}
          secureTextEntry={true}
        />
         <CustomInput
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder={"пароль"}
          secureTextEntry={true}
        />
        <CustomInput
          value={confirmPasswordValue}
          setValue={setConfirmPasswordValue}
          placeholder={"подтвердите пароль"}
          secureTextEntry={true}
        />
        {
          error ? <Text style={styles.error}>
          Пароль должен быть не меньше 8 символов, содержать 1 специальный символ!
        </Text> : false
        }
        <CustomButton
          style={styles.button}
          text="Регистрация"
          onPress={() => {
            handleSignUp(loginValue, passwordValue);
          }}
        />

        <GoSignIn navigation={navigation} />
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        height:230,
        maxWidth: 350,
        borderWidth: 0,
    },
    error: {
      color: 'red',
      fontSize: 11,
      marginBottom: 20,
    }
})