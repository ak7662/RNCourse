import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({ itemData, deleteGoalHandler }) {

    return (
        <View style={styles.textOutput}>
            {/* <Pressable onPress={() => deleteGoalHandler(itemData.item.id)}> */}
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={deleteGoalHandler.bind(this, itemData.item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={{ color: 'white', padding: 8 }}>{itemData.item.text}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    textOutput: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        backgroundColor: 'red',
        opacity: 0.5
    }
});