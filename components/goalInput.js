import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

export default function GoalInput({ enteredGoalText, setEnteredGoalText, setEnteredGoalArray, modalIsVisible, setModalIsVisible }) {
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        setEnteredGoalArray(prevState => [...prevState, { text: enteredGoalText, id: Math.random().toString() }])
        setEnteredGoalText('')
        setModalIsVisible(false)
    }
    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={() => setModalIsVisible(false)} />
                    </View>


                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '90%',
        marginRight: 8,
        padding: 16,
        borderRadius: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    button: {
        marginHorizontal: 8,
        width: 120
    }
});
