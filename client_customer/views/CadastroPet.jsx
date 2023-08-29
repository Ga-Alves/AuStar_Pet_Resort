import { View, StyleSheet, TextInput } from "react-native"
// components
import { Footer } from "../components/Footer"
import { Select } from "../components/Select";
import { OrangeButton } from '../components/OrangeButton' 
import { CheckBox } from "../components/CheckBox";

function CadastroPet() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <Select title='Raça' options={['Pincher', 'Bulldog', 'Cavalier King']} setOption={console.log}/>
                <View style={styles.rowSection}>
                  <CheckBox label='Macho'/>
                  <CheckBox label='Fêmea'/>
                </View>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <OrangeButton text='Cadastrar' onPress={() => console.log("Botão foi pressionado")}></OrangeButton>
            </View>
            <Footer background={1} img={1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    body: {
      justifyContent: 'space-around',
      flex: 1,
      alignItems: 'center'
    },
    input: {
        height: 40,
        width: '65%',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderColor: "#603913",
        color: "#603913"
      },

    rowSection: {
      width: '65%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
  });

export {CadastroPet}