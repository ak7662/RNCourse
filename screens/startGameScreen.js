import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/primaryButton"

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#72063c',
        elevation: 100,
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .8
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    }
})