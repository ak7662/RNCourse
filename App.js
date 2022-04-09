import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another Ashutosh Kumar</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!!</Text>
      <Button title={'Submit'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'purple',
    padding: 16,
    backgroundColor: 'yellow',
    borderRadius: 10
  }
});
