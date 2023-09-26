import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Weather } from '../../types/Weather';
import CloudyWithClearing from '../../../assets/CloudyWithСlearing.svg';
// here i import svg but when i open in browser i get error wrong path
import NounHumidity from '../../../assets/noun-humidity.svg';
import NounRain from '../../../assets/noun-rain.svg';
import NounWind from '../../../assets/noun-wind.svg';

type Props = {
  weather: Weather;
};

const WeatherCard: React.FC<Props> = ({ weather }) => {
  const { current } = weather;

  return (
    <View style={styles.card}>
      <CloudyWithClearing width={284} height={208} />
      <View style={styles.infoContainer}>
        <Text style={styles.temperature}>{`${current.temp_c}°C`}</Text>
        <Text
          style={styles.description}
        >{`Wind: ${current.wind_kph} km/h`}</Text>
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.content}>
          <NounRain />
          <Text style={styles.text}>{`${current.precip_in}%`}</Text>
        </View>

        <View style={styles.content}>
          <NounHumidity />
          <Text style={styles.text}>{`${current.humidity}%`}</Text>
        </View>

        <View style={styles.content}>
          <NounWind />
          <Text style={styles.text}>{`${current.wind_kph} km/h`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginLeft: 20,
  },
  containerDescription: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0345fc',
    borderRadius: 20,
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
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#fff',
  },
});

export default WeatherCard;
