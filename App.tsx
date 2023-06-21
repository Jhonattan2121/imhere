import { Text, View, StyleSheet } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
    <Text key="1" style={styles.eventName}> React  </Text>
    <Text key="2" style={styles.eventNames}> Native </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
  },
  eventName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FDFCFE',
    marginTop: 48
  },
  eventNames: {
    color: '#6b6b6b',
      fontSize: 25,
      fontWeight: 'bold',
    
  }
})