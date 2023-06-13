import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ChatItem = ({chatId, name, setChat}) => {
    
    return(
            <TouchableOpacity activeOpacity={0.8} onPress={() => setChat(chatId)} style={styles.wrapper}>
                <Text>{name}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        marginTop: 3,
        elevation: 2,
        height: 65,
        backgroundColor: 'white'
    }
})