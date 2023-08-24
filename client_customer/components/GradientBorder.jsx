import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function GradientBorder(props) {
    const styles = StyleSheet.create({  
        border: {
            width: props.width || 150,
            height: props.height || 150,
            margin: 10,
            borderRadius: props.borderRadius || 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            borderRadius: props.borderRadius || 20,
            width: '98%',
            height: '98%',
            overflow: 'hidden',
            backgroundColor: 'white'
        },
    })

    return (
        <LinearGradient
            colors={['#F28A00', '#FFF12E']}
            style={styles.border}
            >
                <View style={styles.card}>
                    {props.children}
                </View>
        </LinearGradient>
    )
}


export {GradientBorder}