import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const CustomDrawer = ({name, size, navigation}) => {
    return (
        
      <View
        style={{ width: 60, alignItems: "center"}}
      >
        <MaterialCommunityIcons.Button
          activeOpacity={1}
          name={name}
          size={size}
          color="black"
          backgroundColor="#fff"
          height={40}
          onPress={() => navigation.openDrawer()}
        />
      </View>
    );
}