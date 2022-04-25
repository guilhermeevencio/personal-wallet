import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseForm from '../Components/ExpenseForm';
import Header from '../Components/Header';
import ExpenseCards from '../Components/ExpenseCard';
import { fetchCurrencies } from '../features/saveCurrenciesCode';

const Wallet = () => {
  const [isFormEnabled, setIsFormEnabled] = useState(false)
  const expenses = useSelector(({ savedExpenses: { expenses } }) => expenses);
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
      {expenses.length !== 0
        && expenses.map((expense, index) => (
          <ExpenseCards expense={ expense } key={ index }/>
        ))
      }
    </div>
  )
}

export default Wallet;