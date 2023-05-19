import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SBottomNavigator } from "../navigators/SBottomNavigator";
import { SDrawerContent } from "../components/SDrawerContent";
import { CustomDrawerB } from "../ui/CustomDrawerB";

const Drawer = createDrawerNavigator();

export const SNavigation = () => {
    return (
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          drawerPosition: 'right',
          headerLeft: () => <CustomDrawer size={24} name="menu" navigation={navigation} />,
        })}
        drawerContent={(props) => <SDrawerContent {...props} />}
      >
        <Drawer.Screen name=" " options={{drawerLabel: 'Главная', headerShown: false}}  component={SBottomNavigator} />
      </Drawer.Navigator>
    );
}