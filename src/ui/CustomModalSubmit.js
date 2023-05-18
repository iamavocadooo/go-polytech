import React, { useContext, useState } from "react"
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CustomInput } from "./CustomInput";
import { doc } from "firebase/firestore";
import { database, storage } from "../../firebase";
import { AppContext } from "../ContextApi/context";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import { useAnimatedKeyboard } from "react-native-reanimated";
import { ref, uploadBytes } from "firebase/storage";

export const CustomModalSubmit = ({modalVisible, setModalVisible}) => {
    const[nickValue, setNickValue] = useState('');
    const{userInfo} = useContext(AppContext)

    const[file1, setFile1] = useState(null)
    const[file2, setFile2] = useState(null)
    const[file3, setFile3] = useState(null)

    const[uploading, setUploading] = useState(false)

    const pickFile1 = async() => {
      let result = await DocumentPicker.getDocumentAsync({})

      const source = {uri: result.uri}
      setFile1(source)
      setDoc1(source ? true : false)
      
    }

    const pickFile2 = async() => {
      let result = await DocumentPicker.getDocumentAsync({})
      
      console.log(result)

      const source = {uri: result.uri}
      setFile2(source)
      setDoc2(source ? true : false)
      
   
    }

    const pickFile3 = async() => {
      let result = await DocumentPicker.getDocumentAsync({})
      console.log(result)

      const source = {uri: result.uri}
      setFile3(source)
      setDoc3(source ? true : false)
   
    }

    const[doc1, setDoc1] = useState(false)
    const[doc2, setDoc2] = useState(false)
    const[doc3, setDoc3] = useState(false)

    const onSubmit = async() => {
      if(doc1 && doc2 && doc3){
        const response1 = await fetch(file1.uri)
        const blob1 = await response1.blob();

        const response2 = await fetch(file2.uri)
        const blob2 = await response2.blob();

        const response3 = await fetch(file3.uri)
        const blob3 = await response3.blob();
        
        const filename1 = file1.uri.substring(file1.uri.lastIndexOf('/') + 1)
        const filename2 = file2.uri.substring(file2.uri.lastIndexOf('/') + 1)
        const filename3 = file3.uri.substring(file3.uri.lastIndexOf('/') + 1)

        let storageRef1 = ref(storage, "images/" + filename1)
        let storageRef2 = ref(storage, "images/" + filename2)
        let storageRef3 = ref(storage, "images/" + filename3)
        var metadata1 = {
          customMetadata: {
              "Test": "value",
              "Test1": 'sdas'
          },
      }

      var metadata2 = {
        customMetadata: {
            "Test": "value",
            "Test1": 'sdas'
        },
    }

    var metadata3 = {
      customMetadata: {
          "Test": "value",
          "Test1": 'sdas'
      },
  }

        uploadBytes(storageRef1, blob1, metadata1)
        uploadBytes(storageRef2, blob2, metadata2)
        uploadBytes(storageRef3, blob3, metadata3)

        setUploading(false)

        setFile1(null)
        setFile2(null)
        setFile3(null)

        setDoc1(false)
        setDoc2(false)
        setDoc3(false)

        console.log('Ura')
      } else{
        Alert.alert("Не все файлы загружены")
      }
    }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.docview}>
              <Text style={styles.textStyle}>1. Загрузите аттестат</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={pickFile1} activeOpacity={0.5} style={[styles.button, styles.buttonClose]}>
                <AntDesign name="addfile" size={24} color="white" />
              </TouchableOpacity>
              {doc1 ? <Text style={styles.notError}>Загружен</Text> : <Text style={styles.error}>*Не загружен</Text>}
              </View>
            </View>
            <View style={styles.docview}>
              <Text style={styles.textStyle}>
                2. Загрузите свидетельство о рождении или удостоверение
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={pickFile2} activeOpacity={0.5} style={[styles.button, styles.buttonClose]}>
                <AntDesign name="addfile" size={24} color="white" />
              </TouchableOpacity>
              {doc2 ? <Text style={styles.notError}>Загружен</Text> : <Text style={styles.error}>*Не загружен</Text>}
              </View>
            </View>
            <View style={styles.docview}>
              <Text style={styles.textStyle}>
                3. Загрузите свидетельство о рождении или удостоверение
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={pickFile3} activeOpacity={0.5} style={[styles.button, styles.buttonClose]}>
                <AntDesign name="addfile" size={24} color="white" />
              </TouchableOpacity>
              {doc3 ? <Text style={styles.notError}>Загружен</Text> : <Text style={styles.error}>*Не загружен</Text>}
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: '100%',
              }}
            >
              <Pressable
                style={[
                  styles.buttonSend,
                  {
                    alignItems: "center",
                    width: 100,
                    justifyContent: "center",
                    backgroundColor: '#ef4848'
                  },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ color: "white", margin: 10, fontWeight: '700' }}>Отмена</Text>
              </Pressable>
              <Pressable
              
                style={[
                  styles.buttonSend,
                  styles.buttonClose,
                  {
                    alignItems: "center",
                    width: 100,
                    justifyContent: "center",
                    backgroundColor: '#04d272'
                  },
                ]}
                onPress={() => {
                  onSubmit() 
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ color: "white", margin: 10, fontWeight: '700' }}>
                  Отправить
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
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
      width: '90%',
      borderRadius: 5,
      padding: 35,
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
      borderRadius: 5,
      width: 48,
      padding: 10,
      elevation: 2,
      marginRight: 20
    },
    buttonSend: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      elevation: 2,
    },
   
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      marginBottom: 20
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    docview: {
      // flexDirection: "row",
      // justifyContent: "space-between",
      width: '100%',
      // alignItems: 'center',
      marginBottom: 40
    },
    notError: {
      color: '#05b310',
      fontWeight: '700'
    },
    error: {
      color: '#cd0e1b',
      fontWeight: '700'
    },
    
  });