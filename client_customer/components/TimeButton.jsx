import { Text, StyleSheet, TouchableOpacity} from "react-native";


function TimeButton(props) {

    return (
        // Button for not available time
        <TouchableOpacity 
            disabled={!props.isAvailable}
            style={[
                styles.container, 
                styles.flexAlign,
                props.isAvailable ? 
                    props.selectedTime == props.text ? styles.selectedButton : styles.enableButton
                    : styles.disableButton, 
            ]}
            onPress={() => props.setSelectTime(props.text)}
            >
            <Text 
                style={[
                    props.isAvailable ? 
                        props.selectedTime == props.text ? styles.selectText : styles.enableText
                        : styles.disableText,
                    ]}>
                {props.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 94,
        height: 34,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 0,
    },

    disableButton: {
        borderColor: "#FF0000",
    },

    enableButton: {
        borderColor: "#603913",
    },

    selectedButton: {
        backgroundColor: "#603913",
    },
    
    enableText: {
        color: "#603913",
    },

    disableText: {
        color: "#FF0000",
    },

    selectText: {
        color: "#FFFFFF",
    },

    // Centraliza os elementos filhos
    flexAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
})

export {TimeButton}
