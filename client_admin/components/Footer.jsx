import { StyleSheet, View, Image } from 'react-native'

function Footer({background, img}) {
    const footerBackgroud = <Image source={require('../assets/Footer.png')} />
    const image = <Image source={require('../assets/DogAstronaut.png')} style={styles.dog}/>
    
    return (
        <View style={styles.container}>
            {footerBackgroud}
            {image}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-end',
        
    },
    dog: {
        position: 'absolute',
        right: 0,
    },
    family: {
        position: 'absolute',
        left: 0,
    }
})

export {Footer}