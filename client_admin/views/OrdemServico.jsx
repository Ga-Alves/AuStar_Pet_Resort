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

// API
import backend from '../services/BackEndAPI';

import { serviceOrdersMock } from '../mock/serviceOrdersMock'

function ServiceOrdemScreen(props) {
    const windowWidth = Dimensions.get('window').width;
    const TIMES = ["8:00", "8:50", "9:40", "10:30", "11:20", "13:10", "14:00", "14:50", "15:40"];
    const WEEK_DAYS = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const WEEK_INDX = Math.max(new Date().getDay() - 1 % 6, 0);

    const [week, setWeek] = useState(1)
    const [day, setDay] = useState(WEEK_DAYS[WEEK_INDX]);

    const [serviceOrdersData, setServiceOrdersData] = useState([]);

    function renameKeys(obj, newKeys) {
        const entries = Object.keys(obj).map(key => {
            const newKey = newKeys[key] || key;
        
            return {[newKey]: obj[key]};
        });
        
        return Object.assign({}, ...entries);
    }
    
    
    
    async function fetchData(dia, week){
        const newKeys = {
                        "horario": "time", 
                        "completo": "completed",
                        "data": "date",
                        "id_banhista": "id_employee",
                        "id_ordem": "id",  
                        "nome_banhista": "resposable",
                        "finalizacao": "finishing",
                        "nome_pet": "title",
                        "servicos": "services"
        };
        console.log(dia, week);
            await backend.get(`ServiceOrders?day=${dia}&week=${week}`)
            .then((response) => {
                back_res = response.data
                let serviceOrders = [];
                back_res.forEach(element => {
                    const SelectPatternOrder = renameKeys(element, newKeys);
                    serviceOrders.push(SelectPatternOrder);
                });
                setServiceOrdersData(serviceOrders);
            })
            .catch((err) => {
                console.log(err);
            });
        }

    useEffect(() => {
        fetchData(day, week);
    }, [week, day])

    const handleOrdemSubmit = async (id) => {
        await backend.get(`FinalizaOrdemDeServico?id_ordem=${id}`)
        .then(() => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleDayWeekSelect = (day, week) => {
        setDay(day);
        setWeek(week);
        fetchData(day, week);
    }
    
    const schedule = (time, services, indx) => {
        return(
            <View key={indx}>
                <Text style={[textStyle.regularText, textStyle.textColor, styles.text]}>{time}</Text>
                <View style={styles.divider}/>
                <View style={styles.serviceOrderStyle}>
                    {services && services.map((service, indx) => {
                       return <ServiceOrder
                            key={indx}
                            id={service.id}
                            title={service.title}
                            services={service.services}
                            responsable={service.responsable}
                            total={service.total}
                            enabled={!service.completed}
                            confirmOrder={handleOrdemSubmit}/>
                    })
                    }
                    
                </View>
            </View>
        )
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.cards}>
                        <Card title='Organizar Agenda' onPress={() => props.navigation.push('GerenciaAgenda')}>
                            <Image source={require('../assets/calendar-week_svgrepo.com.png')}/>
                        </Card>
                        <Card title='Cadastrar Funcionário' onPress={() => props.navigation.push('Cadastrar Funcionario')}>
                            <Image source={require('../assets/men_bathing_a_cat.png')}/>
                        </Card>
                    </View>
        
                    <View style={{width: windowWidth - 80 || 150}}>
                        {TIMES && TIMES.map((time, indx) => {
                            services = serviceOrdersData.filter((elem) => {
                               return elem.time == time
                            });
                            return schedule(time, services, indx)
                        })}

                    </View>

                    <View style={[styles.selectDayAndWeek]}>
                        <Text>Semana: </Text>
                        <RoundButton text='1' isSelected={week == '1'} setSelect={() => handleDayWeekSelect(day, '1')}></RoundButton>
                        <RoundButton text='2' isSelected={week == '2'} setSelect={() => handleDayWeekSelect(day, '2')}></RoundButton>
                        <RoundButton text='3' isSelected={week == '3'} setSelect={() => handleDayWeekSelect(day, '3')}></RoundButton>
                        <RoundButton text='4' isSelected={week == '4'} setSelect={() => handleDayWeekSelect(day, '4')}></RoundButton>
                        <RoundButton text='5' isSelected={week == '5'} setSelect={() => handleDayWeekSelect(day, '5')}></RoundButton>
                    </View>
                    <View style={[styles.selectDayAndWeek]}>
                        <Text>Dia: </Text>
                        <RoundButton text='seg' isSelected={day == 'seg'} setSelect={() => handleDayWeekSelect('seg', week)}></RoundButton>
                        <RoundButton text='ter' isSelected={day == 'ter'} setSelect={() => handleDayWeekSelect('ter', week)}></RoundButton>
                        <RoundButton text='qua' isSelected={day == 'qua'} setSelect={() => handleDayWeekSelect('qua', week)}></RoundButton>
                        <RoundButton text='qui' isSelected={day == 'qui'} setSelect={() => handleDayWeekSelect('qui', week)}></RoundButton>
                        <RoundButton text='sex' isSelected={day == 'sex'} setSelect={() => handleDayWeekSelect('sex', week)}></RoundButton>
                        <RoundButton text='sab' isSelected={day == 'sab'} setSelect={() => handleDayWeekSelect('sab', week)}></RoundButton>
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