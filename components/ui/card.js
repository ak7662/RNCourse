import { View, StyleSheet, Dimensions } from "react-native"
import colors from "../../constants/colors"


export default function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: colors.primary800,
        elevation: 100,
        shadowColor: colors.accent500,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .8,
        alignItems: 'center'
    }
})