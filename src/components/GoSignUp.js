import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const GoSignUp = ({navigation, setError}) => {
    return (
      <View style={styles.wrapper}>
        <Text>У Вас нет аккаунта? </Text>
        <Pressable
          style={{ height: 30, justifyContent: "flex-start", borderWidth: 0}}
          onPress={() => {setError(false); navigation.navigate("SignUp")}}
        >
          <Text style={styles.text}>Регистрация</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    text: {
        color: '#3B71F3',
        fontWeight: "bold",
    }
})