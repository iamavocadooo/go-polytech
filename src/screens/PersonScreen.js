import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { database } from "../../firebase";

export const PersonScreen = ({userId, setSelectedUser, navigation}) => {

    const [person, setPerson] = useState(null)

const getPersonInfo = async() => {
    const docRef = doc(database, 'users', userId)
    const user = await getDoc(docRef)
    console.log(user.data())
    setPerson(user.data())
    return user
}

    useLayoutEffect(() => {
        getPersonInfo().then((user) => {
            navigation.setOptions({ 
                headerTitle: user.data().nickName
            }) 
        })
        
    }, [])
   
    return(
        <View>
            <Text>{userId}</Text>
            <Text>{person ? person.name : null}</Text>
            <Button title="back" onPress={() => {
                navigation.setOptions({
                    headerTitle: "Люди"
                })
                setPerson(null)
                setSelectedUser(null)}}/>
        </View>
    )
}
