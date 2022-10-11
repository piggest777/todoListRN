import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToDo List</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29bdc1',
  },
  heading: {
    flex: 1,
    color: '#F9F7F5',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40
  }
});
