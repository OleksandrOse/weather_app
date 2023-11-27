import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

type Props = {
  warning: string;
  setWarning: React.Dispatch<React.SetStateAction<string>>;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const WarningModal: React.FC<Props> = ({
  warning,
  setWarning,
  modalVisible,
  setModalVisible,
}) => {
  const handlePress = () => {
    setModalVisible(!modalVisible);
    setWarning('');
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{warning}</Text>
            <Pressable style={styles.button} onPress={() => handlePress()}>
              <Text style={styles.text}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 10,
    marginTop: 20,
    backgroundColor: '#f7bb07',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0345fc',
    borderBottomWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    gap: 10,
  },
  modalText: {
    color: '#f72707',
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WarningModal;
