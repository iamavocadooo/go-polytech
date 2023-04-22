import React from "react";
import { View, TextInput, StyleSheet } from "react-native";


export const CustomInput = ({style, value, setValue, placeholder, secureTextEntry}) => {
    return (
      <View style={{...styles.container, ...style}}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          autoCapitalize='none'
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 50,

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,


        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: { 
        
    }
})