import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { collection, onSnapshot, query, where  } from "firebase/firestore";

import { database } from "../../firebase";

export const PeopleScreen = () => {
    
    const[users, setUsers] = useState([])
    const peopleFind = () => {
        let usersRef = collection(database, "users");
        let q = query(usersRef, where('name', '>=', 'Cултан'), where('name', '<=', 'Султан'));
        onSnapshot(q, (snapshot) => {
          setUsers(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              nickname: doc.data().nickName,
              surname: doc.data().surname,
              dadname: doc.data().dadname,
              isStudent: doc.data().isStudent
            }))
          );
        }
        )
        }
    console.log(users)
    return(
        <View style={styles.wrapper}>
            <Text>sdf</Text>
            <Button title="sda" onPress={() => peopleFind()}/>
            <FlatList
                data={users}
                renderItem={({item}) => <View><Text>{item.name}</Text></View>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: "center"
    }
})