import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const PersonItem = ({surname, name, dadname, userId, setSelectedUser}) => {
    
    return(
            <TouchableOpacity style={styles.wrapper} onPress={() => setSelectedUser(true)}>
                <Text>{surname + name + dadname + " " + userId}</Text>
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