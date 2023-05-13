import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { CustomDrawer } from "../ui/CustomDrawer";
import Poly from '../images/poly.jpeg'
import { Button } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from "expo-linear-gradient";

export const SubmitAppScreen = ({navigation}) => {
  const file = async() => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri)
  }
    return (
      <View style={styles.wrapper}>
        <LinearGradient
         // Background Linear Gradient
         colors={['#16d0ca', '#1635d0']}
         style={styles.background}>
        </LinearGradient>
        <Text style={styles.headerText}>Зачем Вам стоит поступать к нам?</Text>
        <Text style={styles.text}>современный колледж стать настоящим профессионалом своего ремесла, то оставтье заявку на поступление</Text>
        {/* <Button title="sdasds" onPress={file}/> */}
      </View>
    );
    }
    
    const styles = StyleSheet.create({
      wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
      },
      headerText:{
        marginTop: 30,
        color: 'white',
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 40
      },
      text:{
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },

    })