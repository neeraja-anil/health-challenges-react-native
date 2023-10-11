import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Tasks = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Tasks</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Tasks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})