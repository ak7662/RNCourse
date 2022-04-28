import { useState } from "react"
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import Card from "../components/ui/card"
import InstructionText from "../components/ui/instructionText"
import PrimaryButton from "../components/ui/primaryButton"
import Title from "../components/ui/title"
import colors from "../constants/colors"

export default function StartGameScreen({ pickedNumberHandler }) {
    const [enteredValue, setEnteredValue] = useState('')
    const { width, height } = useWindowDimensions()

    function numberInputHandler(enteredText) {
        setEnteredValue(enteredText)
    }
    function resetInputHandler() {
        setEnteredValue('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return
        }

        pickedNumberHandler(chosenNumber)
    }

    const marginTopDistance = height < 415 ? 30 : 100
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter the Number</InstructionText>
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
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>


    )
}

// const deviceHeight = Dimensions.get('window').height
// console.log(deviceHeight)
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        // marginTop: deviceHeight < 420 ? 30 : 100,
        flex: 1,
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
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    }
})