import { ScrollView, StyleSheet, View, Image, Text, Dimensions } from 'react-native'

// global styles
import { textStyle } from '../utils/globalStyles';

// components
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
import { ServiceOrder } from '../components/ServiceOrder';

// context
import { useState, useEffect } from 'react';

function ServiceOrdemScreen(props) {
    const windowWidth = Dimensions.get('window').width;
    const TIMES = ["8:00", "8:50", "9:40", "10:30", "11:20", "13:10", "14:00", "14:50", "15:40"];
    
    const schedule = (time, service, indx) => {
        return(
            <View key={indx}>
                <Text style={[textStyle.subtitle, textStyle.textColor, styles.text]}>{time}</Text>
                <View style={styles.divider}/>
                <View style={styles.serviceOrderStyle}>
                    {service ? 
                    (<ServiceOrder
                        title={service.title}
                        services={service.services}
                        responsable={service.responsable}
                        total={service.total}
                        confirmOrder={()=>console.log('confirm callback')}/>) : null
                        
                    }
                    
                </View>
            </View>
        )
    };

    const [serviceOrdemMock, setServiceOrdemMock] = useState([]);

    useEffect(() => {
        // simulando uma requisição de 3s de delay
        setTimeout(() => {
            setServiceOrdemMock ([
                { 
                    title: "Lacinho", 
                    services: ['Banho', 'Banho Volumezante', 'Sem Perfume', 'Gravata'], 
                    responsable: 'Rafael', 
                    total: 'R$ 50,00',
                    time: "8:00"
                },
                { 
                    title: "Thor", 
                    services: ['Banho', 'Banho Volumezante', 'Sem Perfume', 'Gravata'], 
                    responsable: 'Guilherme Costa', 
                    total: 'R$ 50,00',
                    time: "8:50"
                },
                { 
                    title: "Pipoca", 
                    services: ['Banho'], 
                    responsable: 'Roberto', 
                    total: 'R$ 70,00',
                    time: "10:30"
                },
                { 
                    title: "Rex", 
                    services: ['Banho', 'Banho Volumezante', 'Sem Perfume', 'Lacinho'], 
                    responsable: 'Rafael', 
                    total: 'R$ 60,00',
                    time: "14:00"
                }
                ]
            );
            
        }, 1500)
    }, [])

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.cards}>
                        <Card title='Organizar Agenda' onPress={() => props.navigation.push('Ordem de Serviço')}>
                            <Image source={require('../assets/calendar-week_svgrepo.com.png')}/>
                        </Card>
                        <Card title='Cadastrar Funcionário' onPress={() => props.navigation.push('Ordem de Serviço')}>
                            <Image source={require('../assets/men_bathing_a_cat.png')}/>
                        </Card>
                    </View>
                
                    <View style={{width: windowWidth - 80 || 150}}>
                        {TIMES && TIMES.map((time, indx) => {
                            service = serviceOrdemMock.filter((elem) => {
                               return elem.time == time
                            });
                            return schedule(time, service[0], indx)
                        })}
                        
                    </View>
                
                </View>
                <Footer/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    body: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      flex: 1,
      marginTop: 20,
      marginBottom: 50,
    },

    serviceOrderStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },

    cards: {
        flexDirection: 'row',
        marginBottom: 40,
    },

    divider: {
        height: 1,
        borderColor: textStyle.textColor.color,
        borderTopWidth: 1,
    },

  });

export {ServiceOrdemScreen}