import { StyleSheet, Text, View } from 'react-native';

export default function GoalItem({ itemData }) {
    return (
        <View style={styles.textOutput}>
            <Text style={{ color: 'white', }}>{itemData.item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textOutput: {
        margin: 8,
        padding: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
    }
});