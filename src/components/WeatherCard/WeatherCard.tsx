import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Weather } from '../../types/Weather';
import NounHumidity from '../../../assets/noun-humidity.svg';
import NounRain from '../../../assets/noun-rain.svg';
import NounWind from '../../../assets/noun-wind.svg';

type Props = {
  weather: Weather;
};

const WeatherCard: React.FC<Props> = ({ weather }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: `https:${weather.current.condition.icon}` }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.temperature}>{`${weather.current.temp_c}°C`}</Text>
        <Text style={styles.description}>Precipitations:</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={styles.description}
          >{`Max.: ${weather.forecast.forecastday[0].day.maxtemp_c}°`}</Text>
          <Text
            style={styles.description}
          >{`Min.: ${weather.forecast.forecastday[0].day.mintemp_c}°`}</Text>
        </View>
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.content}>
          <NounRain />
          <Text style={styles.text}>{`${weather.current.precip_in}%`}</Text>
        </View>

        <View style={styles.content}>
          <NounHumidity />
          <Text style={styles.text}>{`${weather.current.humidity}%`}</Text>
        </View>

        <View style={styles.content}>
          <NounWind />
          <Text style={styles.text}>{`${weather.current.wind_kph} km/h`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  containerDescription: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0345fc',
    borderRadius: 10,
    opacity: 30,
    padding: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#fff',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -10,
  },
  description: {
    fontSize: 18,
    color: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    aspectRatio: '8/8',
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default WeatherCard;
