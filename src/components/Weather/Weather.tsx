import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { getAddress } from '../../api/address';
import { getLocation } from '../../api/location';

import LocationInfo from '../LocationInfo/LocationInfo';
import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastList from '../ForecastList/ForecastList';
import HourlyForecastList from '../HourlyForecastList/HourlyForecastList';
import { Location } from '../../types/Location';
import { weatherAsync } from '../../features/weather/weather';

import { actions as addressActions } from '../../features/address/address';

const Forecast = () => {
  const dispatch = useAppDispatch();

  const weather = useAppSelector((state) => state.weather.weather);
  const errorWeather = useAppSelector((state) => state.weather.error);
  const address = useAppSelector((state) => state.address.address);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);

    try {
      const location = (await getLocation()) as Location;

      const city = await getAddress(location);
      dispatch(addressActions.set(city));

      void dispatch(weatherAsync({ city }));
    } catch {
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    void (async () => {
      await loadForecast();
    })();
  }, []);

  if (!weather?.current || errorWeather) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={
              void (async () => {
                await loadForecast();
              })
            }
          />
        }
      >
        <LocationInfo address={address} loadForecast={loadForecast} />

        {weather ? (
          <>
            <WeatherCard weather={weather} />
            <HourlyForecastList weather={weather} />
            <ForecastList weather={weather} />
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  refresh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeIcon: {
    width: 300,
    height: 250,
  },
  currentTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 40,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  currentDescription: {
    fontSize: 24,
    width: '100%',
    fontWeight: '200',
    marginBottom: 20,
  },
});
