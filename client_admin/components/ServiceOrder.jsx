import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { textStyle, colorPallet } from "../utils/globalStyles"


function ServiceOrder({services, responsable, total, title}) {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={[styles.header, textStyle.regularText]}>
                    {title}
                </Text>
                <View style={styles.body}>
                    <View style={styles.bodyCell}>
                        <Text style={textStyle.smallText}> Ordem de Serviço: </Text>
                        {services.map((item, indx) =>  {
                        return <Text key={indx} style={textStyle.smallText}>{'\u2022 ' + item}</Text>
                        })}
                        
                    </View>
                    <View style={styles.bodyCell}>
                        <Text style={textStyle.smallText}> Responsável pelo banho: </Text>
                        <Text style={[textStyle.smallText, {textAlign: 'center'}]}>{responsable}</Text>
                    </View>

                </View>
                <Text style={[styles.footer, textStyle.regularText]}>Total: {total}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        minHeight: 150,

        borderRadius: 20,
        borderWidth: 1,
        borderColor: colorPallet.primary,
        overflow: 'hidden',


    },
    header: {
        width: '100%',
        backgroundColor: colorPallet.primary,
        padding: 3,
        textAlign: 'center',
        color: '#fff'
    },
    body: {
        minHeight: 100,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bodyCell: {
        width: '45%',
    },
    footer: {
        paddingLeft: 15,
        paddingBottom: 5,
        paddingTop: 5,
        borderTopWidth: 1,
        borderColor: colorPallet.primary
    }
})

export {ServiceOrder}