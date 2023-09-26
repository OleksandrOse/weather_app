import { client } from '../utils/fetchClient';
import { Weather } from '../types/Weather';

const API_Key = 'f0008aab609e4afc85c182548232209';
const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_Key}`;

export const getWeather = (city: string) => {
  return client.get<Weather>(`${url}&q=${city}&days=7&&hour=4&&hour3`);
};