import React, { useCallback, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { ref } from "firebase/storage";
import { CardList } from "../components/CardList";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const BankScore = () => {
    
    return(
        // <View style={styles.wrapper}>
        //     <Text style={styles.text}>Баланс:</Text>
        //     <View style={styles.scoreWrapper}>
        //         <Text style={{...styles.text, color: 'black', marginLeft: 0, fontSize: 18, fontWeight: '700'}}>100000.00</Text>
        //     </View>
            
        // </View>
        
    //     <LinearGradient
    //     // Background Linear Gradient
    //     colors={['rgba(0,0,0,0.3)', 'transparent']}
    //     style={styles.background}
    //   />
        <LinearGradient
        // Button Linear Gradient
        colors={['#4861e0', '#1635d0']}
        style={styles.wrapper}>
       <Text style={styles.text}>Баланс:</Text>
             <View style={styles.scoreWrapper}>
                 <Text style={{...styles.text, color: 'black', marginLeft: 0, fontSize: 18, fontWeight: '700'}}>100000.00</Text>
             </View>
      </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#086abf",
        height: 70,
        borderRadius: 20,
        elevation: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    text: {
        marginLeft: 30,
        fontSize: 20,
        color: 'white',
        fontWeight: "800"
    },
    scoreWrapper: {
        backgroundColor: 'white',
        height: '100%',
        width: 120,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})