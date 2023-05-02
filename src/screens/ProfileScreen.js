import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { ref } from "firebase/storage";
import { CardList } from "../components/CardList";
import { Image, StyleSheet, Text, View } from "react-native";
import { THEME } from "../ui/Theme";
import logo from '../images/logo.jpg'

export const ProfileScreen = () => {
    
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View style={{position: 'absolute', borderRadius: 50,  marginLeft: 50, marginTop:100, width: 130, height: 130, elevation: 8}}>
                    <Image source={logo} resizeMode='cover' style={{width: 130, height: 130, borderRadius: 50}} />
                </View>
            </View>
            <View style={styles.content}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        backgroundColor: THEME.MAIN_COLOR,
        flex: 1,
        borderBottomEndRadius: 60,
        elevation: 8,
        shadowColor: 'blue',
    },
    content: {
        flex: 3
    }
})