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
// Mock é nome dado em engenharia de software
// Quando simulamos algo como um banco de dados, requisição web
const [ decorationMock, setDecorationMock ] = useState([]);
const { form, setDecoration, addDecoration, deleteDecoration } = useContext(AgendaBanhoContext)

useEffect(() => {
    // simulando uma requisição de 3s de delay
    // requisição para pegar os pets do usuario.
    setTimeout(() => {
        setDecorationMock ([
            { name: "Lacinho", valor: 30, id: 0 },
            { name: "Gravatinha", valor: 30, id: 1 },
            { name: "Bandana", valor: 30, id: 2},
            { name: "Perfume", valor: 30, id: 3}
            ]
        );
        
        setDecoration(new Set());
        
    }, 1500)
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
                            <Text style={
                                [textStyle.subtitle,
                                 textStyle.textColor,
                                 {marginBottom: 10}]
                                 }><Text style={textStyle.sublime}>O que podemos adicionar</Text> na finalização ?</Text>
                
                            <View style={{gap: 10}}>
                                {decorationMock && decorationMock.map((item, idx) => {
                                    return (
                                        <CheckBox 
                                            key={idx} 
                                            label={item.name} 
                                            isChecked={form.decoracoes.has(item.id)} 
                                            setChecked={() => {
                                                if (form.decoracoes.has(item.id)) 
                                                { 
                                                    deleteDecoration(item.id);
                                                }
                                                else
                                                {
                                                    addDecoration(item.id);
                                                }
                                            }}/>   
                                    )
                                })}
                            </View>
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