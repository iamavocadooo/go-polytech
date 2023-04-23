import React from "react";
import { AuthScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthNavigation } from "./AuthNavigation";
import { NoSBottomNavigator } from "../navigators/NoSBottomNavigator";
import { Colledge } from "../screens/ColledgeScreen";
import { DrawerContent } from "../components/DrawerContent";
import { CustomDrawer } from "../ui/CustomDrawer";

const Drawer = createDrawerNavigator();

export const NoSNavigation = () => {
    return (
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <CustomDrawer size={24} name="menu" navigation={navigation} />,
        })}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name=" " options={{drawerLabel: 'Главная'}}  component={NoSBottomNavigator} />
      </Drawer.Navigator>
    );
}