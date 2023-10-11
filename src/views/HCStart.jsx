import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

const HCStart = ({ navigation }) => {

    // HIDE BOTTOM NAV
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image source={require('../../assets/Group375.png')} style={styles.image} />
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.text}>Exit</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Challenges')}>
                        <Text style={styles.text}>Start</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HCStart

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
        paddingHorizontal: 60,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',

    },
    text: {
        color: 'blue'
    }
})