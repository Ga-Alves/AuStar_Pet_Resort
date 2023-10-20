import { ScrollView, StyleSheet, View, Text, Dimensions, TextInput } from 'react-native'

// global styles
import { textStyle } from '../utils/globalStyles';

// components
import { Footer } from '../components/Footer';

// context
import { useState } from 'react';
import { GradientBorder } from '../components/GradientBorder';
import { BlueButton } from '../components/BlueButton';

function RegisterEmployee(props) {
    const [workerName, setWorkerName] = useState('');
    const windowWidth = Dimensions.get('window').width;

    function createEmployee() {
        const body = {
          workerName,
        };
        console.log(body);
        const allInputsOk = !Object.values(body).includes('');
        if (allInputsOk) {
            // signupDog(body); //chamar rota do back aqui
            props.navigation.push('Ordem de Serviço')
        }
      }
    
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={[styles.container, {width:windowWidth, height: 180}]}>
                    <Text style={[textStyle.title, textStyle.textColor]}>Cadastrar Funcionário</Text>
                </View>
                <GradientBorder width={windowWidth - 60} height={200}>
                    <View style={styles.container}>
                        <View style={{width: '65%'}}>
                            <Text style={[textStyle.regularText, textStyle.textColor]}>Nome do Funcionário:</Text>
                            <TextInput style={styles.input} placeholder="Nome do Funcionario" onChangeText={setWorkerName}/>
                        </View>
                        <BlueButton text='Cadastrar' onPress={createEmployee}></BlueButton>
                    </View>
                </GradientBorder>
            </View>
            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    body: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1,
      marginTop: 20,
      marginBottom: 50,
    },

    serviceOrderStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },

    cards: {
        flexDirection: 'row',
        marginBottom: 120,
    },

    divider: {
        height: 1,
        borderColor: textStyle.textColor.color,
        borderTopWidth: 1,
    },

    selectDayAndWeek: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderColor: "#603913",
        color: "#603913"
      },

  });

export {RegisterEmployee}