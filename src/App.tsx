import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Location } from './types/Location';
import { Weather } from './types/Weather';

import { getLocation } from './api/location';
import { getAddress } from './api/address';
import { getWeather } from './api/weather';

import LocationInfo from './components/LocationInfo/LocationInfo';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ForecastList from './components/ForecastList/ForecastList';

export default function App() {
  const [location, setLocation] = useState<null | Location>(null);
  const [address, setAddress] = useState<string>('Kyiv');
  const [weather, setWeather] = useState<Weather | null>(null);
  console.log(weather);

  useEffect(() => {
    getLocation()
      .then((res) => {
        setLocation(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (location) {
      getAddress(location)
        .then((res) => {
          setAddress(res.address.city);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [address, location]);

  useEffect(() => {
    getWeather(address)
      .then((res) => {
        setWeather(res);
      })
      .catch((error) => {
        console.log(error);
      });

    if (weather) {
      weather.forecast.forecastday.forEach((element) => {
        console.log(element);
      });
    }
  }, [address]);

  return (
    <SafeAreaView style={styles.container}>
      <LocationInfo address={address} />
      {weather && <WeatherCard weather={weather} />}
      {weather && <ForecastList weather={weather} />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
