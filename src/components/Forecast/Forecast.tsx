import {
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

import { getLocation } from '../../api/location';
import { getAddress } from '../../api/address';
import { getWeatherLocation } from '../../api/weather';

import LocationInfo from '../LocationInfo/LocationInfo';
import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastList from '../ForecastList/ForecastList';
import HourlyForecastList from '../HourlyForecastList/HourlyForecastList';
import { actions as weatherActions } from '../../features/weather/weather';
import { getBackground } from '../../utils/getBackground';

const Forecast = () => {
  const dispatch = useAppDispatch();

  const weather = useAppSelector((state) => state.weather.weather);
  const address = useAppSelector((state) => state.weather.city);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = () => {
    setRefreshing(true);

    void getLocation().then(async (resLocation) => {
      const forecast = await getWeatherLocation(resLocation);
      const city = await getAddress(resLocation);

      dispatch(weatherActions.setCity(city));
      dispatch(weatherActions.set(forecast));
    });

    setRefreshing(false);
  };

  useEffect(() => {
    loadForecast();
  }, []);

  if (!weather?.current) {
    return (
      <SafeAreaView style={styles.activityContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <ImageBackground
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
              onRefresh={() => loadForecast()}
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
    backgroundColor: 'lightBlue',
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
