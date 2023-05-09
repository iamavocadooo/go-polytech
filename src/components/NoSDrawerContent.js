import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import { AppContext } from "../ContextApi/context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { CustomModal } from "../ui/CustomModal";

export const NoSDrawerContent = (props) => {
  const{deleteLocalEmail, userInfo}=useContext(AppContext)
  const[modalVisible, setModalVisible] = useState(false)
  const checkStudentAccess = () => {
    console.log(userInfo)
    if(!userInfo[0].isStudent){
      setModalVisible(true)
    }
    else{
      props.navigation.navigate('S', {screen: ' '})
    }
  }
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      deleteLocalEmail()
    })
    .catch(error => alert(error.message))
  }
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Режим студента" onPress={() => checkStudentAccess() }/>
          <DrawerItem label="Выйти из аккаунта" onPress={handleSignOut}/>
          <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={props.navigation}/>
          
        </DrawerContentScrollView>
    )
}
// props.navigation.navigate("S", {screen: ' '})
