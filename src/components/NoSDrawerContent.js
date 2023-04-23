import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../ContextApi/context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const NoSDrawerContent = (props) => {
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      props.navigation.replace("Auth", {screen: 'Login'})
    })
    .catch(error => alert(error.message))
  }
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Режим студента" onPress={() => props.navigation.navigate("S", {screen: ' '})}/>
          <DrawerItem label="Выйти из аккаунта" onPress={handleSignOut}/>
        </DrawerContentScrollView>
    )
}