import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { colorPallet, textStyle } from "../utils/globalStyles"
import { useState } from "react";

function GerenciaAgendaWeekdayColumn({weekDayName, scheeduledEmployes, addEmployee}) {

    const [employees, setEmployees] = useState(scheeduledEmployes)

    function scheeduleEmployee() {
        var res = employees.find(function(val){ return (addEmployee.id == val.id)});
        
        function isEmptyObject(obj){
            return JSON.stringify(obj) === '{}'
        }
        
        if (res === undefined && !isEmptyObject(addEmployee)) {
            setEmployees([...employees, addEmployee])
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
                        <Text key={indx} style={styles.employeeColumnName}>
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
    },
    employeeColumnName: {
        backgroundColor: colorPallet.primary,
        color: '#fff',
        textAlign: 'center',
        padding: 3,
        marginTop: 2,
        borderRadius: 5,
    }
})

export {GerenciaAgendaWeekdayColumn}