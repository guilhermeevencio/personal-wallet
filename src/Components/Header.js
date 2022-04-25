import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const userName = useSelector(({ userInfo: { user } }) => user.userName);
  const expenseValue = useSelector(({ savedExpenses: { expenses } }) => expenses);
  const expensesValueSum = expenseValue
    .reduce((acc, {value, currency, exchangeRates }) => acc + (Number(value) * Number(exchangeRates[currency].ask)), 0);
  
  return (
    <div>
      <h3>{`Olá, ${ userName }!`}</h3>
      <h3>{`Total: ${ expensesValueSum.toFixed(2) } BRL`}</h3>
    </div>
  )
}

export default Header;