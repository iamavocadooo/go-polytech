import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const Chat = () =>{
    return(
        <TouchableOpacity style={styles.wrapper}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 80,
        backgroundColor: 'lightblue',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5
    }
})