import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { CustomDrawer } from "../ui/CustomDrawer";
import Poly from '../images/poly.jpeg'
import { Button } from "react-native";
import DocumentPicker, {DocumentPickerUtil} from 'react-native-document-picker'

export const SubmitAppScreen = ({navigation}) => {
  const file = async() => {
    DocumentPicker.pick({
      type: [DocumentPicker.types.images]
    });
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