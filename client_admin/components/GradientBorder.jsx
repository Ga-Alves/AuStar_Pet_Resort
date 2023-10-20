import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// width e height devem ser do tipo number.
function GradientBorder({width, height, borderRadius, ...props}) {
    const styles = StyleSheet.create({  
        border: {
            width: width || 150,
            height: height || 150,
            margin: 10,
            borderRadius: borderRadius || 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            borderRadius: borderRadius || 20,
            width: width ? width - 2 : 148,
            height: height ? height - 2 : 148,
            overflow: 'hidden',
            backgroundColor: 'white'
        },
    })

    return (
        <LinearGradient
            colors={['#5E93C9', '#5EB5C9']}
            style={styles.border}
            >
                <View style={styles.card}>
                    {props.children}
                </View>
        </LinearGradient>
    )
}


export {GradientBorder}