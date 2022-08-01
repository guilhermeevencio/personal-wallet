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
  reducers: {
    removeExpense(state, action) {
      const filteredExpenses = state.expenses.filter(({ id }) => Number(action.payload) !== Number(id));
      return {
        ...state,
        expenses: filteredExpenses, 
      };
    },
    editExpense(state, action) {
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if(Number(action.payload.id) === Number(expense.id)) {
            expense = action.payload;
          }
          return expense;
        }),
      }
    }
  },
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

export const { removeExpense, editExpense } = saveExpenseSlice.actions;
export default saveExpenseSlice.reducer;
