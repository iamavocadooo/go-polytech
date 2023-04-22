import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colledge } from '../screens/ColledgeScreen';
import { SubmitAppScreen } from '../screens/SubmitAppScreen';
import { SignInScreen } from '../screens/SignInScreen';

const Tab = createBottomTabNavigator();

export const NoSBottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="CG" component={Colledge} />
      <Tab.Screen name="S" component={SubmitAppScreen} />
    </Tab.Navigator>
  );
}