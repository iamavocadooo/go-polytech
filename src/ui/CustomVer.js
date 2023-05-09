import React, { useState } from "react"
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { CustomInput } from "./CustomInput";

export const CustomVerl = ({modalVisible, setModalVisible, navigation}) => {
    
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Ваш аккаунт не верифецирован!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {() => setModalVisible(false)}}>
              <Text style={styles.textStyle}>Хорошо</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      width: 345,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      width: 100,
      marginTop: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });