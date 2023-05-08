import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Chat } from "../components/Chat";
import { ChatScreen } from "./ChatScreen";
import { AppContext } from "../ContextApi/context";

export const ChatsScreen = () =>{
    const[chatScreen, setChatScreen] = useState('sdf')
    const{userInfo} = useContext(AppContext)
    return (
      <View style={styles.wrapper}>
        {chatScreen ? (
          <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => (
              <Todo
                todo={item}
                key={item.id}
                onRemove={removeTodo}
                onOpen={openTodo}
              />
            )}
          />
        ) : (
          <ChatScreen />
        )}
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        flex: 1
    }
})