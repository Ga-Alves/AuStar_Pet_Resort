import { StyleSheet, View, Image } from 'react-native'

function Footer({background, img}) {
    const footerBackgroud = [
        <Image source={require('../assets/Footer.png')} />,
        <Image source={require('../assets/Footer2.png')} />
    ]
    const image = [
        <Image source={require('../assets/dog.png')} style={styles.dog}/>,
        <Image source={require('../assets/family.png')} style={styles.family}/>,
        <Image source={require('../assets/womanWithDog.png')} style={styles.dog}/>,
    ]
    
    return (
        <View style={styles.container}>
            {footerBackgroud[background ? background : 0]}
            {image[img ? img : 0]}
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