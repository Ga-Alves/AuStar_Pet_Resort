import { ScrollView, Text, View, StyleSheet } from 'react-native'

// components
import { Footer } from '../components/Footer'
import { GradientBorder } from '../components/GradientBorder'
import { OrangeButton } from '../components/OrangeButton';
import { CheckBox } from '../components/CheckBox';

// icon
import { MaterialIcons } from '@expo/vector-icons';

// global styles
import { textStyle } from "../utils/textStyles";

// context
import { useContext, useState, useEffect } from 'react';
import { AgendaBanhoContext } from '../context/AgendaBanhoContext';

// API
import backend from '../services/BackEndAPI';

function AgendaBanhoPasso4(props) {

const [ upSelling, setUpSelling ] = useState([]);
const { form, addService, deleteService } = useContext(AgendaBanhoContext)


useEffect(() => {
    backend.get(`ServicoUpselling?id_dog=${form.id_pet}`)
        .then(function (response) {
            back_response = {
                dica: response.data.servicoOferecidoDicas['dica'],
                servicos: response.data.servicoOferecidoUpselling
            }
            setUpSelling(back_response);
        })
        .catch(function (error) {
            console.log(error);
        });

}, [])

    return (
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="date-range" size={30} color={textStyle.textColor.color} />
                    <Text style={[textStyle.title, textStyle.textColor]}>Agendar Banho</Text>
                </View>
                <GradientBorder width={350} height={500}>
                    <View style={styles.gradientBody}>
                        <View style={{alignSelf: 'flex-start'}}>
                            <Text style={[textStyle.subtitle, textStyle.textColor, {textDecorationLine: 'underline', marginBottom: 10}]}>Cuidados Especiais</Text>

                            <View style={{gap: 10}}>
                                {upSelling.servicos && upSelling.servicos.map((item, idx) => {
                                    return (
                                        <CheckBox 
                                            key={idx} 
                                            label={item.nome} 
                                            isChecked={form.servicos.has(item.id_upselling)} 
                                            setChecked={() => {
                                                if (form.servicos.has(item.id_upselling)) 
                                                { 
                                                    deleteService(item.id_upselling);
                                                }
                                                else
                                                {
                                                    addService(item.id_upselling);
                                                }
                                            }}/>   
                                    )
                                })}
                            </View>
                        </View>

                        <View>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>Dica*</Text>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>
                               {upSelling.dica}
                            </Text>
                        </View>
                        <OrangeButton onPress={() => props.navigation.push('AgendaBanhoPasso5')} text='Próximo Passo !'/>
                    </View>
                </GradientBorder>
                <Text>
                        
                </Text>
                <Footer img={2}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    gradientBody:{
        height: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    }
})

export {AgendaBanhoPasso4}