import { client } from '../utils/fetchClient';
import { Address } from '../types/Address';
import { Location } from '../types/Location';

const ACCESS_TOKEN = 'pk.0086320e375054fb45f505f19c461874';
const url = `https://us1.locationiq.com/v1/reverse.php?key=${ACCESS_TOKEN}`;

export const getAddress = (location: Location) => {
  const { latitude, longitude } = location;
  return client.get<Address>(
    `${url}&lat=${latitude}&lon=${longitude}&format=json`
  );
};
