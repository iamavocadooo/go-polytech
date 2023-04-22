import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


export const CustomButton = ({onPress,text}) => {
    return(
        <Pressable style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})