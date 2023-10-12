import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { data } from '../components/data'
import { GlobalContext } from '../context';



const CheckboxText = ({ item }) => {
    return (
        <View>
            <Text>{item.challenge}</Text>
            <Text style={styles.checkBoxTextEg}>{item.eg}</Text>
        </View>
    )
}

const Challenges = ({ navigation }) => {
    const [checkedItems, setCheckedItems] = useState({})
    const [confirmed, setConfirmed] = useState(false);
    const objLength = Object.keys(checkedItems).length
    const { setCompleteItems, setIncompleteItems, incompleteItems, completedItems } = useContext(GlobalContext)

    const handleCheckboxChange = (item, isChecked, isIncomplete, isCompleted) => {

        setCheckedItems(prevState => {
            const updatedState = { ...prevState };
            if (isChecked || isIncomplete || isCompleted) {
                updatedState[item.id] = item; // Item is checked
            } else {
                delete updatedState[item.id]; // Item is unchecked, remove from state
            }
            return updatedState;
        });
    };

    const handleSaveAndExit = () => {
        setIncompleteItems(checkedItems)
        navigation.navigate('Home')
    }

    const handleClickNext = () => {
        if (confirmed) {
            navigation.navigate('Completed', { checkedItems })
        } else {
            setConfirmed(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Health Challenges</Text>
                <Text style={styles.textDescrition}>Which of the following health conditions affect your care recipient?</Text>
            </View>

            {/* List */}
            <View style={styles.checkBox}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <BouncyCheckbox size={25}
                            fillColor="#D3D3D3"
                            unfillColor="#FFFFFF"
                            text={<CheckboxText item={item} />}
                            iconStyle={{ borderRadius: 5 }}
                            innerIconStyle={{ borderWidth: 1, borderColor: "blue", borderRadius: 5 }}
                            textStyle={{ textDecorationLine: "none", }}
                            style={{ flex: 1, marginVertical: 3, marginLeft: 10, marginTop: 10 }}
                            isChecked={checkedItems[item.id] || incompleteItems[item.id] || completedItems[item.id]}
                            onPress={() => handleCheckboxChange(item, !checkedItems[item.id], !incompleteItems[item.id], !completedItems[item.id])}
                        />}
                    keyExtractor={challenge => challenge.id}
                />
            </View>

            {/* Buttons */}
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleSaveAndExit}>
                    <Text style={styles.text}>Save & Exit</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleClickNext} disabled={objLength === 0}>
                    <Text style={[styles.text, { color: objLength == 0 ? '#d3d3d3' : 'black' },]}> {confirmed ? 'Confirm' : 'Next'}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Challenges


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 20,
        gap: 10
    },
    textContainer: {
        // alignItems: 'flex-start'
        gap: 5
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    textDescrition: {
        fontSize: 14,
        color: '#36454F'
    },
    checkBoxTextEg: {
        color: '#D3D3D3',
        fontSize: 13
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderColor: '#d3d3d3',
        borderWidth: 0.5,
        backgroundColor: 'white',

    },
})