import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from "../ui/CustomDrawer";
import { SBottomNavigator } from "../navigators/SBottomNavigator";
import { SDrawerContent } from "../components/SDrawerContent";

const Drawer = createDrawerNavigator();

export const SNavigation = () => {
    return (
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <CustomDrawer size={24} name="menu" navigation={navigation} />,
        })}
        drawerContent={(props) => <SDrawerContent {...props} />}
      >
        <Drawer.Screen name=" " options={{drawerLabel: 'Главная'}}  component={SBottomNavigator} />
      </Drawer.Navigator>
    );
}