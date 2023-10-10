import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { textStyle, colorPallet } from "../utils/globalStyles"
import { PopUp } from "./PopUp"


function ServiceOrder({services, responsable, total, title, confirmOrder, enabled}) {

    const [enableOrder, setEnableOrder] = useState(enabled);
    const [popUplVisible, setPopUplVisible] = useState(false);


    function handlePress(){
        setPopUplVisible(true);
    }

    function handleConfirmOrder(){
        setEnableOrder(false);
        confirmOrder();
    }


    const styles = StyleSheet.create({
        container: {
            width: 300,
            minHeight: 150,

            borderRadius: 20,
            borderWidth: 1,
            borderColor: enableOrder ? colorPallet.primary : colorPallet.secondary,
            overflow: 'hidden',
        },
        header: {
            width: '100%',
            backgroundColor: enableOrder ? colorPallet.primary : colorPallet.secondary,
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
            borderColor: enableOrder ? colorPallet.primary : colorPallet.secondary
        }
    })


    return (
        <>
        <TouchableOpacity onPress={enableOrder ? handlePress : null} disabled={!enableOrder}>
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
        <PopUp text={`Deseja finalizar ${title} ?`} modalVisible={popUplVisible} setModalVisible={setPopUplVisible} onConfirm={handleConfirmOrder} />
        </>
    )
}

export {ServiceOrder}