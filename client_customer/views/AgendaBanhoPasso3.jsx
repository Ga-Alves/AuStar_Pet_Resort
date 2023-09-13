import { ScrollView, Text, View, StyleSheet } from 'react-native'

// components
import { Footer } from '../components/Footer'
import { GradientBorder } from '../components/GradientBorder'

// global styles
import { textStyle } from "../utils/textStyles";

// icon
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { OrangeButton } from '../components/OrangeButton';
import { Calendar } from '../components/Calendar';

// context
import { useContext } from 'react';
import { AgendaBanhoContext } from '../context/AgendaBanhoContext';

function AgendaBanhoPasso3(props) {
    const { setDate } = useContext(AgendaBanhoContext)
    return (
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="date-range" size={30} color={textStyle.textColor.color} />
                    <Text style={[textStyle.title, textStyle.textColor]}>Agendar Banho</Text>
                </View>
                <GradientBorder width={350} height={600}>
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
        padding: 10,
        alignItems: 'center'
    },
    subtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    }
})

export {AgendaBanhoPasso3}