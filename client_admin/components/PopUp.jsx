import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { colorPallet } from '../utils/globalStyles';

function PopUp({text, onConfirm, modalVisible, setModalVisible}) {

    function handleConfirm() {
        onConfirm();
        setModalVisible(false);
    }

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <View style={styles.buttonView}>
                <Pressable
                style={[styles.button, styles.buttonAccept]}
                onPress={handleConfirm}>
                <Text style={[styles.textStyle, {width: 100}]}> Sim </Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonDenie]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.textStyle, {width: 100}]}> Não </Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonAccept: {
        backgroundColor: colorPallet.primary,
    },
    buttonDenie: {
        backgroundColor: colorPallet.secondary,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        gap: 5

    }
});

export {PopUp}