import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [enteredGoalArray, setEnteredGoalArray] = useState([])
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    setEnteredGoalArray(prevState => [...prevState, { text: enteredGoalText, id: Math.random().toString() }])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your Course Goal'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={enteredGoalArray} renderItem={(itemData) => {
          return (
            <View style={styles.textOutput}>
              <Text style={{ color: 'white', }}>{itemData.item.text}</Text>
            </View>
          )
        }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  textOutput: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  }
});
