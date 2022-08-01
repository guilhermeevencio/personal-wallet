import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseForm from '../../Components/ExpenseForm';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5' 
import Header from '../../Components/Header';
import ExpenseCards from '../../Components/ExpenseCard';
import { fetchCurrencies } from '../../features/saveCurrenciesCode';

import { motion } from 'framer-motion';

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
      <div className="flex flex-col justify-center items-center">
        {isFormEnabled
          && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <ExpenseForm />
            </motion.div>)
        }
        <button
          className=" p-4 bg-green-400 m-4 rounded-full drop-shadow-md"
          type="button"
          onClick={ () => setIsFormEnabled(!isFormEnabled) }
        >
          { isFormEnabled ? < IoChevronUpOutline /> : < IoChevronDownOutline /> }
        </button>
      </div>
        {expenses.length !== 0
          && expenses.map((expense, index) => (
            <ExpenseCards expense={ expense } key={ index }/>
          ))
        }
    </div>
  )
}

export default Wallet;