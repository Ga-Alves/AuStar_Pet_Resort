import { StyleSheet, View, Image, Vibration } from 'react-native'
import * as Notifications from 'expo-notifications'

// components
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';

async function scheduleNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Tchau Fedô! 🐶⭐",
        body: 'Amanhã é dia de banho, ebaa.',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 3 },
    });
    Vibration.vibrate(500)
  }

function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Card title='Agendar Banho' onPress={scheduleNotification}>
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