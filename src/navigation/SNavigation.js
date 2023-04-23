import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "../components/DrawerContent";
import { CustomDrawer } from "../ui/CustomDrawer";
import { SBottomNavigator } from "../navigators/SBottomNavigator";

const Drawer = createDrawerNavigator();

export const SNavigation = () => {
    return (
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <CustomDrawer size={24} name="menu" navigation={navigation} />,
        })}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name=" " options={{drawerLabel: 'Главная'}}  component={SBottomNavigator} />
      </Drawer.Navigator>
    );
}