import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat/lib";
import {collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore'
import { auth, database } from "../../firebase";
import { Button, View } from "react-native";

export const ChatScreen = ({chatId, setChat}) => {
    const [messages, setMessages] = useState([])

    useLayoutEffect(() => {
        const collectionRef = collection(database, 'chats', 'privateChats', chatId)
        const q = query(collectionRef, orderBy('createdAt', 'desc'))

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log('snapshot')
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            )
        })
        return () => unsubscribe();
    }, [])

    const onSend = useCallback((messages=[]) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

        const {_id, createdAt, text, user} = messages[0];
        addDoc(collection(database, 'chats', 'privateChats', chatId), {
          _id,
          createdAt,
          text,
          user,
        });
    }, [])

    return(
        <View style={{flex: 1}}>
            <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{_id: auth?.currentUser?.email}}/>
            <Button title="ds" onPress={() => setChat(false)}/>
        </View>
        
    )
}