import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions } from '../../features/weather/weather';

import Circle from '../Circle/Circle';
import Check from '../Check/Check';

const SettingsWeather = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const isCelsium = useAppSelector((state) => state.weather.isCelsium);

  const handlePress = (isFarenheit: boolean) => {
    setModalVisible(!modalVisible);
    dispatch(actions.changeCelsium(isFarenheit));
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
            <Text style={styles.modalText}>Settings:</Text>
            <Pressable style={styles.item} onPress={() => handlePress(true)}>
              <View style={{ width: 30 }}>{isCelsium && <Check />}</View>
              <View style={{ width: 90 }}>
                <Text style={styles.text}>Celsius</Text>
              </View>
              <View style={{ width: 30 }}>
                <Text style={styles.text}>°C</Text>
              </View>
            </Pressable>

            <Pressable style={styles.item} onPress={() => handlePress(false)}>
              <View style={{ width: 30 }}>{!isCelsium && <Check />}</View>
              <View style={{ width: 90 }}>
                <Text style={styles.text}>Fahrenheit</Text>
              </View>
              <View style={{ width: 30 }}>
                <Text style={styles.text}>°F</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Circle />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalView: {
    margin: 10,
    marginTop: 20,
    backgroundColor: '#0345fc',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsWeather;
