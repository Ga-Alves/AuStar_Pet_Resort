import { StyleSheet } from "react-native"

const textStyle = StyleSheet.create({
    textColor: {
        color: '#603913',
    },
    
    title: {
        fontSize: 30,
    },

    subtitle: {
        fontSize:23,
    },

    regularText: {
        fontSize: 15,
    },
    smallText: {
        fontSize: 11,
    },
    sublime:{
        textDecorationLine: 'underline',
    }
})
const colorPallet = {
    primary: '#5D92C8',
    secondary: '#F28A00'
}

export {textStyle, colorPallet};