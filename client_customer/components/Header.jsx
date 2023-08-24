import { View, StyleSheet, Image } from 'react-native';

function Header(props) {
  // console.log(props.headProps);
    return (
        <View style={styles.header}>
            <Image source={require('../assets/Logo.png')} style={styles.logo}/>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
      height: 100,
      backgroundColor: '#F28A00',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    logo: {
      width: 70,
      height: 70,
      margin: 5,
    }
  });
  

export {Header}