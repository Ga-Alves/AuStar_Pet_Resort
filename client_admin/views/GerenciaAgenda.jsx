// Native Components
import { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native"

// components
import { Footer } from "../components/Footer"
import {textStyle} from '../utils/globalStyles'
import { SecondaryButton } from "../components/SecondaryButton";
import { GerenciaAgendaWeekdayColumn } from "../components/GerenciaAgendaWeekdayColumn";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//mock
import { employeesMock, weekScheeduleMock } from "./mock";


function GerenciaAgenda() {

    const [employees, setEmployees] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState({})
    
    const [weekScheedule, setWeekScheedule] = useState([])


    function handleSelectEmployee(employee) {
        setSelectedEmployee(employee);
    }

    useEffect(() => {
        // simulando uma requisição de 1.5s de delay
        setTimeout(() => {
            setEmployees(employeesMock)
        }, 1500);
        
        
        setTimeout(() => {
            setWeekScheedule(weekScheeduleMock)
        }, 1500);

    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={[textStyle.title, textStyle.textColor]}>
                    Organizar Agenda
                </Text>
                <View style={styles.body}>
                    <Text style={[textStyle.subtitle, textStyle.textColor, styles.subtitle]}>Funcionário</Text>

                    <View style={styles.employees}>
                        {employees && employees.map((employee, indx) => 
                            <SecondaryButton key={indx} text={employee.name} isPress={employee.id == selectedEmployee.id} onPress={() => handleSelectEmployee(employee)}/>
                        )}
                    </View>

                    <View style={styles.horizontalScroll}>
                        <ScrollView horizontal>
                            {
                                weekScheedule && weekScheedule.map((week_day, indx) => 
                                    <GerenciaAgendaWeekdayColumn
                                        key={indx}
                                        weekDayName={week_day.day}
                                        scheeduledEmployes={week_day.employees}
                                        addEmployee={selectedEmployee}/>
                                )
                            }
                        </ScrollView>
                    </View>

                </View>
                <Footer/>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        minHeight: windowHeight,
    },
    body: {
        flex: 1
    },
    subtitle: {
        width: windowWidth/1.2,
        marginVertical: 20,
        borderBottomWidth: 1,
        borderColor: textStyle.textColor.color
    },
    employees: {
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap',
        marginBottom: 10
    },
    horizontalScroll: {
        // borderWidth: 1,
        width: windowWidth/1.2,
        // height: 400
    }
})

export {GerenciaAgenda}