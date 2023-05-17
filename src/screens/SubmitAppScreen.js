import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, TouchableOpacity } from "react-native";
import { CustomDrawer } from "../ui/CustomDrawer";
import Poly from '../images/poly.jpeg'
import { Button } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from "expo-linear-gradient";
// import Carousel from "react-native-snap-carousel";
import { sliderData } from "../../data";
import { BannerSlider } from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";

export const SubmitAppScreen = ({navigation}) => {
  const file = async() => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri)
  }


  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  }
    return (
      <View style={styles.wrapper}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#BA60FF", "#5C6FFA"]}
          style={styles.background}
        ></LinearGradient>
        <Text style={styles.headerText}>Зачем Вам стоит поступать к нам?</Text>
        <Text style={styles.text}>- Cовременный колледж</Text>
        <Text style={styles.text}>- Cтать настоящим профессионалом</Text>
        <Text style={styles.text}>- Гранты</Text>
        <Text style={styles.text}>- Поступление на основе аттестатов</Text>
        {/* <Carousel
          ref={(c) => this._carousel = c}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth-45}
          itemWidth={300}
        /> */}
        
        <TouchableOpacity style={styles.button}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#00c7c0", "#21acfd"]}
          style={{flex: 1, borderRadius: 30, elevation: 20, shadowColor: '#21acfd', shadowOffset: 1, shadowRadius: 10, justifyContent: 'center', alignItems: 'center'}}
        >
          <Text style={styles.textStyle}>Оставить заявку</Text>
        </LinearGradient>
        </TouchableOpacity>
      </View>
    );
    }
    
    const styles = StyleSheet.create({
      wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
      },
      headerText:{
        marginTop: 30,
        color: 'white',
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 40
      },
      text:{
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
      },
      button: {
        marginTop: 100,
        height: 60,
        width: '100%',
        borderRadius: 30
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    }})