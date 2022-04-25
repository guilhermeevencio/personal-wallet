import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ExpenseForm from '../Components/ExpenseForm';
import Header from '../Components/Header';
import { fetchCurrencies } from '../features/saveCurrenciesCode';

const Wallet = () => {
  const [isFormEnabled, setIsFormEnabled] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);
  return (
    <div>
      <Header />
      {isFormEnabled
        && <ExpenseForm />
      }
      <button
      type="button"
      onClick={ () => setIsFormEnabled(!isFormEnabled) }
      >
        +
      </button>
    </div>
  )
}

export default Wallet;