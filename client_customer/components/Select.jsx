import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

/**
 * props: 
 *  title <string>
 *  options <array>
 *  setOption callback that recieves the selected option by parameters
 * Example: 
 *  <Select title='Raça' options={['Pincher', 'Bulldog', 'Cavalier King']} setOption={console.log}/>
 */

function Select({title, setOption, width, options}) {

    
    const styles = StyleSheet.create({
        container: {
            width: width || 270,
            borderRadius: 20,
        },
        selectEnable: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            
            backgroundColor: 'rgba(96, 57, 19, 0.31)',
            height: 40,
            width: width || 270,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        selectDisable: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            
            backgroundColor: 'rgba(96, 57, 19, 0.31)',
            height: 40,
            width: width || 270,
            borderRadius: 20,
        },
        optionsEnable: {
            position: 'absolute',
            width: width || 270,
            top: 40,
            zIndex: 1,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: "hidden"
        },
        optionsDisable: {
            display: 'none'
        },
        option: {
            backgroundColor: '#D9D2CA',
            height: 40,
            width: width || 270,
            justifyContent: 'center',
            paddingLeft: 20,
            position: 'relative'

        }
    })

    const [isOptionsEnable, setIsOptionsEnable] = useState(false)
    const [showOption, setShowOption] = useState(title)

    function handleSelect(option){
        setShowOption(option.label);
        setIsOptionsEnable(false);
        setOption && setOption(option.id);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsOptionsEnable(!isOptionsEnable)}>
                <View style={isOptionsEnable ? styles.selectEnable : styles.selectDisable}>
                    <Text>
                        {showOption || 'pass title as props'}
                    </Text>
                    {isOptionsEnable ? 
                    <AntDesign name="up" size={20} color="black" />:
                    <AntDesign name="down" size={20} color="black" />
                    }
                </View>
            </TouchableOpacity>
            <View style={isOptionsEnable ? styles.optionsEnable : styles.optionsDisable}>
                {options && options.map((option, idx) => {
                    return <TouchableOpacity onPress={() => handleSelect(option)} key={idx}>
                        <View style={styles.option}>
                            <Text>{option.label}</Text>
                        </View>
                    </TouchableOpacity>
                })}
            </View>
        </View>
    )
}


export {Select}