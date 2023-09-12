import { StyleSheet, View, Image, Vibration } from 'react-native'
import * as Notifications from 'expo-notifications'

// components
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';

function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Card title='Agendar Banho' onPress={() => props.navigation.push('AgendaBanhoPasso1')}>
                    <Image source={require('../assets/dogWash.png')}/>
                </Card>
                <Card title='Cadastrar Pet' onPress={() => props.navigation.push('Cadastro')}>
                    <Image source={require('../assets/signupDog.png')}/>
                </Card>
                <Card title='Histórico'>
                    <Image source={require('../assets/historic.png')}/>
                </Card>
            </View>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    body: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      flex: 1,
    }
  });

export {Home}