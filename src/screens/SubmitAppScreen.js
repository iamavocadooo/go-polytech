import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { CustomDrawer } from "../ui/CustomDrawer";
import Poly from '../images/poly.jpeg'
import { Button } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../../data";
import { BannerSlider } from "../components/BannerSlider";
import * as ImagePicker from 'expo-image-picker'
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { CustomModalSubmit } from "../ui/CustomModalSubmit";

export const SubmitAppScreen = ({navigation}) => {
  const[modalVisible, setModalVisible] = useState(false)


  const file = async() => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri)
  }

  const image = async() => {
    let result = await ImagePicker.launchCameraAsync({})
    alert(result.uri)
  }


  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  }
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#BA60FF", "#5C6FFA"]}
          style={styles.background}
        >
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.wrapper}>
              <Text style={styles.headerText}>
                Зачем Вам стоит поступать к нам?
              </Text>
              <Text style={styles.text}>- Cовременный колледж</Text>
              <Text style={styles.text}>- Cтать настоящим профессионалом</Text>
              <Text style={styles.text}>- Гранты</Text>
              <CustomModalSubmit modalVisible={modalVisible} setModalVisible={setModalVisible}/>
              <Text style={{...styles.text, marginBottom: 50}}>
                - Поступление на основе аттестатов
              </Text>
              <Carousel
                ref={(c) => (this._carousel = c)}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={windowWidth - 45}
                itemWidth={300}
              />
        

              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={["#00c7c0", "#21acfd"]}
                  style={{
                    flex: 1,
                    borderRadius: 30,
                    elevation: 20,
                    shadowColor: "#21acfd",
                    shadowOffset: 1,
                    shadowRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.textStyle}>Оставить заявку</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
    }
    
    const styles = StyleSheet.create({
      wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
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