import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export const CustomButton = ({text, onPress}) => {
    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        <Button title="df" onPress={onPress}/>

      </View>
    );
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