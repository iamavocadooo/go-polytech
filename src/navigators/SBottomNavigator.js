import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colledge } from '../screens/AboutColledgeScreen';
import { SubmitAppScreen } from '../screens/SubmitAppScreen';
import { SignInScreen } from '../screens/SignInScreen';
import {Ionicons, FontAwesome, FontAwesome5, Entypo, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import { ChatScreen } from '../screens/ChatScreen';
import { LentaScreen } from '../screens/LentaScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BankScreen } from '../screens/BankScreen';
import { ChatsScreen } from '../screens/ChatsScreen';
import { PeopleScreen } from '../screens/PeopleScreen';
import { CustomDrawerB } from '../ui/CustomDrawerB';

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
        name="Lenta"
        component={LentaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{
          headerShown: true,
          headerTitle: 'Люди',
          headerTitleAlign: 'center',
          headerStyle: {height: 75},
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bank"
        component={BankScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-cash" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitle: 'Профиль',
          headerTitleAlign: 'center',
          headerStyle: {height: 75},
          headerRight: () =>  <CustomDrawerB size={24} name="menu"/>,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}