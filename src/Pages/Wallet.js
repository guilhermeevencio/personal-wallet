import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ExpenseForm from '../Components/ExpenseForm';
import Header from '../Components/Header';
import { fetchCurrencies } from '../features/saveCurrenciesCode';

const Wallet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <ExpenseForm />
    </div>
  )
}

export default Wallet;