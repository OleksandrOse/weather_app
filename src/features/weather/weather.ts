import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../types/Weather';
import { getWeather } from '../../api/weather';

export const weatherAsync = createAsyncThunk(
  'weather/get',
  (params: { city: string }) => {
    return getWeather(params.city);
  }
);

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
    remove: (state) => {
      state.weather = null;
    },
    removeError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(weatherAsync.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(weatherAsync.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.loading = false;
    });

    builder.addCase(weatherAsync.rejected, (state) => {
      state.loading = false;
      state.weather = null;
      state.error = 'Something went wrong';
    });
  },
});

export default weatherSlice.reducer;
export const { actions } = weatherSlice;
