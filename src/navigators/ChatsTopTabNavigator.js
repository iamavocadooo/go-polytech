import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {ChatsScreen} from '../screens/ChatsScreen'
import { GroupChatsScreen } from '../screens/GroupChatsScreen';
const Tab = createMaterialTopTabNavigator();

export const ChatsTopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Групповые чаты" component={GroupChatsScreen} />
    </Tab.Navigator>
  );
}