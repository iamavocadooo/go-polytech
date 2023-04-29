import { Button, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { DATA } from "../../data"
import { useState } from "react"
import { Card } from "./Card"


export const CardList = () => {
    const [movies, setMovies] = useState(DATA)
    const handleAdd = () => {
        const randomIdx = Math.random()
        setMovies([{...DATA[1], id: Date.now().toString()},
        ...movies])
    }
    const handleDelete = () => {
        setMovies([...movies.slice(1)])
    }

    return (
      <View>
        <Button title="Add" onPress={handleAdd}/>
        <Button title="Delete" color={'red'} onPress={handleDelete}/>
        <ScrollView>
          <View style={{paddingHorizontal: 18}}>
            {movies.map((movie) => (
              <Card key={movie.id} {...movie}/>
            ))}
          </View>
        </ScrollView>
      </View>
    );
}