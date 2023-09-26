import React from 'react';

import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { Weather } from '../../types/Weather';

type Props = {
  weather: Weather;
};

const ForecastList: React.FC<Props> = ({ weather }) => {
  const { forecast } = weather;

  const getDay = (date: string) => {
    const daysNumber = new Date(date);
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return daysOfWeek[daysNumber.getDay()];
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Forecast</Text>
      <FlatList
        data={forecast.forecastday.slice(1)}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View style={styles.containerInfo}>
            <Text style={styles.text}>{`${getDay(item.date)}`}</Text>
            <Image
              style={styles.image}
              source={{ uri: `https:${item.day.condition.icon}` }}
            />
            <View style={styles.containerForecast}>
              <Text style={styles.text}>{`${item.day.maxtemp_c}°C`}</Text>
              <Text style={styles.text}>{`${item.day.mintemp_c}°C`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    color: 'white',
    backgroundColor: '#0345fc',
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 22,
    color: '#fff',
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 15,
    margin: 5,
  },
  containerForecast: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 40,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default ForecastList;
