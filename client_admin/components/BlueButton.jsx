import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient";

/**
 * props: 
 *  text <string>
 *  onPress <console.log()>
 * Example: <OrangeButton text='Cadastrar' onPress={() => console.log("Botão foi pressionado")}></OrangeButton>
 */


function BlueButton(props) {
    return (
        <LinearGradient 
            colors={['#5E93C9', '#5EB5C9']}
            start={{
                x: 0,
                y: 0
            }}
            end={{
                x: 1,
                y: 1
            }}
            style={styles.container}
            >
            <TouchableOpacity onPress={props.onPress} style={styles.flexGrow1}>
                <View style={[styles.flexAlign, styles.flexGrow1]}>
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 276,
        height: 33,
        borderRadius: 20
    },

    text: {
        color: '#fff'
    },

    flexGrow1: {
        flexGrow: 1
    },

    flexAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {BlueButton}