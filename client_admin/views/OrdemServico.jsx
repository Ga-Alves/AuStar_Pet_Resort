import { ScrollView, StyleSheet, View, Image, Text, Dimensions } from 'react-native'

// global styles
import { textStyle } from '../utils/globalStyles';

// components
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
import { ServiceOrder } from '../components/ServiceOrder';
import { RoundButton } from '../components/RoundButton';

// context
import { useState, useEffect } from 'react';

function ServiceOrdemScreen(props) {
    const windowWidth = Dimensions.get('window').width;
    const TIMES = ["8:00", "8:50", "9:40", "10:30", "11:20", "13:10", "14:00", "14:50", "15:40"];
    const WEEK_DAYS = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const WEEK_INDX = new Date().getDay() - 1 % 6;

    const [week, setWeek] = useState(1)
    const [day, setDay] = useState(WEEK_DAYS[WEEK_INDX]);
    
    const schedule = (time, services, indx) => {
        return(
            <View key={indx}>
                <Text style={[textStyle.regularText, textStyle.textColor, styles.text]}>{time}</Text>
                <View style={styles.divider}/>
                <View style={styles.serviceOrderStyle}>
                    {services && services.map((service) => {
                       return <ServiceOrder
                            title={service.title}
                            services={service.services}
                            responsable={service.responsable}
                            total={service.total}
                            confirmOrder={()=>console.log('confirm callback')}/>
                    })
                    }
                    
                </View>
            </View>
        )
    };

    const [serviceOrdemMock, setServiceOrdemMock] = useState([]);

    useEffect(() => {
        // simulando uma requisição de 3s de delay
        // para o dia <day> e semana <week>
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
                    title: "Outro Lacinho as 8:00", 
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
    }, [week, day])

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.cards}>
                        <Card title='Organizar Agenda' onPress={() => props.navigation.push('Ordem de Serviço')}>
                            <Image source={require('../assets/calendar-week_svgrepo.com.png')}/>
                        </Card>
                        <Card title='Cadastrar Funcionário' onPress={() => props.navigation.push('Cadastrar Funcionario')}>
                            <Image source={require('../assets/men_bathing_a_cat.png')}/>
                        </Card>
                    </View>
        
                    <View style={{width: windowWidth - 80 || 150}}>
                        {TIMES && TIMES.map((time, indx) => {
                            services = serviceOrdemMock.filter((elem) => {
                               return elem.time == time
                            });
                            return schedule(time, services, indx)
                        })}

                    </View>

                    <View style={[styles.selectDayAndWeek]}>
                        <Text>Semana: </Text>
                        <RoundButton text='1' isSelected={week == '1'} setSelect={() => setWeek('1')}></RoundButton>
                        <RoundButton text='2' isSelected={week == '2'} setSelect={() => setWeek('2')}></RoundButton>
                        <RoundButton text='3' isSelected={week == '3'} setSelect={() => setWeek('3')}></RoundButton>
                        <RoundButton text='4' isSelected={week == '4'} setSelect={() => setWeek('4')}></RoundButton>
                        <RoundButton text='5' isSelected={week == '5'} setSelect={() => setWeek('5')}></RoundButton>
                    </View>
                    <View style={[styles.selectDayAndWeek]}>
                        <Text>Dia: </Text>
                        <RoundButton text='seg' isSelected={day == 'seg'} setSelect={() => setDay('seg')}></RoundButton>
                        <RoundButton text='ter' isSelected={day == 'ter'} setSelect={() => setDay('ter')}></RoundButton>
                        <RoundButton text='qua' isSelected={day == 'qua'} setSelect={() => setDay('qua')}></RoundButton>
                        <RoundButton text='qui' isSelected={day == 'qui'} setSelect={() => setDay('qui')}></RoundButton>
                        <RoundButton text='sex' isSelected={day == 'sex'} setSelect={() => setDay('sex')}></RoundButton>
                        <RoundButton text='sab' isSelected={day == 'sab'} setSelect={() => setDay('sab')}></RoundButton>
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
      flexDirection: 'column',
      justifyContent: 'space-around',
      flex: 1,
      marginTop: 20,
      marginBottom: 50,
    },

    serviceOrderStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        gap: 5
    },

    cards: {
        flexDirection: 'row',
        marginBottom: 120,
    },

    divider: {
        height: 1,
        borderColor: textStyle.textColor.color,
        borderTopWidth: 1,
    },

    selectDayAndWeek: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

  });

export {ServiceOrdemScreen}