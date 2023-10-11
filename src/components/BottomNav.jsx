import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//icons
import HomeSvg from '../../assets/_Home-tab.svg'
import CareteamSvg from '../../assets/_Careteam-tab.svg'
import TasksSvg from '../../assets/_Tasks-tab.svg'
import MedSvg from '../../assets/_Meds-tab.svg'
import ChatSvg from '../../assets/_Chat-tab.svg'
//SCREENS
import Home from '../../src/views/Home';
import Tasks from '../../src/views/Tasks';
import HCStart from '../views/HCStart'


const StackNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Start" component={HCStart} />
        </Stack.Navigator>
    )
}

const BottomNav = () => {

    const Tab = createBottomTabNavigator();
    const getTabBarIconSource = (routeName, focused) => {
        if (routeName === 'Careteam') {
            return <CareteamSvg />
        } else if (routeName === 'Tasks') {
            return <TasksSvg />
        } else if (routeName === 'HomeScreen') {
            return <HomeSvg />
        } else if (routeName === 'Meds') {
            return <MedSvg />
        } else if (routeName === 'Chat') {
            return <ChatSvg />
        }
    }

    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const source = getTabBarIconSource(route.name, focused);
                    return source
                },
                tabBarActiveBackgroundColor: '#DCFCFF',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false
            })}
        >
            <Tab.Screen name="Careteam" component={Tasks} />
            <Tab.Screen name="Tasks" component={Tasks} />
            <Tab.Screen name="HomeScreen" component={StackNav} />
            <Tab.Screen name="Meds" component={Tasks} />
            <Tab.Screen name="Chat" component={Tasks} />
        </Tab.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({

})