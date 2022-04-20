import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/goalInput';
import GoalItem from './components/goalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [enteredGoalArray, setEnteredGoalArray] = useState([])

  return (
    <View style={styles.appContainer}>
      <GoalInput enteredGoalText={enteredGoalText} setEnteredGoalText={setEnteredGoalText} setEnteredGoalArray={setEnteredGoalArray} />
      <View style={styles.goalsContainer}>
        <FlatList data={enteredGoalArray} renderItem={(itemData) => {
          return (
            <GoalItem itemData={itemData} />
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
  goalsContainer: {
    flex: 4
  }
});
