import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { collection, onSnapshot, orderBy, query, where  } from "firebase/firestore";

import { database } from "../../firebase";
import { CustomInput } from "../ui/CustomInput";
import { PersonItem } from "../components/PersonItem";
import { AppContext } from "../ContextApi/context";
import { PersonScreen } from "./PersonScreen";

export const PeopleScreen = ({navigation}) => {
    const[users, setUsers] = useState([])
    const{userInfo} = useContext(AppContext)
    const[value, setValue] = useState('')
    const[selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        let usersRef = collection(database, "users");
        let q = query(usersRef);
        console.log('s')
        onSnapshot(q, (snapshot) => {
                
           setUsers(snapshot.docs.filter((doc) => (doc.data().surname + ' ' + doc.data().name + ' ' + doc.data().dadname + doc.data().nickName).indexOf(value) >= 0 && doc.id != userInfo[0].id && doc.data().isStudent == true).slice(0, 5)
           .map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                dadname: doc.data().dadname,
                surname: doc.data().surname,
                nickName: doc.data().nickName
            })))
        })
        
    }, [value])

    return selectedUser ? <PersonScreen navigation={navigation} userId={selectedUser} setSelectedUser={setSelectedUser}/> :
        
        <View style={styles.wrapper}>
            <CustomInput value={value} setValue={setValue} placeholder={"Введите ФИО или ник"} secureTextEntry={false}/>
            <FlatList
                data={users}
                renderItem={({item}) => <PersonItem setSelectedUser={setSelectedUser} nickName={item.nickName} surname={item.surname} name={item.name} dadname={item.dadname} userId={item.id}/>}
                keyExtractor={(item) => item.id}
                
            />
        </View>
        
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
    }
})