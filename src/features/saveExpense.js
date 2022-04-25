import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCurrenciesData from '../services/fetchCurrenciesData';

const initialState = {
  expenses: [],
  status: 'idle',
  error: null,
}

export const fetchCurrenciesToExpense = createAsyncThunk(
  'expenses/saveExpense',
  async (payload) => {
    const exchangeRates = await fetchCurrenciesData();
    return ({
        value: payload.value,
        description: payload.description,
        currency: payload.currency,
        method: payload.method,
        tag: payload.tag,
        exchangeRates,
    })
  }
);

const saveExpenseSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrenciesToExpense.pending, (state, action) => {
      state.status = 'pending';
    }).addCase(fetchCurrenciesToExpense.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.expenses = [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }] 
    })
  }
})

export default saveExpenseSlice.reducer;
