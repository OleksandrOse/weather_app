import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../types/Location';

type LocationState = {
  location: Location | null;
  loading: boolean;
  error: string;
};

const initialState: LocationState = {
  location: null,
  loading: false,
  error: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    remove: (state) => {
      state.location = null;
    },
  },
});

export default locationSlice.reducer;
export const { actions } = locationSlice;
