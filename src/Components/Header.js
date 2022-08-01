import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const userName = useSelector(({ userInfo: { user } }) => user.userName);
  const expenses = useSelector(({ savedExpenses: { expenses } }) => expenses);
  const expensesValueSum = Number(expenses
    .reduce((acc, {value, currency, exchangeRates }) => acc + Number(value) * Number(exchangeRates[currency].ask), 0)
    .toFixed(2));
  
  return (
    <div className="flex justify-between items-center bg-slate-900 p-4">
      <div>
        <h2 className="font-extrabold text-2xl text-green-500">Personal </h2>
        <h2 className="font-extrabold text-2xl text-slate-400">Wallet</h2>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="mb-2 text-zinc-300">{`Olá, ${ userName }!`}</h3>
        <h3 className="font-semibold text-zinc-300">
          {`Total: ${expensesValueSum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }`}
        </h3>
      </div>
    </div>
  )
}

export default Header;