import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../ContextApi/context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { AuthNavigation } from "./AuthNavigation";
import { AppNavigation } from "./AppNavigation";


export const RootNavigation = () => {
    const {user, setUser} = useContext(AppContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            async authenticadUser => {
                authenticadUser ? setUser(authenticadUser) : setUser(null);
                setLoading(false)
            })
            return () => unsubscribe();
    }, [user]);
    if (loading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    return(
        <NavigationContainer>
            {user ? <AppNavigation/> : <AuthNavigation/>}
        </NavigationContainer>
    )
}