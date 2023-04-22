import React from "react";
import { AuthScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthNavigation } from "./AuthNavigation";
import { NoSBottomNavigator } from "../navigators/NoSBottomNavigator";
import { Colledge } from "../screens/ColledgeScreen";

const Drawer = createDrawerNavigator();

export const NoSNavigation = () => {
    return (
      <Drawer.Navigator screenOptions={{}}>
        <Drawer.Screen name="No" component={NoSBottomNavigator} />
        <Drawer.Screen name="Ck" component={Colledge} />
      </Drawer.Navigator>
    );
}