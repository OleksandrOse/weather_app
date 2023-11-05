import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LocationSvg from '../Location/Location';
import WeatherSearch from '../WeatherSearch/WeatherSearch';

type Props = {
  address: string;
  loadForecast: () => Promise<void>;
};

const LocationInfo: React.FC<Props> = ({ address, loadForecast }) => {
  const handlePress = async () => {
    await loadForecast();
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <LocationSvg onPress={() => handlePress()} style={styles.location} />
        <Text style={styles.city}>{address}</Text>
      </View>
      <WeatherSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginBottom: 10,
  },
  location: {
    padding: 5,
  },
  info: {
    flexDirection: 'row',
    gap: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  city: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  country: {
    fontSize: 18,
  },
});

export default LocationInfo;
