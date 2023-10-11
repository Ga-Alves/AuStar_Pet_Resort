import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colorPallet, textStyle } from "../utils/globalStyles";

function SecondaryButton({isPress, onPress, text, ...props}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[isPress ? styles.presssed : styles.not_presssed, textStyle.regularText]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    not_presssed: {
        borderWidth: 1,
        alignSelf: 'flex-start',
        borderColor: colorPallet.primary,
        color: colorPallet.primary,
        padding: 10,
        borderRadius: 10,
    },
    presssed: {
        borderWidth: 1,
        alignSelf: 'flex-start',
        borderColor: colorPallet.primary,
        color: '#fff',
        backgroundColor: colorPallet.primary,
        padding: 10,
        borderRadius: 10,
    }
})

export {SecondaryButton}