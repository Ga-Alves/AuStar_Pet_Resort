import { Text, StyleSheet, TouchableOpacity} from "react-native";


function TimeButton(props) {
    return (
        // Button for not available time
        <TouchableOpacity style={[styles.container, styles.flexAlign]}>
            <Text style={styles.timeText}>{props.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 94,
        height: 34,
        borderRadius: 10,
        borderWidth: 1,
    },

    disableButton: {
        borderColor: "#FF0000",
    },
    
    // Centraliza os elementos filhos
    flexAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    timeText: {
        color: "#FF0000",
    }
})

export {TimeButton}
