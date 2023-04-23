import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';


import { useContext } from 'react';
import { AuthNavigation } from '../navigation/AuthNavigation';
import { NoSNavigation } from '../navigation/NoSNavigation';
import { SNavigation } from '../navigation/SNavigation';
import { AppContext } from '../ContextApi/context';



export default function Main() {
  let content
  const {login} = useContext(AppContext)
  if (login === '1') {
    content = <AuthNavigation/>
  }else if(login === '2'){
    content = <NoSNavigation/>
  }else if(login === '3'){
    content = <SNavigation/>
  }
  return (
    <View style={{flex: 1}}>
        {content}
    </View>
  );
}
