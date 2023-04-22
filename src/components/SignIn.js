import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { THEME } from "../ui/Theme";
import { CustomInput } from "../ui/CustomInput";
import { CustomButton } from "../ui/CustomButton";
import { GoSignUp } from "./GoSignUp";


export const SignIn = ({navigation}) => {
    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    return(
        <View style={styles.wrapper}>
            <CustomInput value={loginValue} setValue={setLoginValue} placeholder={"логин"} secureTextEntry={false}/>
            <CustomInput style={styles.input} value={passwordValue} setValue={setPasswordValue} placeholder={"пароль"} secureTextEntry={true}/>
            <CustomButton style={styles.button} text='Вход'/>
            <GoSignUp navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        alignItems: 'center',
        height:230,
        maxWidth: 350,
        borderWidth: 0
    },
    input: {
        marginBottom: 30
    }
})