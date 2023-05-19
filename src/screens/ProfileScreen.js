import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { ref } from "firebase/storage";
import { CardList } from "../components/CardList";
import { Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../ui/Theme";
import logo from '../images/logo.jpg'
import yoda from '../images/yoda.jpg'
import { AppContext } from "../ContextApi/context";
import { CustomModalProfile } from "../ui/CustomModalProfile";
import { CustomDrawerBottom } from "../ui/CustomDrawerBottom";

export const ProfileScreen = () => {
    const{userInfo, f} = useContext(AppContext)
    const[modalVisible, setModalVisible] = useState(false)
    
    
    // Function to close the bottom sheet
    

    return (
      <View style={styles.wrapper}>
        <CustomModalProfile modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <CustomDrawerBottom/>
        <View style={styles.header}>
          <ImageBackground
            source={yoda}
            style={{ width: "100%", overflow: "hidden" }}
            resizeMode="cover"
          ></ImageBackground>
          <View
            style={{
              position: "absolute",
              borderRadius: 50,
              marginLeft: 50,
              marginTop: 100,
              width: 130,
              height: 130,
              elevation: 8,
            }}
          >
            <Image
              source={logo}
              style={{ width: 130, height: 130, borderRadius: 50 }}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.userInfo}>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Ник:</Text>
              <TouchableOpacity style={styles.info} activeOpacity={0.7} onPress={() => {setModalVisible(!modalVisible)}}>
                <Text>{userInfo[0].nickname}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Имя:</Text>
              <View style={styles.info}>
                <Text style={styles.text}>{userInfo[0].name}</Text>
              </View>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Фамилия:</Text>
              <View style={styles.info}>
                <Text style={styles.text}>{userInfo[0].surname}</Text>
              </View>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Отчество:</Text>
              <View style={styles.info}>
                <Text style={styles.text}>{userInfo[0].dadname}</Text>
              </View>
            </View>
            
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        backgroundColor: THEME.MAIN_COLOR,
        flex: 1,
        borderBottomEndRadius: 60,
        shadowColor: 'blue',
    },
    content: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userInfo: {
        height: '80%',
        width: '85%'
    },
    field: {
        width: '100%',
        borderWidth: 0,
        maxWidth: 335,
        marginBottom: 20,
    },
    info: {
        borderWidth: 0,
        height: 50,
        borderRadius: 25,
        padding: 14,
        elevation: 5,
        backgroundColor: 'white'

    },
    fieldName: {
        fontSize: 17,
        color: 'gray'
    },
    text: {
        color: '#919191',
        fontWeight: '600'
    }
})