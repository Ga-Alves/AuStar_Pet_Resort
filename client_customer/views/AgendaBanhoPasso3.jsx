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

//api
import backend from '../services/BackEndAPI'

function AgendaBanhoPasso3(props) {
    const { form, setDate, setTime } = useContext(AgendaBanhoContext)

    const [selectDateStr, setSelectDateStr] = useState("11/11/1111")

    const time = ["8:00", "8:50", "9:40", "10:30", "11:20", "13:10", "14:00", "14:50", "15:40"]
    const [ availableTime, setAvailableTime ] = useState([])

    useEffect(() => {
        function getWeekDayOf(strDate){
            const splitDate = strDate.split('/')
            const selectDate = new Date(splitDate[2], parseInt(splitDate[1]) - 1, splitDate[0])
    
            const today = new Date()
            const firstMondayOfThisWeek = new Date(today)
            firstMondayOfThisWeek.setDate(today.getDate() - today.getDay() + 1)

            // console.log(today.getDate(), today.getMonth(), today.getFullYear());
            // console.log(firstMondayOfThisWeek.getDate(), firstMondayOfThisWeek.getMonth(), firstMondayOfThisWeek.getFullYear());
            
    
            const currentDate = new Date(firstMondayOfThisWeek)
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 6; j++) {
                    // console.log(currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear());
                    if (currentDate.getDate() == selectDate.getDate() && 
                        currentDate.getMonth() == selectDate.getMonth() && 
                        currentDate.getFullYear() == selectDate.getFullYear() ) {
                        return [i, j];
                    }
                    currentDate.setDate(currentDate.getDate() + 1)
                }
                currentDate.setDate(currentDate.getDate() + 1)
            }
            return [0, 0];
        }
        const [week, day] = getWeekDayOf(selectDateStr);

        const strDay = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab']

        backend.get(`/HorariosDisponiveisDia?week=${week + 1}&day=${strDay[day]}&id_pet=${form.id_pet}`)
            .then((res) => {
                setAvailableTime(res.data);
            })
            .catch((res) => {
                console.log(res);
            })
    }, [selectDateStr])

    function handleSubmit() {
        setDate(selectDateStr);
        props.navigation.push('AgendaBanhoPasso4')
    }


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

                        <Calendar setSelectedDate={setSelectDateStr}/>

                        <View style={styles.subtitle}>
                            <AntDesign name="clockcircle" size={23} color={textStyle.textColor.color} />
                            <Text style={[textStyle.subtitle, textStyle.textColor]}>Horário</Text>
                        </View>

                        {/* Select Bath Time */}
                        <View style={{alignItems: 'flex-start', width: '100%', gap: 5}}>
                            <SelectTimeBath selectedTime={form.horario} setSelectTime={setTime} times={time} availableTimes={availableTime}></SelectTimeBath>    
                        </View>
                        <OrangeButton onPress={handleSubmit} text='Próximo Passo !'/>
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