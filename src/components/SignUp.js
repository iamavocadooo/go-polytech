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
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [dadname, setDadname] = useState('')
  const [studentPhone, setStudentPhone] = useState('')
  const [parentPhone, setParentPhone] = useState('')
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
    if (name == '' && name == ' ' && surname == '' && surname == ' ' && studentPhone.length == 11 && parentPhone.length == 11) {
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
          name:name,
          surname: surname,
          dadname: dadname,
          chats: [],
          posts: [],
          isStudent: false,
          nickName: '',
          groupName: '',
          address: '',
          number: studentPhone,
          parentNumber: parentPhone
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
        <CustomInput
          value={name}
          setValue={setName}
          placeholder={"Имя*"}
          secureTextEntry={false}
        />
        <CustomInput
          value={surname}
          setValue={setSurname}
          placeholder={"Фамилия*"}
          secureTextEntry={false}
        />
        <CustomInput
          value={dadname}
          setValue={setDadname}
          placeholder={"Отчество"}
          secureTextEntry={false}
        />
        <View style={styles.container}>
        <MaskedTextInput
        placeholder="Номер телефона*"
        mask="+7-999-999-99-99"
        value={studentPhone}
        onChangeText={(rawTextm, text) => {
          setStudentPhone(text);
          console.log(studentPhone)
        }}
        style={styles.input}
        keyboardType="numeric"
      />
        </View>
        <View style={styles.container}>
        <MaskedTextInput
        placeholder="Номер родителя*"
        mask="+7-999-999-99-99"
        value={parentPhone}
        onChangeText={(rawText) => {
          setParentPhone(rawText);
        }}
        style={styles.input}
        keyboardType="numeric"
      />
        </View>
        
        <CustomInput
          value={loginValue}
          setValue={setLoginValue}
          placeholder={"логин"}
          secureTextEntry={false}
        />
        {/* <CustomInput
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder={"Номер телефона"}
          secureTextEntry={true}
        /> */}
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
    },
    container: {
      justifyContent: 'center',
      backgroundColor: 'white',
      width: '100%',
      height: 50,

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,


      paddingHorizontal: 10,
      marginVertical: 5
  },
})