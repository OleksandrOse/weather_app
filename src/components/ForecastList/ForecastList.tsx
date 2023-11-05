import React from 'react';

import { Text, View, StyleSheet, Image } from 'react-native';
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
      <View>
        {forecast.forecastday.slice(1).map((item, index) => (
          <View style={styles.containerInfo} key={index}>
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
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    backgroundColor: '#0345fc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
    borderTopWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 5,
    paddingLeft: 10,
  },
  'containerInfo:last-child': {
    borderBottomWidth: 1,
  },
  containerForecast: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
