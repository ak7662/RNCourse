import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

export default function GoalInput({ enteredGoalText, setEnteredGoalText, setEnteredGoalArray, modalIsVisible }) {
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        setEnteredGoalArray(prevState => [...prevState, { text: enteredGoalText, id: Math.random().toString() }])
        setEnteredGoalText('')
    }
    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
    }
});
