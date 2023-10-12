import { Button, SafeAreaView, StyleSheet, Text, View, Image, Platform, useWindowDimensions, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Progress from '../components/Progress'
import { GlobalContext } from '../context'
import Profile from '../components/Profile'

const Home = ({ navigation }) => {
    const { width } = useWindowDimensions()
    const { incompleteItems, completedItems, setIncompleteItems } = useContext(GlobalContext)
    const isCompleted = !!Object.keys(completedItems).length

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.dashboard}>
                <Profile />
                <View style={styles.seperator} />
                <View>
                    <View style={styles.enrollment}>
                        <Text style={styles.enrollmentText}>Enrollment Progress</Text>
                    </View>
                    <Pressable style={styles.challengesBox} onPress={() => navigation.navigate('Start')}>
                        <View style={styles.challengesTitle}>
                            <Text style={{ fontWeight: 'bold', color: '#36454F' }}>Health Challenges </Text>
                            <Text style={{ color: '#36454F' }}>{isCompleted ? 'Completed' : 'Not Started'} </Text>
                        </View>
                        <View>
                            <Progress width={width} style={styles.progress} />
                        </View>
                    </Pressable>
                    {isCompleted && (
                        <View style={{ marginTop: 20 }}>
                            <Button title='Submit' color='#367588' />
                        </View>
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dashboard: {
        marginTop: 20,
        marginHorizontal: 16,
    },
    seperator: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    enrollment: {
        paddingVertical: 20,
    },
    enrollmentText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    challengesBox: {
        backgroundColor: 'white',
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D3D3D3',
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 1
            }
        })
    },
    challengesTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progress: {
        paddingVertical: 20
    }

})