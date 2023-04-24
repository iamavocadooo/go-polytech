import React from "react";
import { AuthScreen, SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigation } from "./AuthNavigation";
import { NoSNavigation } from "./NoSNavigation";
import { SNavigation } from "./SNavigation";

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="NoS" component={NoSNavigation} />
          <Stack.Screen name="S" component={SNavigation} />
        </Stack.Navigator>
    );
}