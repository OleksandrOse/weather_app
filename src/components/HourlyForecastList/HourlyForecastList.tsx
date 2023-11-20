import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Weather } from '../../types/Weather';

type Props = {
  weather: Pick<Weather, 'forecast'>;
};

const HourlyForecastList: React.FC<Props> = ({ weather }) => {
  const { forecast } = weather;
  const isCelcium = useAppSelector((state) => state.weather.isCelsium);
  const timeNow = new Date().getHours();
  const hourlyWeather = [
    ...forecast.forecastday[0].hour.slice(timeNow),
    ...forecast.forecastday[0].hour.slice(0, timeNow),
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
      >
        {hourlyWeather.map((item, index) => {
          const hour = item.time.split(' ')[1].split(':')[0];

          return (
            <View key={index} style={styles.current}>
              <Text style={styles.currentDescription}>
                {index === 0 ? 'Now' : `${hour}`}
              </Text>
              <Image
                style={styles.image}
                source={{ uri: `https:${item.condition.icon}` }}
              />
              <Text style={styles.currentDescription}>
                {isCelcium ? `${item.temp_c}°` : `${item.temp_f}°`}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HourlyForecastList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0345fc',
    borderRadius: 10,
    marginBottom: 10,
    opacity: 0.8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 20,
  },
  current: {
    alignItems: 'center',
    gap: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 40,
    resizeMode: 'contain',
  },
  currentDescription: {
    fontSize: 18,
    color: '#fff',
  },
});
