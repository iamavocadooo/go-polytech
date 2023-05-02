import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const GoSignIn = ({navigation}) => {
    return (
      <View style={styles.wrapper}>
        <Text>У Вас уже есть аккаунт? </Text>
        <Pressable
          style={{ height: 30, justifyContent: "flex-start", borderWidth: 0}}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text}>Вход</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: '100%',
        marginTop: 20,
        justifyContent: 'center'
    },
    text: {
        color: '#3B71F3',
        fontWeight: "bold"
    }
})