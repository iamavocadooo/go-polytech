import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NoSBottomNavigator } from "../navigators/NoSBottomNavigator";
import { CustomDrawer } from "../ui/CustomDrawer";
import { NoSDrawerContent } from "../components/NoSDrawerContent";

const Drawer = createDrawerNavigator();

export const NoSNavigation = () => {
    return (
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: () => <CustomDrawer size={24} name="menu" navigation={navigation} />,
        })}
        drawerContent={(props) => <NoSDrawerContent {...props} />}
      >
        <Drawer.Screen name=" " options={{drawerLabel: 'Главная'}}  component={NoSBottomNavigator} />
      </Drawer.Navigator>
    );
}