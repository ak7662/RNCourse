import { View, Image, StyleSheet, Text } from 'react-native';
import PrimaryButton from '../components/ui/primaryButton';
import Title from '../components/ui/title';
import colors from '../constants/colors';

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.Image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <Text style={styles.summaryText}>Your Phone needed
                <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess the number
                <Text style={styles.highlight}> {userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: colors.primary500
    }

})