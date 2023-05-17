import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Transfer = () => {
    return(
        <View style={styles.wrapper}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#919191', fontWeight: '500'}}>Кому: </Text>
                <Text style={{fontWeight: '500'}}>{'Садыков Султан Д.'}</Text>

            </View>
            <Text>{'0'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        
        }
})