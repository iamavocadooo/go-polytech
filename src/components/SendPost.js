import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";

export const SendPost = () => {


    return(
        <TouchableOpacity style={styles.button}>
            <Entypo name="camera" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 20
    }
})