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

// API
import backend from '../services/BackEndAPI';

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

    const {form, resetFormValues} = useContext(AgendaBanhoContext)

    const [services, setServices] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    function handleSubmit(){
        
        const body = {
            id_pet: form.id_pet,
            data: form.dia,
            horario: form.horario,
            finalizacoes: [...form.decoracoes],
            servicos: [...form.servicos]
        }
        console.log(body);
        backend.post('/AgendarBanho', body)
            .then((res) => {
                console.log("certo");
                // props.navigation.push('AgendaBanhoPasso6')
                // resetFormValues();
            })
            .catch((err) => {
                console.log("errrrrr");
                console.log(err);
            })
                
        
    }

    useEffect(() => {
        backend.get(`ServicoUpselling?id_dog=${form.id_pet}`)
        .then(function (response) {
            const servicos = response.data.servicoOferecidoUpselling;

            const servicosRequisitados = []
            let total = 0;

            servicos.forEach((servico) => {
                if (form.servicos.has(servico.id_upselling)) {
                    servicosRequisitados.push({service: servico.nome, value: servico.preco})
                    total += parseInt(servico.preco)
                }
            })
            setServices(servicosRequisitados);
            setTotalValue(total);
            
        })
        .catch(function (error) {
            console.log(error);
        });

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