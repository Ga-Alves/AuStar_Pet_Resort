import { Text, StyleSheet, TouchableOpacity} from "react-native";


function TimeButton(props) {

    const enableButtonStyle = [styles.container, styles.flexAlign, styles.enableButton]
    const disableButtonStyle = [styles.container, styles.flexAlign, styles.disableButton]
    return (
        // Button for not available time
        <TouchableOpacity 
            disabled={!props.isAvailable}
            style={props.isAvailable ? enableButtonStyle : disableButtonStyle}>
            <Text 
                style={props.isAvailable ? styles.enableText : styles.disableText}>
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
        marginVertical: 5,
    },

    disableButton: {
        borderColor: "#FF0000",
    },

    enableButton: {
        borderColor: "#603913",
    },
    
    enableText: {
        color: "#603913",
    },

    disableText: {
        color: "#FF0000",
    },

    selectText: {

    },

    // Centraliza os elementos filhos
    flexAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
})

export {TimeButton}
