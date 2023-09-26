import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address } from '../../types/Address';

type AddressState = {
  address: Address | null;
  loading: boolean;
  error: string;
};

const initialState: AddressState = {
  address: null,
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
    set: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
    remove: (state) => {
      state.address = null;
    },
  },
});

export default addressSlice.reducer;
export const { actions } = addressSlice;
