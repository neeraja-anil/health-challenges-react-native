import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import ProgressBar from 'react-native-progress/Bar';
import { GlobalContext } from '../context';

const Progress = ({ width, style }) => {

    const { incompleteItems, completedItems } = useContext(GlobalContext)
    const incompleteList = Object.keys(incompleteItems).length || 0
    const completeList = Object.keys(completedItems).length

    let progress
    if (completeList) {
        progress = 10
    } else {
        progress = incompleteList / 10
    }

    return (
        <View style={style}>
            <ProgressBar progress={progress} width={width - 70} borderWidth={0} unfilledColor='#E5E4E2' />
        </View>
    )
}

export default Progress