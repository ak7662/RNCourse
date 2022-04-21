import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/goalInput';
import GoalItem from './components/goalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [enteredGoalArray, setEnteredGoalArray] = useState([])

  function deleteGoalHandler(id) {
    setEnteredGoalArray(prevArr => prevArr.filter(filterVal => filterVal.id !== id))
  }
  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color={'#aaa'} onPress={startAddGoalHandler} />
        {modalIsVisible && <GoalInput setModalIsVisible={setModalIsVisible} modalIsVisible={modalIsVisible} enteredGoalText={enteredGoalText} setEnteredGoalText={setEnteredGoalText} setEnteredGoalArray={setEnteredGoalArray} />}
        <View style={styles.goalsContainer}>
          <FlatList data={enteredGoalArray} renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} deleteGoalHandler={deleteGoalHandler} />
            )
          }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 4
  }
});
