import AsyncStorage from '@react-native-async-storage/async-storage';
import { Address } from '../types/Address';

type T = Address;

export const saveData = async (key: string, value: T) => {
  try {
    const item = JSON.stringify(value);
    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

export const saveItem = async (key: string, value: T) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const valueFromStorage: T = JSON.parse(jsonValue!);

    const data = [...valueFromStorage, value];
    const items = JSON.stringify(data);
    await AsyncStorage.setItem(key, items);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};
