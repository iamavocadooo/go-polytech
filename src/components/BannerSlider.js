import React from "react";
import { Image, View } from "react-native";

export const BannerSlider = ({data}) => {
    return(
        <View>
            <Image source={data.image} style={{height: 220, width: 300, borderRadius: 10}}/>
        </View>
    )
}