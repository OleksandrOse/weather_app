import {
  PermissionStatus,
  LocationAccuracy,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

export const getLocation = async () => {
  try {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === PermissionStatus.GRANTED) {
      const location = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.Balanced,
      });

      return location.coords;
    } else {
      console.error('Permission to access location was denied.');
      return {
        latitude: 50.4501,
        longitude: 30.5234,
      };
    }
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
    return null;
  }
};

// getLocation().catch((error) => {
//   console.error('Unhandled promise rejection:', error);
// });
