import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore  } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import userInfoSlice from './features/userInfo';
import currenciesCodeSlice from './features/saveCurrenciesCode';
import saveExpenseSlice from './features/saveExpense';

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    currenciesCode: currenciesCodeSlice,
    savedExpenses: saveExpenseSlice,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
