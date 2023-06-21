import { Text, View } from "react-native";


export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    }}>
    <Text key="1" style={{
      color: '#FDFCFE',
      fontSize: 30,
      fontWeight: 'bold',
      
      marginTop: 48
      
    }}> React  </Text>
    <Text key="2" style={{
      color: '#6b6b6b',
      fontSize: 25,
      fontWeight: 'bold',
    
      marginTop: 48
    }}> Native </Text>
    </View>
  )
}