import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

/**
 * props: 
 *  text <string>
 *  onPress <console.log()>
 * Example: <OrangeButton text='Cadastrar' onPress={() => console.log("Botão foi pressionado")}></OrangeButton>
 */


function RoundButton(props) {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity 
                onPress={props.setSelect} 
                style={[
                    styles.flexGrow1, 
                    styles.roundCorner,
                    props.isSelected ? styles.selectButton: styles.noSelectButton
                    ]}>
                <View style={[styles.flexAlign, styles.flexGrow1]}>
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
        marginVertical: 10,
    },

    roundCorner: {
        borderRadius: 50,
    },

    selectButton: {
        backgroundColor: "#5D92C8",
    },

    noSelectButton: {
        backgroundColor: "#5D92C880",
    },

    text: {
        color: '#FFFFFF'
    },

    flexGrow1: {
        flexGrow: 1
    },

    flexAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {RoundButton}