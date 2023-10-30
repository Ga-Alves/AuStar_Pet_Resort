import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native"

// components
import { Footer } from "../components/Footer"
import { Select } from "../components/Select"
import { OrangeButton } from "../components/OrangeButton";

// global styles
import { textStyle } from "../utils/textStyles";

// icon
import { MaterialIcons } from '@expo/vector-icons';

//context
import { AgendaBanhoContext } from "../context/AgendaBanhoContext";

// API
import backend from "../services/BackEndAPI";

// storage
import * as SecureStore from 'expo-secure-store'; 

// service
import { renameKeys } from "../services/renameObjKeys";

function AgendaBanhoPasso1(props) {

    const {setPetID} = useContext(AgendaBanhoContext)
    const [tutorPets, setTutorPets] = useState([])
    const [pet, setPet] = useState('')

    function handleSubmit(){
        setPetID(pet);
        if (pet != '') {
            props.navigation.push('AgendaBanhoPasso2')
        }
    }

    useEffect(() => {
        async function fetchData(){
            const id = await SecureStore.getItemAsync('id');
            
            backend.get(`CachorrosTutor?id_tutor=${id}`)
            .then(function (res) {
                const resData = res.data.res
                const SelectPatternPets = resData.map((obj) => renameKeys(obj, {"id_pet": "id", "nome": "label"}))
                setTutorPets(SelectPatternPets)
            })
            .catch(function (error) {
                console.log("ERR: ", error);
            });
        }
        fetchData();
    }, [])

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
                <MaterialIcons name="date-range" size={30} color={textStyle.textColor.color} />
                <Text style={[textStyle.title, textStyle.textColor]}>Agendar Banho</Text>
            </View>
            <View style={styles.flex}>
                <View style={styles.flex}>
                    <Text style={[textStyle.subtitle, textStyle.textColor, styles.subtitleMargin]}><Text style={textStyle.sublime}>Quem será o futuro </Text>cheirosinho(a) ?</Text>
                    <Select title='Selecione seu Pet' options={tutorPets} setOption={setPet}/>
                </View>
                <View style={styles.buttonMargin}>
                    <OrangeButton text='Próximo Passo!' onPress={handleSubmit}/>
                </View>
            </View>
            <Footer img={2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex: {
        alignItems: 'center',
        flex: 1,
    },
    subtitleMargin: {
        marginBottom: 20
    },
    buttonMargin: {
        marginBottom: 20
    },
})

export {AgendaBanhoPasso1}