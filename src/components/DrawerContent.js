import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { View, Text } from "react-native";

export const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Режим студента" />
          <DrawerItem label="Выйти из аккаунта" />
        </DrawerContentScrollView>
    )
}