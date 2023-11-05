import { View, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { useAppDispatch } from '../../app/hooks';
import { actions as addressActions } from '../../features/address/address';
import { actions as weatherActions } from '../../features/weather/weather';
import { getWeather } from '../../api/weather';

const WeatherSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');

  const handleClick = async () => {
    try {
      const weather = await getWeather(city);

      if (weather.current) {
        dispatch(weatherActions.set(weather));
        dispatch(addressActions.set(city));
      } else {
        Alert.alert('Error', 'There is no such city');
      }
    } catch {
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setCity('');
    }
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.nativeEvent.text)}
      />
      <EvilIcons
        name="search"
        size={28}
        color="black"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onPress={() => handleClick()}
      />
    </View>
  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width / 2.2,
    borderWidth: 1.5,
    borderColor: 'blue',
    paddingVertical: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
});
