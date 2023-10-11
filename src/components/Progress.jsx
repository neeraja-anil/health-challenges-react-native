import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from 'react-native-progress/Bar';

const Progress = ({ width, style }) => {
    const [progress, setProgress] = useState(0);

    const handlePress = () => {
        setProgress((prevProgress) => prevProgress + 0.1);
    };
    return (
        <View style={style}>
            <ProgressBar progress={0.1} width={width - 70} borderWidth={0} unfilledColor='#E5E4E2' />
            {/* <Button onPress={handlePress} title="Increase" /> */}
            {/* <Text>Progress: {(progress * 100).toFixed(0)}%</Text> */}
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({})