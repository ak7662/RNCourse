import { Text, StyleSheet, Platform } from "react-native";
import colors from "../../constants/colors";


export default function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: colors.light500,
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 2, android: 0 }),
        borderWidth: 0,
        borderColor: colors.light500,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})