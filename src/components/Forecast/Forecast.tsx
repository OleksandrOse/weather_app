/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  ImageBackground,
  View,
} from 'react-native';
import Constants from 'expo-constants';

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
      <SafeAreaView style={styles.activityContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  function getBackground(isDay: number, text: string) {
    if (
      text === 'Patchy rain possible' ||
      text === 'Light rain' ||
      text === 'Light drizzle'
    ) {
      return require('../../../assets/patchy-rain-possible.gif');
    } else if (text === ('Light rain' || 'Light rain shower' || 'Rain')) {
      return require('../../../assets/rain.gif');
    }

    if (isDay) {
      if (
        text === 'Partly cloudy' ||
        text === 'Overcast' ||
        text === 'Cloudy'
      ) {
        return require('../../../assets/cloudy.gif');
      } else if (
        text === 'Patchy snow possible' ||
        text === 'Patchy sleet possible' ||
        text === 'Blowing snow' ||
        text === 'Patchy moderate snow' ||
        text === 'Patchy heavy snow' ||
        text === 'Heavy snow'
      ) {
        return require('../../../assets/snow.gif');
      }

      return require('../../../assets/sunny.gif');
    } else {
      if (
        text === 'Partly cloudy' ||
        text === 'Overcast' ||
        text === 'Cloudy'
      ) {
        return require('../../../assets/partly-cloudy.gif');
      } else if (
        text === 'Patchy snow possible' ||
        text === 'Patchy sleet possible' ||
        text === 'Blowing snow' ||
        text === 'Patchy moderate snow' ||
        text === 'Patchy heavy snow' ||
        text === 'Heavy snow'
      ) {
        return require('../../../assets/snowy-night.gif');
      }

      return require('../../../assets/night.gif');
    }
  }

  return (
    <ImageBackground
      source={getBackground(
        weather.current.is_day,
        weather.current.condition.text
      )}
      style={styles.image}
    >
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
          <View style={styles.containerContent}>
            <LocationInfo address={address} loadForecast={loadForecast} />

            <WeatherCard weather={weather} />
            <HourlyForecastList weather={weather} />
            <ForecastList weather={weather} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    height: 'auto',
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContent: {
    flex: 1,
    margin: 10,
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
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  currentDescription: {
    fontSize: 24,
    width: '100%',
    fontWeight: '200',
    marginBottom: 20,
  },
});
