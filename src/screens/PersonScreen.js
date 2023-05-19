import React from "react";
import { Button, Text, View } from "react-native";

export const PersonScreen = ({setSelectedUser}) => {
    return(
        <View>
            <Text>fads</Text>
            <Button title="back" onPress={() => setSelectedUser(null)}/>
        </View>
    )
}