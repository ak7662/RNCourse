import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Text, Alert } from "react-native"
import Title from "../components/ui/title"
import { useState, useEffect } from 'react'
import NumberContainer from "../components/game/numberContainer"
import PrimaryButton from "../components/ui/primaryButton"
import Card from "../components/ui/card"
import InstructionText from "../components/ui/instructionText"
import colors from '../constants/colors'


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
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }
    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='md-remove' size={24} color={colors.light500} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='md-add' size={24} color={colors.light500} />
                        </PrimaryButton>
                    </View>
                </View>
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
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }
})