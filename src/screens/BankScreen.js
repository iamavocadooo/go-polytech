import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { ref } from "firebase/storage";
import { CardList } from "../components/CardList";
import { StyleSheet, View } from "react-native";
import { BankScore } from "../components/BankScore";

export const BankScreen = () => {
    
    return(
        <View style={styles.wrapper}>
            <BankScore/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
})