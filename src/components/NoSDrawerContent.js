import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../ContextApi/context";

export const NoSDrawerContent = (props) => {
    const {setLogin} = useContext(AppContext)
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Режим студента" onPress={() => setLogin('3')}/>
          <DrawerItem label="Выйти из аккаунта" onPress={() => setLogin('1')}/>
        </DrawerContentScrollView>
    )
}