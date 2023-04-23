import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { NoSNavigation } from './src/navigation/NoSNavigation';
import { SNavigation } from './src/navigation/SNavigation';
import { AppContext, AppProvider } from './src/ContextApi/context';
import { useContext } from 'react';
import Main from './src/main/Main';
import { AppNavigation } from './src/navigation/AppNavigation';



export default function App() {
  let content = <AuthNavigation/>
  // 
  return (
    <View style={styles.container}>
      <AppProvider>
        <NavigationContainer>
          <AppNavigation/>
        </NavigationContainer>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
