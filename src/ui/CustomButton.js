import React from "react";
import { Button, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";


export const CustomButton = ({text, onPress}) => {
    return (
      <View style={{width: '100%'}}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
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