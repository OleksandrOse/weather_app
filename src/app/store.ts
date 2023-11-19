import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import addressReducer from '../features/address/address';
import weatherReducer from '../features/weather/weather';

export const store = configureStore({
  reducer: {
    address: addressReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
