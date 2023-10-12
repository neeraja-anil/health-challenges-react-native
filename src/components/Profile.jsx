import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
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
    )
}

export default Profile

const styles = StyleSheet.create({
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
})