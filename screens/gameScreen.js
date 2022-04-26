import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Text, Alert, FlatList } from "react-native"
import Title from "../components/ui/title"
import { useState, useEffect } from 'react'
import NumberContainer from "../components/game/numberContainer"
import PrimaryButton from "../components/ui/primaryButton"
import Card from "../components/ui/card"
import InstructionText from "../components/ui/instructionText"
import colors from '../constants/colors'
import GuessLogItem from '../components/game/guessLogItem'


let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
        // setGuessRounds(prevGuess => prevGuess + 1)
    }, [])

    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            // setGuessRounds(prevGuess => prevGuess + 1)
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
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])

    }

    const guessRoundListLength = guessRounds.length
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
            {/* {guessRounds.map(val => <Text key={val}>{val}</Text>)} */}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem
                        roundNumber={guessRoundListLength - itemData.index}
                        guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})