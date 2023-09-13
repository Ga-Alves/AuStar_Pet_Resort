import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native"

// components
import { Footer } from "../components/Footer"
import { OrangeButton } from "../components/OrangeButton";
import { GradientBorder } from "../components/GradientBorder"

// global styles
import { textStyle } from "../utils/textStyles";

// icon
import { MaterialIcons } from '@expo/vector-icons';

//context
import { AgendaBanhoContext } from "../context/AgendaBanhoContext";

function AgendaBanhoPasso5  (props) {
    const windowWidth = Dimensions.get('window').width;

    const line = (serviceName, value, indx) => {
        return(
            <View key={indx} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[textStyle.regularText, textStyle.textColor]}>{serviceName}</Text>
                <Text style={[textStyle.regularText, textStyle.textColor]}>R$ {value}</Text>
            </View>
        )
    }

    const {form} = useContext(AgendaBanhoContext)

    const [services, setServices] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    function handleSubmit(){
        props.navigation.push('Home')
        console.log(form);
        
    }

    useEffect(() => {
        // simulando uma requisição de 3s de delay
        // requisição para pegar os pets do usuario.
        setTimeout(() => {
            const APIResponse = [
                {
                    service: 'Banho',
                    value: 50
                },
                {
                    service: 'Banho Volumezante ',
                    value: 20
                },
            ]
            setServices(APIResponse);

            let total = 0;
            APIResponse.forEach((e) => {
                total += e.value;
            })
            setTotalValue(total)
        }, 1500)

        

    }, [])

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="date-range" size={30} color={textStyle.textColor.color} />
                <Text style={[textStyle.title, textStyle.textColor]}>Agendar Banho</Text>
            </View>
            <View style={styles.body}>
                <GradientBorder width={windowWidth - 20} height={300}>
                    <View style={styles.borderGradientBody}>
                        <View>
                            <Text style={[textStyle.subtitle, textStyle.textColor, styles.text]}>Valor</Text>
                            <View style={styles.divider}/>

                            {services && services.map((obj, indx) => {
                                return line(obj.service, obj.value, indx)
                            })}
                            
                            <View style={styles.divider}/>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={[textStyle.subtitle, textStyle.textColor, styles.text]}>Total</Text>
                                <Text style={[textStyle.regularText, textStyle.textColor]}>R$ {totalValue}</Text>
                            </View>
                        </View>
                        <View style={{alignSelf: 'center'}}>
                            <OrangeButton text='Concluir !' onPress={handleSubmit}/>
                        </View>
                    </View>
                </GradientBorder>
            </View>
            <Footer img={2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        width: '100%',
        height: 320,
        alignItems: 'center',
    },
    borderGradientBody: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        flex: 1
    },
    divider: {
        height: 1,
        borderColor: textStyle.textColor.color,
        borderTopWidth: 1,
    }
})

export {AgendaBanhoPasso5}