import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// here i am using component svg
import LocationSvg from '../icons/Location';
//import LocationSvg from '../../../assets/location.svg';

type Props = {
  address: string;
};

const LocationInfo: React.FC<Props> = ({ address }) => {
  return (
    <View style={styles.info}>
      <LocationSvg />
      <Text style={styles.city}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  city: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  country: {
    fontSize: 18,
  },
});

export default LocationInfo;
