import React, { useContext, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { CustomDrawer } from "../ui/CustomDrawer";
import { CardList } from "../components/CardList";
import { AppContext } from "../ContextApi/context";

export const AboutColledgeScreen = ({}) => {
  const{f} = useContext(AppContext)
  useEffect(() => {
    f()
  }, [])
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