import { View, StyleSheet, Text, Alert } from "react-native"
import Title from "../components/ui/title"
import { useState, useEffect } from 'react'
import NumberContainer from "../components/game/numberContainer"
import PrimaryButton from "../components/ui/primaryButton"
import Card from "../components/ui/card"
import InstructionText from "../components/ui/instructionText"


let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            return rndNum
        }
    }

    function nextGuessHandler(direction) {// direction => 'lower', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie", 'You know that this is wrong...', [
                { text: 'Sorry', style: 'cancel' }
            ])
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        console.log(minBoundary, maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }
    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            {/* GUESS */}
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>

                {/* +- */}
            </Card>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})