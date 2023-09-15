import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet} from 'react-native'

// components
import { Footer } from '../components/Footer'
import { GradientBorder } from '../components/GradientBorder'
import { SelectTimeBath } from '../components/SelectTimeBath';

// global styles
import { textStyle } from "../utils/textStyles";

// icon
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { OrangeButton } from '../components/OrangeButton';
import { Calendar } from '../components/Calendar';

// context
import { AgendaBanhoContext } from '../context/AgendaBanhoContext';

function AgendaBanhoPasso3(props) {
    const { form, setDate, setTime } = useContext(AgendaBanhoContext)

    const time = ["8:00", "8:50", "9:40", "10:30", "11:20", "13:10", "14:00", "14:50", "15:40"]
    const [ availableTime, setAvailableTime ] = useState([])

    useEffect(() => {
        // simulando uma requisição de 3s de delay
        // requisição para pegar os pets do usuario.
        setTimeout(() => {
            setAvailableTime([false, false, false, true, true, true, false, true, false])
        }, 1500)
    }, [])


    return (
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="date-range" size={30} color={textStyle.textColor.color} />
                    <Text style={[textStyle.title, textStyle.textColor]}>Agendar Banho</Text>
                </View>
                <GradientBorder width={350} height={800}>
                    <View style={styles.gradientBody}>
                        <View style={styles.subtitle}>
                            <MaterialIcons name="date-range" size={23} color={textStyle.textColor.color} />
                            <Text style={[textStyle.subtitle, textStyle.textColor]}>Dia</Text>
                        </View>

                        <Calendar setSelectedDate={setDate}/>

                        <View style={styles.subtitle}>
                            <AntDesign name="clockcircle" size={23} color={textStyle.textColor.color} />
                            <Text style={[textStyle.subtitle, textStyle.textColor]}>Horário</Text>
                        </View>

                        {/* Select Bath Time */}
                        <View style={{alignItems: 'flex-start', width: '100%', gap: 5}}>
                            <SelectTimeBath selectedTime={form.horario} setSelectTime={setTime} times={time} availableTimes={availableTime}></SelectTimeBath>    
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

export {AgendaBanhoPasso3}