import React, { useState } from "react"
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { CustomInput } from "./CustomInput";

export const CustomModal = ({modalVisible, setModalVisible, navigation}) => {
    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(authIIN, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigation.navigate("S", {screen: ' '})
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
    }
    const[loginValue, setLoginValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
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
            <CustomInput placeholder={'логин'} value={loginValue} setValue={setLoginValue} secureTextEntry={false}/>
            <CustomInput placeholder={'пароль'} value={passwordValue} setValue={setPasswordValue} secureTextEntry={true}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible)
                navigation.navigate('S', {screen: ' '})
                }}>
              <Text style={styles.textStyle}>Войти</Text>
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