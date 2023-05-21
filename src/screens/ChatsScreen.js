import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Chat } from "../components/Chat";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { database } from "../../firebase";
import { AppContext } from "../ContextApi/context";
import { ChatItem } from "../components/ChatItem";
import { CustomInput } from "../ui/CustomInput";
import { ChatScreen } from "./ChatScreen";

export const ChatsScreen = () =>{
    const[chats, setChats] = useState([])
    const[value, setValue] = useState('')
    const{userInfo} = useContext(AppContext)
    const[selectedChat, setSelectedChat] = useState(false)
    useEffect(() => {
        let chatsRef = doc(database, "chats", 'privateChats');
        const q = query()
        // (async() => {
        //     let q = await getDoc(chatsRef);
        //     console.log(q.data())
        // })()
        setChats(
        userInfo[0].chats.map((c) => ({
            id: c.chat,
            name: c.name

        }))
        )
        console.log(userInfo[0].chats)
        console.log(chats)

            // onSnapshot(q, (snapshot) => {
                
            //     setChats(snapshot.docs.filter((doc) => (doc.data().surname + ' ' + doc.data().name + ' ' + doc.data().dadname + doc.data().nickName).indexOf(value) >= 0 && doc.id != userInfo[0].id && doc.data().isStudent == true).slice(0, 5)
            //     .map((doc) => ({
            //          id: doc.id,
            //          name: doc.data().name,
            //          dadname: doc.data().dadname,
            //          surname: doc.data().surname
            //      })))
     
            //  console.log(snapshot)
            //  })
        
    }, [value])

    return selectedChat ? <ChatScreen chatId={selectedChat} setChat={setSelectedChat}/> :
        <View style={styles.wrapper}>
            <CustomInput value={value} setValue={setValue} placeholder={"Введите ФИО или ник"} secureTextEntry={false}/>
            <FlatList
                data={chats}
                renderItem={({item}) => <ChatItem setChat={setSelectedChat} chatId={item.id} name={item.name}/>}
                keyExtractor={(item) => item.id}
                
            />
        </View>
    
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        flex: 1
    }
})