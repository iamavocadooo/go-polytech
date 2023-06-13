import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { AppProvider } from './src/ContextApi/context';
import { RootNavigation } from './src/navigation/RootNavigation';



export default function App() {
  let content = <AuthNavigation/>
  // 
  return (
      <AppProvider>
        <RootNavigation/>
      </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
