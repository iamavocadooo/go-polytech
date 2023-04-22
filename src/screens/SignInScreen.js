import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Logo from '../images/logo.jpg'
import { SignIn } from "../components/SignIn";


export const SignInScreen = ({navigation}) => {
    return(
        <View style={styles.wrapper}>
            <Image style={styles.logo} source={Logo} resizeMode="contain"/>
            <SignIn navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        height: '70%',
        borderColor: 'blue',
        borderWidth: 0,
        maxWidth: 300,
        maxHeight: 300
    }
})