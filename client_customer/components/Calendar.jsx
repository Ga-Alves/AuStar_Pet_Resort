import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { textStyle } from "../utils/textStyles";

function Calendar({setSelectedDate}) {

    const today = new Date()
    const firstMondayOfThisWeek = new Date(today)
    firstMondayOfThisWeek.setDate(today.getDate() - today.getDay() + 1)
    
    const [calendarIndx, setCalendarIndx] = useState(today.getDay() == 0 ? 0 : today.getDay() - 1)

    const days = getCalendarDays()

    // função para gerar um array de todos os dias do calendario
    function getCalendarDays() {
        const days = []
        const currentDay = new Date(firstMondayOfThisWeek)
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                days[i*6 + j] = currentDay.getDate()
                currentDay.setDate(currentDay.getDate() + 1)
            }
            currentDay.setDate(currentDay.getDate() + 1)
        }
        return days
    }

    // função utilizada para renderizar um unico dia no calendário
    function renderDay(day, indx) {
        if (indx < today.getDay() && indx < 6) {
            
            return(
                <View key={indx} style={[styles.day, styles.disable]}>
                    <Text>
                        {day}
                    </Text>
                </View>
            )
        }
        return(
            <TouchableOpacity key={indx} onPress={() => setCalendarIndx(indx)}>
                <View style={[styles.day, calendarIndx == indx && styles.selected]}>
                    <Text>
                        {day}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        const selectedDay =  new Date()
        selectedDay.setDate(firstMondayOfThisWeek.getDate() + calendarIndx + Math.floor(calendarIndx / 6))
        
        setSelectedDate(selectedDay.getDate()+'/'+(selectedDay.getMonth() + 1)+'/'+selectedDay.getFullYear())
        
    }, [calendarIndx])

    return (
        <View style={styles.month}>
            <View style={styles.labelContainer}>
                <Text style={[styles.label, textStyle.textColor]}>Seg</Text>
                <Text style={[styles.label, textStyle.textColor]}>Ter</Text>
                <Text style={[styles.label, textStyle.textColor]}>Qua</Text>
                <Text style={[styles.label, textStyle.textColor]}>Qui</Text>
                <Text style={[styles.label, textStyle.textColor]}>Sex</Text>
                <Text style={[styles.label, textStyle.textColor]}>Sab</Text>
            </View>

            {days.map((day, indx) => {return renderDay(day, indx)})}

        </View>
    )
}

const styles = StyleSheet.create({
    day: {
        width: 50,
        height: 50,
        margin: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#F28A00',
        opacity: 0.6
    },
    disable:{
        opacity: 0.1
    },
    selected: {
        opacity: 0.9
    },
    month: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 320
    },
    labelContainer: {
        flexDirection: 'row'
    },
    label: {
        margin: 1,
        width: 50,
        textAlign: 'center',
    }
})

export {Calendar}