import { ScrollView, Text, View, StyleSheet, Button } from 'react-native'

// components
import { Footer } from '../components/Footer'
import { GradientBorder } from '../components/GradientBorder'
import { OrangeButton } from '../components/OrangeButton';
import { CheckBox } from '../components/CheckBox';

// icon
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

// global styles
import { textStyle } from "../utils/textStyles";

// context
import { useContext, useState, useEffect } from 'react';
import { AgendaBanhoContext } from '../context/AgendaBanhoContext';

function AgendaBanhoPasso4(props) {

const [ upSelling, setUpSelling ] = useState([]);
const { form, setService } = useContext(AgendaBanhoContext)

useEffect(() => {
    // simulando uma requisição de 3s de delay
    // requisição para pegar os pets do usuario.
    setTimeout(() => {
        setUpSelling([
            { name: "Banho Clareador", valor: 30, id: 0 },
            { name: "Hidratação", valor: 30, id: 1 },
            { name: "Banho Volumizante", valor: 30, id: 2}
            ]);
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
                <GradientBorder width={350} height={700}>
                    <View style={styles.gradientBody}>
                        <Text style={[textStyle.subtitle, textStyle.textColor]}>Cuidados Especiais</Text>

                        <View>
                            {upSelling && upSelling.map((item, idx) => {
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
                                                console.log(newService);                                           
                                            }
                                            else
                                            {
                                                newService.add(item.id);
                                                setService(new Set(newService));
                                                console.log(newService);
                                            }
                                        }}/>   
                                )
                            })}
                        </View>


                        <View>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>Dica*</Text>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>
                                Por ser uma raça de pelo volumoso seu lulu da pomerania
                                ficará mais charmoso(a) com nosso banho volumezante.
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