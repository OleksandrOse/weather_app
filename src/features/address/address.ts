import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AddressState = {
  address: string;
  loading: boolean;
  error: string;
};

const initialState: AddressState = {
  address: '',
  loading: false,
  error: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export default addressSlice.reducer;
export const { actions } = addressSlice;
