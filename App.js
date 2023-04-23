import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { NoSNavigation } from './src/navigation/NoSNavigation';
import { SNavigation } from './src/navigation/SNavigation';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <NoSNavigation /> */}
        <SNavigation/>
        {/* <AuthNavigation/> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
