import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../types/Weather';

type WeatherState = {
  weather: Weather | null;
  city: string;
  isCelsium: boolean;
  loading: boolean;
  error: string;
};

const initialState: WeatherState = {
  weather: null,
  city: '',
  isCelsium: true,
  loading: false,
  error: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    remove: (state) => {
      state.weather = null;
    },
    removeError: (state) => {
      state.error = '';
    },
    changeCelsium: (state, action: PayloadAction<boolean>) => {
      state.isCelsium = action.payload;
    },
  },
});

export default weatherSlice.reducer;
export const { actions } = weatherSlice;
