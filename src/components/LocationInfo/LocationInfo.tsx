import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import LocationSvg from '../Location/Location';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import SettingsWeather from '../SettingsWeather/SettingsWeather';

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
        <Pressable onPress={() => handlePress()}>
          <LocationSvg style={styles.location} />
        </Pressable>
        <Text style={styles.city}>{address}</Text>
      </View>
      <View style={styles.info}>
        <WeatherSearch />
        <SettingsWeather />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
