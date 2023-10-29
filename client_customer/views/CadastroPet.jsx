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
import axios from "axios";

function CadastroPet({ navigation }) {

  // const postCadastroPet = async () => {
  //   console.log("Entrou");
  //   await axios({
  //     url: "http://localhost:3030/CadastroPet",
  //     method: "post",
  //     data: {
  //       nomePet: "Rapha",   
  //       raca: "Maltês",
  //       sexo: "Macho",
  //       cor: "Branco",
  //       porte: "P",
  //       id: 1
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  // postCadastroPet();

  const breeds = ['Lulu da Pomerânia', 'Yorkshire', 'Shih-tzu', 'Pug', 'Schnauzer', 'Lhasa Apso', 'King Cavalier Charles spaniel', 'Bulldog francês', 'Jack Russel', 'Outro']
  const colors = ['Branco', 'Preto', 'Preto e Branco', 'Amarelo', 'Outro']
  const size = ['P', 'M', 'G', 'XL']

  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogSex, setDogSex] = useState('');
  const [dogColor, setDogColor] = useState('')
  const [dogSize, setDogSize] = useState('')

  // Pop-Up/Modal Control
  const [modalVisible, setModalVisible] = useState(false);

  function createPet() {
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
      id: 1
    }

    backend.post("CadastroPet",data)
      .then(function (response) {
        console.log(response);
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