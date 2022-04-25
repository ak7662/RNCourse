import { View, StyleSheet, Text } from "react-native"


export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            {/* GUESS */}
            <View>
                <Text>Higher or Lower</Text>
                {/* +- */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    }
})