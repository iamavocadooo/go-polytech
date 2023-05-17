 import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { ref } from "firebase/storage";
import { CardList } from "../components/CardList";
import { StyleSheet, Text, View } from "react-native";
import { BankScore } from "../components/BankScore";
import { LinearGradient } from "expo-linear-gradient";
import { Transfer } from "../components/Transfer";
import { CollegePay } from "../components/CollegePay";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BankScreen = () => {
    const[visible, setVisible] = useState(true)
    return (
      <View style={styles.wrapper}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#4861e0", "#04b2be"]}
          style={styles.grad}
        >
          <BankScore />
          <CollegePay />
        </LinearGradient>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '90%'}}>
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonT} onPress={() => {setVisible(true)}}>
          <Text style={styles.text}>Переводы</Text>
        </TouchableOpacity>    
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonT} onPress={() => {setVisible(false)}}>
          <Text style={styles.text}>Платежи</Text>
        </TouchableOpacity>
        </View>
        {
            visible ? 
            <View style={styles.wrapperT}>
            <Transfer />
          </View> :
          <Text>pay</Text>
        }
       
      </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  grad: {
    height: 200,
    width: "100%",
    maxWidth: 370,
    borderRadius: 28,
    elevation: 5,
    marginBottom: 40,
  },
  text: {
    color: "#d4d4d4",
    fontWeight: "700",
  },
  wrapperT: {
    marginTop: 20,
    width: "100%",
    maxWidth: 350,
  },
  buttonT: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});