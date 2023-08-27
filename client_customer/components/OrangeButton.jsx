import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

/**
 * props: 
 *  text <string>
 *  onPress <console.log()>
 * Example: 
 *  <Text>
 *      props.text
 *  </Text> 
 */


function OrangeButton(props) {
    return (
        <LinearGradient 
            colors={["#FFF12E", "#F28A00"]}
            start={{
                x: 0,
                y: 0
            }}
            end={{
                x: 1,
                y: 1
            }}
            style={styles.container}
            >
            <TouchableOpacity onPress={props.onPress} style={styles.flexGrow1}>
                <View style={[styles.flexAlign, styles.flexGrow1]}>
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 276,
        height: 33,
        borderRadius: '20px'
    },

    text: {
        color: '#603913'
    },

    flexGrow1: {
        flexGrow: 1
    },

    flexAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {OrangeButton}