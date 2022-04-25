import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCurrenciesData from '../services/fetchCurrenciesData';

const initialState = {
  currencies: [],
  status: 'idle',
  error: null
};

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchcurrencies',
  async () => await fetchCurrenciesData()
);

const currenciesCodeSlice = createSlice({
  name: 'currencies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = Object.keys(action.payload);
    })
  }
});

export default currenciesCodeSlice.reducer;