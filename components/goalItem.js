import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({ itemData, deleteGoalHandler }) {

    return (
        // <Pressable onPress={() => deleteGoalHandler(itemData.item.id)}>
        <Pressable onPress={deleteGoalHandler.bind(this, itemData.item.id)}>
            <View style={styles.textOutput}>
                <Text style={{ color: 'white', }}>{itemData.item.text}</Text>
            </View>
        </Pressable>
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