import { View, Text, StyleSheet } from "react-native"
import { useState } from "react";
import Checkbox from 'expo-checkbox'


function CheckBox(props) {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.section}>
            <Checkbox 
                style={styles.checkbox} 
                value={isChecked} 
                onValueChange={setChecked} 
                color={isChecked ? '#603913' : undefined} />
            <Text style={styles.text}>{props.label}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    checkbox: {
        marginHorizontal: 8
    },

    text: {
        color: '#603913'
    }
})

export {CheckBox}