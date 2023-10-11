// Native Components
import { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native"

// components
import { Footer } from "../components/Footer"
import {textStyle} from '../utils/globalStyles'
import { SecondaryButton } from "../components/SecondaryButton";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function GerenciaAgenda() {

    const [employees, setEmployees] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState(-1)

    function handleSelectEmployee(employee) {
        setSelectedEmployee(employee.id);
    }

    useEffect(() => {
        // simulando uma requisição de 1.5s de delay
        setTimeout(() => {
            setEmployees([
                {
                    id: 1,
                    name: 'Fernanda'
                },
                {
                    id: 5,
                    name: 'Eduardo'
                },
            ])
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
                        {employees && employees.map((employee) => 
                            <SecondaryButton text={employee.name} isPress={employee.id == selectedEmployee} onPress={() => handleSelectEmployee(employee)}/>
                        )}
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
        flex: 1,
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
        flexWrap: 'wrap'
    }
})

export {GerenciaAgenda}