// Native Components
import { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native"

// components
import { Footer } from "../components/Footer"
import {textStyle} from '../utils/globalStyles'
import { SecondaryButton } from "../components/SecondaryButton";
import { GerenciaAgendaWeekdayColumn } from "../components/GerenciaAgendaWeekdayColumn";
import { RoundButton } from "../components/RoundButton";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//mock
import { employeesMock, weekScheeduleMock } from "../mock/GerenciaAgendaMock";

//api
import backend from "../services/BackEndAPI";


function GerenciaAgenda() {

    const [week, setWeek] = useState(1)


    const [employees, setEmployees] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState({})
    
    const [weekScheedule, setWeekScheedule] = useState([])


    function handleSelectEmployee(employee) {
        setSelectedEmployee(employee);
    }

    // pega todos os funcionarios
    useEffect(() => {
        setEmployees(employeesMock)
    }, [])
    
    // pega agenda da semana
    useEffect(() => {
        setWeekScheedule(weekScheeduleMock);
        backend.get(`OrganizacaoSemana/?week=${week}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [week])


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
                                        week={week}
                                        weekDayName={week_day.day}
                                        scheeduledEmployes={week_day.employees}
                                        addEmployee={selectedEmployee}/>
                                )
                            }
                        </ScrollView>
                    </View>

                    <View style={[styles.selectDayAndWeek]}>
                        <RoundButton text='1' isSelected={week == '1'} setSelect={() => setWeek('1')}></RoundButton>
                        <RoundButton text='2' isSelected={week == '2'} setSelect={() => setWeek('2')}></RoundButton>
                        <RoundButton text='3' isSelected={week == '3'} setSelect={() => setWeek('3')}></RoundButton>
                        <RoundButton text='4' isSelected={week == '4'} setSelect={() => setWeek('4')}></RoundButton>
                        <RoundButton text='5' isSelected={week == '5'} setSelect={() => setWeek('5')}></RoundButton>
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
    },
    selectDayAndWeek: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export {GerenciaAgenda}