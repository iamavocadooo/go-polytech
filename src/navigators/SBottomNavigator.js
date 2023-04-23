import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colledge } from '../screens/ColledgeScreen';
import { SubmitAppScreen } from '../screens/SubmitAppScreen';
import { SignInScreen } from '../screens/SignInScreen';
import {Ionicons, Entypo, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export const SBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 65 },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#e8e8e8",
        tabBarActiveTintColor: "#3B71F3",
      }}
    >
      <Tab.Screen
        name="CG"
        component={Colledge}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="S"
        component={SubmitAppScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ss"
        component={SubmitAppScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-cash" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sa"
        component={SubmitAppScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}