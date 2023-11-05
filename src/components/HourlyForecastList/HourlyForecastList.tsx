import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { Weather } from '../../types/Weather';

type Props = {
  weather: Pick<Weather, 'forecast'>;
};

const HourlyForecastList: React.FC<Props> = ({ weather }) => {
  const { forecast } = weather;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {forecast.forecastday[0].hour.map((item, index) => {
          const hour = item.time.split(' ')[1].split(':')[0];

          return (
            <View key={index} style={styles.current}>
              <Text style={styles.currentDescription}>{hour}</Text>
              <Image
                style={styles.image}
                source={{ uri: `https:${item.condition.icon}` }}
              />
              <Text style={styles.currentDescription}>
                {`${item.feelslike_c}°`}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HourlyForecastList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#0345fc',
    borderRadius: 10,
    marginBottom: 10,
  },
  current: {
    alignItems: 'center',
    gap: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 40,
    aspectRatio: '1/1',
    borderRadius: 10,
  },
  currentDescription: {
    fontSize: 18,
    color: '#fff',
  },
});
