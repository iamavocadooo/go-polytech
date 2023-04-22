import React from "react";
import { AuthScreen, SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="Login" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
}