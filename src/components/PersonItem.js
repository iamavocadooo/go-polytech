import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const PersonItem = ({surname, nickName, name, dadname, userId, setSelectedUser}) => {
    
    return(
            <TouchableOpacity style={styles.wrapper} onPress={() => setSelectedUser(userId)}>
                <Text>{nickName == "" ? name + " " + surname : nickName}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        height: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: 20


    }
})