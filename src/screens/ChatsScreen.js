import React from "react";
import { StyleSheet, View } from "react-native";
import { Chat } from "../components/Chat";

export const ChatsScreen = () =>{
    return(
        <View style={styles.wrapper}>
            <Chat />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        flex: 1
    }
})