import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import DocumentPicker from "react-native-document-picker";
import { CustomDrawer } from "../ui/CustomDrawer";
import Poly from '../images/poly.jpeg'
import { Button } from "react-native";

export const SubmitAppScreen = ({navigation}) => {
  const file = async() => {
    try {
      const result = await DocumentPicker.show({
        type: 'application/pdf',
      });
      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err
      }
    }
  }
    return (
      <View style={styles.wrapper}>
        <Button title="sdasds" onPress={file}/>
      </View>
    );
    }
    
    const styles = StyleSheet.create({
      wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
      }
    })