import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../ContextApi/context';

export const CustomDrawerB = ({name, size, navigation }) => {
  const{handleOpenBottomSheet} = useContext(AppContext)
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
          // onPress={() =>handleOpenBottomSheet()}
          onPress={navigation.openDrawer}
        />
      </View>
    );
}