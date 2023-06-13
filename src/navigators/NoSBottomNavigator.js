import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutColledgeScreen } from '../screens/AboutColledgeScreen';
import { SubmitAppScreen } from '../screens/SubmitAppScreen';
import { SignInScreen } from '../screens/SignInScreen';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export const NoSBottomNavigator = () => {
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
        component={AboutColledgeScreen}
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
            <MaterialCommunityIcons name="application-edit" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}