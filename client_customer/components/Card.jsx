import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


function Card(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient
                colors={['#F28A00', '#FFF12E']}
                style={styles.border}
                >
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.body}>
                        {props.children}
                    </View>
                </View>

            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({  
    border: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderRadius: 20,
        width: 146,
        height: 146,
        overflow: 'hidden'
    },
    header: {
        flex: 1,
        backgroundColor: '#F28A00',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: 'white',
    },
    body: {
        flex: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

})


export {Card}