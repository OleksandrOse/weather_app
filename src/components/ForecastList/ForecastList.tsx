import React from 'react';

import { Text, View, StyleSheet, Image } from 'react-native';
import { useAppSelector } from '../../app/hooks';
import { Weather } from '../../types/Weather';

type Props = {
  weather: Weather;
};

const ForecastList: React.FC<Props> = ({ weather }) => {
  const { forecast } = weather;
  const isCelcium = useAppSelector((state) => state.weather.isCelsium);

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

      {forecast.forecastday.slice(1).map((item, index) => (
        <View style={styles.containerInfo} key={index}>
          <View style={{ width: 80 }}>
            <Text style={styles.text}>{`${getDay(item.date)}`}</Text>
          </View>

          <View style={{ width: 80 }}>
            <Image
              style={styles.image}
              source={{ uri: `https:${item.day.condition.icon}` }}
            />
          </View>

          <View style={{ width: 80 }}>
            <View style={styles.containerForecast}>
              <Text style={styles.text}>
                {isCelcium
                  ? `${item.day.mintemp_c}°C`
                  : `${item.day.mintemp_f}°F`}
              </Text>
              <Text style={styles.text}>
                {isCelcium
                  ? `${item.day.maxtemp_c}°C`
                  : `${item.day.maxtemp_f}°F`}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0345fc',
    borderRadius: 10,
    padding: 10,
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'gray',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerForecast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
