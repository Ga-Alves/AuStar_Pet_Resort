import { View, StyleSheet, TextInput, Text, ScrollView } from "react-native"
import { useState } from "react";

// components
import { Footer } from "../components/Footer"
import { Select } from "../components/Select";
import { OrangeButton } from '../components/OrangeButton' 
import { CheckBox } from "../components/CheckBox";
import { PopUp } from "../components/PopUp";

// Styles
import { textStyle } from "../utils/textStyles";

// API
import backend from "../services/BackEndAPI";

// storage
import * as SecureStore from 'expo-secure-store'; 

function CadastroPet({ navigation }) {

  const breeds = [
    {
      "label":'Lulu da Pomerânia',
      "id": 'Lulu da Pomerânia'
    },
    {
      "label":'Yorkshire',
      "id": 'Yorkshire'
    },
    {
      "label":'Shih-tzu',
      "id": 'Shih-tzu'
    },
    {
      "label":'Pug',
      "id": 'Pug'
    },
    {
      "label":'Schnauzer',
      "id": 'Schnauzer'
    },
    {
      "label":'Lhasa Apso',
      "id": 'Lhasa Apso'
    },
    {
      "label":'King Cavalier Charles spaniel',
      "id": 'King Cavalier Charles spaniel'
    },
    {
      "label":'Bulldog francês',
      "id": 'Bulldog francês'
    },
    {
      "label":'Jack Russel',
      "id": 'Jack Russel'
    },
    {
      "label":'Outro',
      "id": 'Outro'
    },
  ]


  const colors = [
    {"label": 'Branco', "id": 'Branco'},
    {"label": 'Preto', "id": 'Preto'},
    {"label": 'Preto e Branco', "id": 'Preto e Branco'},
    {"label": 'Amarelo', "id": 'Amarelo'},
    {"label": 'Outro', "id": 'Outro'},
  ]
  const size = [
   {"label":'P', "id": 'P'},
   {"label":'M', "id": 'M'},
   {"label":'G', "id": 'G'},
   {"label":'XL', "id": 'XL'},
  ]

  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogSex, setDogSex] = useState('');
  const [dogColor, setDogColor] = useState('')
  const [dogSize, setDogSize] = useState('')

  // Pop-Up/Modal Control
  const [modalVisible, setModalVisible] = useState(false);

  async function createPet() {
    const id = await SecureStore.getItemAsync('id');
    const body = {
      dogName,
      dogBreed,
      dogSex,
      dogColor,
      dogSize
    };
    console.log(body);

    const data = {
      nomePet: dogName,   
      raca: dogBreed,
      sexo: dogSex,
      cor: dogColor,
      porte: dogSize,
      id: id
    }

    // Deveria ser assincrono
    backend.post("CadastroPet",data)
    .then(function (response) {
        console.log("Pet cadastrado com sucesso");
        // signupDog(body); //chamar rota do back aqui
        const allInputsOk = !Object.values(body).includes('');
        if (allInputsOk) {
          setModalVisible(true);
        }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
      <ScrollView>
          <View style={styles.body}>
              <Text style={[textStyle.title, textStyle.textColor]}>Cadastre seu Pet</Text>
              <TextInput style={styles.input} placeholder="Nome do Pet" onChangeText={setDogName}/>
              <Select title='Raça' options={breeds} setOption={setDogBreed}/>
              <Text style={[textStyle.regularText, textStyle.textColor, styles.itemLeftAlign]}>Sexo</Text>
              <View style={styles.rowSection}>
                <CheckBox label='Macho' isChecked={dogSex == 'Macho'} setChecked={() => setDogSex('Macho')}/>
                <CheckBox label='Fêmea' isChecked={dogSex == 'Fêmea'} setChecked={() => setDogSex('Fêmea')}/>
              </View>
              <Select title='Cor' options={colors} setOption={setDogColor}/>
              <Select title='Porte' options={size} setOption={setDogSize}/>
              <PopUp
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                onConfirm={() => navigation.navigate('Home')}
                text='Cadastrado com sucesso!!'/>
              <OrangeButton text='Cadastrar' onPress={createPet}></OrangeButton>
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