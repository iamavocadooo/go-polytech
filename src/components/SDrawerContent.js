import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../ContextApi/context";

export const SDrawerContent = (props) => {
    const {setLogin} = useContext(AppContext)
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Режим а" onPress={() => setLogin('2')}/>
          <DrawerItem label="Выйти из аккаунта" onPress={() => setLogin('1')}/>
        </DrawerContentScrollView>
    )
}