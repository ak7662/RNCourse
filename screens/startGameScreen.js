import { useState } from "react"
import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/primaryButton"

export default function StartGameScreen({ pickedNumberHandler }) {
    const [enteredValue, setEnteredValue] = useState('')
    function numberInputHandler(enteredText) {
        setEnteredValue(enteredText)
    }
    function resetInputHandler() {
        setEnteredValue('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue)
        // console.log(enteredValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return
        }

        pickedNumberHandler(enteredValue)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredValue}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
        elevation: 100,
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .8,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    numberInput: {
        height: 50,
        width: 38,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    }
})