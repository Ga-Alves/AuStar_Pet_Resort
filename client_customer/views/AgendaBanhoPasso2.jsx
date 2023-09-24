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

function AgendaBanhoPasso2(props) {

const [ decoration, setDecoration ] = useState([]);
const { form, setService } = useContext(AgendaBanhoContext)

useEffect(() => {
    // simulando uma requisição de 3s de delay
    // requisição para pegar os pets do usuario.
    setTimeout(() => {
        setDecoration ([
            { name: "Lacinho", valor: 30, id: 0 },
            { name: "Gravatinha", valor: 30, id: 1 },
            { name: "Bandana", valor: 30, id: 2},
            { name: "Perfume", valor: 30, id: 3}
            ]
        );
        
        setService(new Set());
        
    }, 1500)
}, [])

    const { setDate } = useContext(AgendaBanhoContext)
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
                            <Text style={[textStyle.subtitle, textStyle.textColor, {textDecorationLine: 'underline', marginBottom: 10}]}>O que podemos adicionar na finalização ?</Text>

                            <View style={{gap: 10}}>
                                {upSelling.servicos && upSelling.servicos.map((item, idx) => {
                                    return (
                                        <CheckBox 
                                            key={idx} 
                                            label={item.name} 
                                            isChecked={form.servicos.has(item.id)} 
                                            setChecked={() => {
                                                let newService = new Set(form.servicos);
                                                if (form.servicos.has(item.id)) 
                                                { 
                                                    newService.delete(item.id);
                                                    setService(new Set(newService)); 
                                                }
                                                else
                                                {
                                                    newService.add(item.id);
                                                    setService(new Set(newService));
                                                }
                                            }}/>   
                                    )
                                })}
                            </View>
                        </View>

                        <View>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>Dica*</Text>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>
                               {upSelling.tips}
                            </Text>
                        </View>
                        <OrangeButton onPress={() => props.navigation.push('AgendaBanhoPasso3')} text='Próximo Passo !'/>
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

export {AgendaBanhoPasso2}