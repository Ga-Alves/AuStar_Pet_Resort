import { View, StyleSheet, TextInput } from "react-native"
import { Footer } from "../components/Footer"
import { Select } from "../components/Select";

function CadastroPet() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <Select title='Raça' options={['Pincher', 'Bulldog', 'Cavalier King']} setOption={console.log}/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
                <TextInput style={styles.input} placeholder="Nome do Pet"/>
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
  });

export {CadastroPet}