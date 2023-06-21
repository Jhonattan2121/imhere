import { Text, TextInput, View } from "react-native";
import {styles} from './styles'

export  function Home() {
  return (
    <View style={styles.container}>
    <Text  style={styles.eventName}> React  </Text>
    <Text  style={styles.eventNames}> Native </Text>
    <TextInput 
    placeholder="Nome do participante"
    placeholderTextColor="#6B6B6B"
    style={styles.input}/>
    </View>
  )
}