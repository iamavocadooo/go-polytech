import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { CustomDrawer } from "../ui/CustomDrawer";
import { CardList } from "../components/CardList";

export const AboutColledgeScreen = ({}) => {
  return (
    <View>
      <CardList/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop:45,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  }
})