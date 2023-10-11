// Native Components
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native"

// components
import { Footer } from "../components/Footer"
import {textStyle} from '../utils/globalStyles'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function GerenciaAgenda() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={[textStyle.title, textStyle.textColor]}>
                    Organizar Agenda
                </Text>
                <View style={styles.body}>
                    <Text style={[textStyle.subtitle, textStyle.textColor, styles.subtitle]}>Funcionário</Text>
                </View>
                <Footer/>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        minHeight: windowHeight,
    },
    body: {
        flex: 1
    },
    subtitle: {
        width: windowWidth/1.2,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: textStyle.textColor
    }
})

export {GerenciaAgenda}