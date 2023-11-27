import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useDebounce } from 'use-debounce';
import React, { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { useAppDispatch } from '../../app/hooks';
import { actions as weatherActions } from '../../features/weather/weather';
import { getWeather } from '../../api/weather';

const WeatherSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');
  const [debouncedValue] = useDebounce(city, 3000);

  async function searchWeather() {
    try {
      const weather = await getWeather(debouncedValue);
      console.log(weather.current);

      if (weather.current) {
        dispatch(weatherActions.set(weather));
        dispatch(weatherActions.setCity(weather.location.name));
      } else {
        alert('There is no such city. Please try again');
        Alert.alert('Warn', 'There is no such city. Please try again');
      }
    } catch {
      alert('Something went wrong');
    } finally {
      setCity('');
    }
  }

  useEffect(() => {
    if (debouncedValue !== '') {
      void searchWeather();
    }
  }, [debouncedValue]);

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.nativeEvent.text)}
      />
      <EvilIcons name="search" size={28} color="black" />
    </View>
  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  searchInput: {
    width: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'transparent',
  },
});
