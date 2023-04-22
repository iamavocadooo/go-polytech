import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const GoSignUp = ({navigation}) => {
    return (
      <View style={styles.wrapper}>
        <Text>У Вас нет аккаунта? </Text>
        <Pressable
          style={{ height: 30, justifyContent: "flex-start", borderWidth: 0}}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text}>Регистрация</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: '100%',
        marginTop: 20
    },
    text: {
        color: '#3B71F3',
        fontWeight: "bold"
    }
})