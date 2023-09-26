import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../types/Weather';

type WeatherState = {
  weather: Weather | null;
  loading: boolean;
  error: string;
};

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: '',
};

const locationSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
    },
    remove: (state) => {
      state.weather = null;
    },
  },
});

export default locationSlice.reducer;
export const { actions } = locationSlice;
