import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import { CustomButton } from "../ui/CustomButton";
import { CustomInput } from "../ui/CustomInput";
import { GoSignIn } from "./GoSignIn";

export const SignUp = ({navigation}) => {
    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    const[confirmPasswordValue, setConfirmPasswordValue] = useState('');
    return (
      <View style={styles.wrapper}>
        <CustomInput
          value={loginValue}
          setValue={setLoginValue}
          placeholder={"логин"}
          secureTextEntry={false}
        />
        <CustomInput
          
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder={"пароль"}
          secureTextEntry={true}
        />
        <CustomInput
          style={styles.input}
          value={confirmPasswordValue}
          setValue={setConfirmPasswordValue}
          placeholder={"подтвердите пароль"}
          secureTextEntry={true}
        />
        <CustomButton style={styles.button} text="Регистрация" />
        <GoSignIn navigation={navigation}/>
      </View>
    );
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