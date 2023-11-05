import {
  PermissionStatus,
  LocationAccuracy,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { Alert } from 'react-native';
import { Location } from '../types/Location';

export const getLocation = async () => {
  try {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === PermissionStatus.GRANTED) {
      const location = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.Balanced,
      });

      return location.coords as Location;
    } else {
      console.error('Permission to access location was denied.');
      Alert.alert('Permision to access location was denied');

      return {
        latitude: 50.4501,
        longitude: 30.5234,
      } as Location;
    }
  } catch (error) {
    console.error('Error getting location:', error);
    return null;
  }
};
