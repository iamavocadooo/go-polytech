import { Button, StyleSheet, Touchable, TouchableOpacity, FlatList, View } from "react-native"
import {  ScrollView } from "react-native-gesture-handler"
import { DATA } from "../../data"
import { useContext, useEffect, useState } from "react"
import { Card } from "./Card"
import { Entypo } from "@expo/vector-icons"
import { AppContext } from "../ContextApi/context"
import { CustomModalNews } from "../ui/CustomModalNews"


export const CardList = () => {
    // const [movies, setMovies] = useState(DATA)
    const {userInfo, f} = useContext(AppContext)
    const [modalVisible, setModalVisible] = useState(false)
    const handleAdd = () => {
        const randomIdx = Math.random()
        setMovies([{...DATA[1], id: Date.now().toString()},
        ...movies])
    }
    const handleDelete = () => {
        setMovies([...movies.slice(1)])
    }
    useEffect(() => {
      console.log(userInfo[0]?.admin)
    }, [])
    return (
      <View style={{flex: 1}}>
        {/* <Button title="Add" onPress={handleAdd} />
        <Button title="Delete" color={"red"} onPress={handleDelete} /> */}

        {/* <ScrollView >
          <View style={{paddingHorizontal: 18}}>
            {movies.map((movie) => (
              <Card key={movie.id} {...movie}/>
            ))}
          </View>
        </ScrollView> */}

        {/* <FlatList 
          data={news}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 18 }}>
              <Card {...item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        /> */}
        {/* {
          userInfo[0]?.admin ? <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} activeOpacity={0.7} style={styles.button}>
          <Entypo name="plus" color={"white"} size={24} />
        </TouchableOpacity> : false
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} activeOpacity={0.7} style={styles.button}>
          <Entypo name="plus" color={"white"} size={24} />
        </TouchableOpacity>
        } */}
       {/* <CustomModalNews modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    position: 'absolute',
    backgroundColor: '#36a0fc',
    top: '90%',
    right: 20,
    borderRadius: 60/2,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})