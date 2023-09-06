import { View, StyleSheet, TextInput, Text, ScrollView } from "react-native"
import { useState } from "react";

// components
import { Footer } from "../components/Footer"
import { Select } from "../components/Select";
import { OrangeButton } from '../components/OrangeButton' 
import { CheckBox } from "../components/CheckBox";

// Styles
import { textStyle } from "../utils/textStyles";
function CadastroPet() {
    const [dogSex, setDogSex] = useState('');

    return (
        <ScrollView>
            <View style={styles.body}>
                <Text style={[textStyle.title, textStyle.textColor]}>Cadastre seu Pet</Text>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <Select title='Raça' options={['Pincher', 'Bulldog', 'Cavalier King']} setOption={console.log}/>
                <Text style={[textStyle.regularText, textStyle.textColor, styles.itemLeftAlign]}>Sexo</Text>
                <View style={styles.rowSection}>
                  <CheckBox label='Macho' isChecked={dogSex == 'Macho'} setChecked={() => setDogSex('Macho')}/>
                  <CheckBox label='Fêmea' isChecked={dogSex == 'Fêmea'} setChecked={() => setDogSex('Fêmea')}/>
                </View>
                <Select title='Cor' options={['Branco', 'Preto', 'Amarelo']} setOption={console.log}/>
                <Select title='Porte' options={['P', 'M', 'G', 'XL']} setOption={console.log}/>
                <OrangeButton text='Cadastrar' onPress={() => console.log("Botão foi pressionado")}></OrangeButton>
                <Footer background={1} img={1}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
      justifyContent: 'space-between',
      height: 710,
      alignItems: 'center',
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
    // A container for the female and male option 
    rowSection: {
      width: '65%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },

    // Ganbiarra
    itemLeftAlign: {
        width: '65%',
        marginBottom: -20,
    }
  });

export {CadastroPet}