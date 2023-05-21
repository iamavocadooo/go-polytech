import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ChatItem = ({chatId, name, setChat}) => {
    
    return(
            <TouchableOpacity onPress={() => setChat(chatId)} style={styles.wrapper}>
                <Text>{name}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        borderWidth: 1,
        height: 60,
        backgroundColor: '#d8a2a5'

    }
})