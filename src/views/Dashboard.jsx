import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions, SafeAreaView } from 'react-native'
import React from 'react'
import Progress from '../components/Progress'

const Dashboard = () => {
    const { height, width } = useWindowDimensions()
    return (
        <SafeAreaView>
            <View style={styles.dashboard}>
                <View style={styles.profile}>
                    <View style={styles.profileDetails}>
                        {/* profile image */}
                        <Image source={require('../../assets/Profile-icon.png')} style={styles.profileImage} />
                        {/* details */}
                        <View style={styles.profileText}>
                            <Text style={{ fontWeight: 'bold' }}>Betty Smith</Text>
                            <Text style={{ color: 'gray' }}>bettysmith@gmail.com</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../../assets/healthicons.png')} />
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.enrollment}>
                    {/* text */}
                    <Text style={styles.enrollmentText}>Enrollment Progress</Text>
                </View>
                {/* NAVIGATE TO NEXT PAGE HERE */}
                <Pressable style={styles.challenges} onPress={() => navigation.navigate('Start')}>
                    <View style={styles.challengesTitle}>
                        <Text style={{ fontWeight: 'bold', color: '#36454F' }}>Health Challenges </Text>
                        <Text style={{ color: '#36454F' }}>Not Started </Text>
                    </View>
                    <Progress width={width} style={styles.progress} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dashboard: {
        marginTop: 20,
        marginHorizontal: 16,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    profileDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImage: {
        borderRadius: 50
    },
    profileText: {
        paddingHorizontal: 10,
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
    challenges: {
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
        paddingVertical: 10,
    }
})