import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const userName = useSelector(({ userInfo: { user } }) => user.userName);
  const expenses = useSelector(({ savedExpenses: { expenses } }) => expenses);
  const expensesValueSum = expenses
    .reduce((acc, {value, currency, exchangeRates }) => acc + Number(value) * Number(exchangeRates[currency].ask), 0);
  
  return (
    <div className="bg-gray-300">
      <h3>{`Olá, ${ userName }!`}</h3>
      <h3>{`Total: ${ expensesValueSum } BRL`}</h3>
      {/* <h3>{ expensesValueSum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h3> */}
    </div>
  )
}

export default Header;