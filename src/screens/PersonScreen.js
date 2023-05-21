import { addDoc, collection, doc, getDoc, onSnapshot, query, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { auth, database } from "../../firebase";
import Yoda from "../images/yoda.jpg"
import { CustomInput } from "../ui/CustomInput";
import { AppContext } from "../ContextApi/context";

export const PersonScreen = ({userId, setSelectedUser, navigation}) => {
    const{userInfo, updateChats} = useContext(AppContext)
    const [person, setPerson] = useState(null)
    const[messageItemVisible, setMessageItemVisible] = useState(false)

    const getPersonInfo = async() => {
        const docRef = doc(database, 'users', userId)
        console.log(docRef)
        const user = await getDoc(docRef)
        console.log(user.data())
        setPerson(user.data())
        console.log(userInfo[0].name)
        return user
    }
    const colRef = collection(database, 'chats', 'privateChats', userInfo[0].id + userId)
    const colRef2 = collection(database, 'chats', 'privateChats', userId + userInfo[0].id)


    useLayoutEffect(() => {
        onSnapshot(query(colRef), (snapshot) => {
            onSnapshot(query(colRef2), (snapshotT) => {
                if (snapshot.docs.length == 0 && snapshotT.docs.length == 0) {
                    setMessageItemVisible(true)
                }
                else{
                    setMessageItemVisible(false)
                }
            })
        })
        getPersonInfo().then((user) => {
            navigation.setOptions({ 
                headerTitle: user.data().nickName
            }) 
        })
        
    }, [messageItemVisible])
    const sendMessage = async() => {
        const colRef = collection(database, 'chats', 'privateChats', userInfo[0].id + userId)
        onSnapshot(query(colRef), (snapshot) => {
            console.log(snapshot.docs.length)
        })
        addDoc(colRef, {
            text: messageValue,
            createdAt: new Date(),
            user: {_id: auth?.currentUser?.email}
        })
        const docRef = doc(database, "users", userId);
        const docSnap = getDoc(docRef);
        console.log(userInfo[0].id + userId)
        updateChats(userInfo[0].id + userId, (await docSnap).data().name, userId, userInfo[0].name)

        
    }

    const[messageValue, setMessageValue] = useState('')

    return (
      <View style={styles.wrapper}>
        <Image
          source={Yoda}
          style={{
            margin: 30,
            height: 115,
            width: 115,
            transform: [{ rotate: "-5deg" }],
            borderWidth: 4,
            borderColor: "white",
          }}
        />
        <Text>{userId}</Text>
        <Text>{person ? person.name : null}</Text>
        {messageItemVisible ? 
        <View>
          <CustomInput
            value={messageValue}
            setValue={setMessageValue}
            placeholder={"Сообщение"}
            secureTextEntry={false}
          />
          <Button onPress={sendMessage} title="send" />
        </View> : false}

        <Button title="back" onPress={() => {
                navigation.setOptions({
                    headerTitle: "Люди"
                })
                setPerson(null)
                setSelectedUser(null)}}/>
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'
    }
})