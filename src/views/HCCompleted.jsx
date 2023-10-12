import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context'

const HCCompleted = ({ navigation, route }) => {

    const { setCompleteItems, setIncompleteItems, incompleteItems, completedItems } = useContext(GlobalContext)
    const checkedItems = route?.params?.checkedItems

    const handleSaveAndExit = () => {
        const mergedItems = { ...incompleteItems };
        setIncompleteItems(mergedItems)
        navigation.navigate('Home')
    }

    const handleComplete = () => {
        setCompleteItems({ ...incompleteItems, ...checkedItems })
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image source={require('../../assets/Group375.png')} style={styles.image} />
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={handleSaveAndExit}>
                        <Text style={styles.text}>Save & Exit</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleComplete}>
                        <Text style={styles.text}>Complete</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HCCompleted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'start',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        padding: 20,
        top: 30
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 200

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',

    },
    text: {
        color: 'blue'
    }
})