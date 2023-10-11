import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { textStyle } from "../utils/globalStyles"
import { useState } from "react";

function GerenciaAgendaWeekdayColumn({weekDayName, scheeduledEmployes, addEmployee}) {

    const [employees, setEmployees] = useState(scheeduledEmployes)

    function scheeduleEmployee() {
        var res = employees.find(function(val){ return (addEmployee.id == val.id)});
        
        if (!res && addEmployee.id != -1) {
            setEmployees([...employees, addEmployee])

            const body = {
                
            }
            console.log('post');
        }
        
    }

    return (
        <TouchableOpacity onPress={scheeduleEmployee}>
            <View style={styles.container}>
                <Text style={[styles.weekDayName, textStyle.regularText, textStyle.textColor]}>
                    {weekDayName}
                </Text>

                {
                    employees && employees.map((addEmployee, indx) => 
                        <Text key={indx}>
                            {addEmployee.name}
                        </Text>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        borderWidth: 1,
        minHeight: 200
    },
    weekDayName: {
        borderBottomWidth: 1,
        textAlign: 'center'
    }
})

export {GerenciaAgendaWeekdayColumn}