import { ScrollView, StyleSheet, View, Text, Dimensions, TextInput } from 'react-native'

// global styles
import { textStyle } from '../utils/globalStyles';

// components
import { Footer } from '../components/Footer';

// context
import { useState } from 'react';
import { GradientBorder } from '../components/GradientBorder';
import { OrangeButton } from '../components/OrangeButton';

function RegisterEmployee(props) {
    const [workerName, setWorkerName] = useState('');
    const windowWidth = Dimensions.get('window').width;

    // Pop-Up/Modal Control
    const [modalVisible, setModalVisible] = useState(false);

    function createEmployee() {
        const body = {
          workerName,
        };
        console.log(body);
        // signupDog(body); //chamar rota do back aqui
        const allInputsOk = !Object.values(body).includes('');
        if (allInputsOk) {
          setModalVisible(true);
        }
      }
    
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={[textStyle.title, textStyle.textColor]}>Cadastrar Funcionario</Text>
                    <GradientBorder width={windowWidth - 20} height={200}>
                        <View style={styles.container}>
                            <Text>Nome do Funcionario</Text>
                            <TextInput style={styles.input} placeholder="Nome do Funcionario" onChangeText={setWorkerName}/>
                            <OrangeButton text='Cadastrar' onPress={createEmployee}></OrangeButton>
                        </View>
                    </GradientBorder>
                </View>
            </ScrollView>
            <Footer/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    body: {
      flexDirection: 'column',
      justifyContent: 'space-around',
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
    }

  });

export {RegisterEmployee}