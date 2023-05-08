import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../ContextApi/context";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export const SDrawerContent = (props) => {
    const{deleteLocalEmail} = useContext(AppContext)
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
          <DrawerItem label="Режим аббитуриент" onPress={() => props.navigation.navigate('NoS', {screen: ' '})}/>
          <DrawerItem label="Выйти из аккаунта" onPress={() => handleSignOut()}/>
        </DrawerContentScrollView>
    )
}