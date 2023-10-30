import { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient";

// components
import { Footer } from "../components/Footer"
import { OrangeButton } from "../components/OrangeButton";
import { GradientBorder } from "../components/GradientBorder"

// global styles
import { textStyle } from "../utils/textStyles";

//context
import { AgendaBanhoContext } from "../context/AgendaBanhoContext";

function AgendaBanhoPasso6  (props) {
    const windowWidth = Dimensions.get('window').width;
    const {form, resetFormValues} = useContext(AgendaBanhoContext);

    const [scheduledTime, setScheduledTime] = useState('')

    function handleSubmit(){
        resetFormValues();
        props.navigation.push('Home');
    }


    useEffect(() => {
        // simulando uma requisição de 3s de delay
        // requisição para pegar os pets do usuario.
        setTimeout(() => {
            const APIResponse = 200;
            setScheduledTime(APIResponse);
        }, 1500)

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {/* Futamente configurar as dimensões da imagem para serem dinamicos */}
                <GradientBorder width={328} height={531}>
                    <LinearGradient 
                        colors={["#FFF12E", "#F28A00"]}
                        start={{
                            x: 0.5,
                            y: 1
                        }}
                        end={{
                            x: 0.5,
                            y: 0
                        }}
                        style={styles.container}
                        >
                        
                            <View style={styles.flex}>
                                <Text style={[textStyle.title, styles.titleMargin, {color: 'white'}]}>
                                    <Text style={textStyle.sublime}>Tudo cer</Text>tinho(a) ?
                                </Text>
                                <Text style={[textStyle.subtitle, styles.titleMargin, {color: 'white'}]}>
                                    Estamos te esperando às 
                                    <Text style={{fontWeight: 'bold'}}>{form.horario}</Text>
                                    .
                                </Text>
                            </View> 
                            <Image source={require('../assets/womanTakingPhotoWithDog.png')}></Image>

                        </LinearGradient>
                    
                </GradientBorder>
                <View style={{alignSelf: 'center', marginTop: 30}}>
                    <OrangeButton onPress={handleSubmit} text='Ir para Menu'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        marginTop: 30,
        width: '100%',
        height: 320,
        alignItems: 'center',
    },
    borderGradientBody: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        flex: 1
    },
    divider: {
        height: 1,
        borderColor: textStyle.textColor.color,
        borderTopWidth: 1,
    },
    titleMargin: {
        marginBottom: 20,
        marginTop: 30
    },
    flex: {
        alignItems: 'center',
        flex: 1,
    },
})

export {AgendaBanhoPasso6}