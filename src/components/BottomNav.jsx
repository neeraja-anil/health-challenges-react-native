import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons
import HomeSvg from '../../assets/_Home-tab.svg'
import CareteamSvg from '../../assets/_Careteam-tab.svg'
import TasksSvg from '../../assets/_Tasks-tab.svg'
import MedSvg from '../../assets/_Meds-tab.svg'
import ChatSvg from '../../assets/_Chat-tab.svg'
//SCREENS
import Home from '../../src/views/Home';
import Tasks from '../../src/views/Tasks';

const BottomNav = () => {

    const Tab = createBottomTabNavigator();
    const getTabBarIconSource = (routeName, focused) => {
        if (routeName === 'Careteam') {
            return <CareteamSvg />
        } else if (routeName === 'Tasks') {
            return <TasksSvg />
        } else if (routeName === 'Home') {
            return <HomeSvg />
        } else if (routeName === 'Meds') {
            return <MedSvg />
        } else if (routeName === 'Chat') {
            return <ChatSvg />
        }
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const source = getTabBarIconSource(route.name, focused);
                    return source
                },
                tabBarActiveBackgroundColor: '#DCFCFF',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name="Careteam" component={Tasks} />
            <Tab.Screen name="Tasks" component={Tasks} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Meds" component={Tasks} />
            <Tab.Screen name="Chat" component={Tasks} />
        </Tab.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({

})