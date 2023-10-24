import { StyleSheet, View, Image, Dimensions } from 'react-native'

function Footer({background, img}) {
    const footerBackgroud = <Image source={require('../assets/Footer.png')} />
    const image = <Image source={require('../assets/DogAstronaut.png')} style={styles.dog}/>

    const dimensions = Dimensions.get('window');   
    
    return (
            <View style={[styles.container, {width:dimensions.width, height: 300}]}>
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