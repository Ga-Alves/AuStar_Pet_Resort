import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

function Select() {
    const [isOptionsEnable, setIsOptionsEnable] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsOptionsEnable(!isOptionsEnable)}>
                <View style={isOptionsEnable ? styles.selectEnable : styles.selectDisable}>
                    <Text>
                        Raça
                    </Text>
                    {isOptionsEnable ? 
                    <AntDesign name="up" size={24} color="black" />:
                    <AntDesign name="down" size={24} color="black" />
                    }
                </View>
            </TouchableOpacity>
            <View style={isOptionsEnable ? styles.optionsEnable : styles.optionsDisable}>
                <TouchableOpacity>
                    <View style={styles.option}>
                        <Text>Opção 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.option}>
                        <Text>Opção 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.option}>
                        <Text>Opção 3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '65%',
        borderRadius: 10,
    },
    selectEnable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        
        backgroundColor: 'rgba(96, 57, 19, 0.31)',
        height: 40,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    selectDisable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        
        backgroundColor: 'rgba(96, 57, 19, 0.31)',
        height: 40,
        width: '100%',
        borderRadius: 10,
    },
    optionsEnable: {
        position: 'absolute',
        width: '100%',
        top: 40,
        zIndex: 1
    },
    optionsDisable: {
        display: 'none'
    },
    option: {
        backgroundColor: '#D9D2CA',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 20,
        position: 'relative'

      }
})

export {Select}