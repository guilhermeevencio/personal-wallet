import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrenciesToExpense, saveExpense as saveExpenseAction } from '../features/saveExpense';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(({ currenciesCode }) => currenciesCode.currencies)
  const [expense, setExpense] = useState({
    currency: 'USD',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    value: "0",
  });

  const handleChange = ({ target }) => {
    setExpense({
      ...expense, 
      [target.name]: target.value,
    })
  }

   const handleSubmit = async (event) => {
     event.preventDefault();
     dispatch(fetchCurrenciesToExpense(expense));
   } 
  return (
    <div className="m-8 bg-neutral-200 rounded-md drop-shadow-md border-2 border-slate-300">
      <form className="p-4">

        <div className="flex justify-center rounded-md m-2">
          <input
            className="rounded-md p-2 border-none drop-shadow-md text-center w-32 m-2"
            type="number"
            name="value"
            id="value-input"
            onChange={ handleChange }
            defaultValue="0"
          />
          <select
            className="rounded-md p-2 border-none drop-shadow-md text-center w-28 m-2"
            id="currency-input"
            name="currency"
            onChange={ handleChange }
          >
            { currencies.length !== 0
              && (currencies.map((currency, index) => (<option key={ index }>{currency}</option>)))
            }
          </select>
        </div>

        <div className="flex flex-col items-center rounded-md m-2">
          <select
            className="rounded-md p-2 border-none drop-shadow-md text-center w-48 m-2"
            id="method-input"
            name="method"
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select
            className="rounded-md p-2 border-none drop-shadow-md text-center w-40 m-2"
            id="tag-input"
            name="tag"
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </div>

        <div className="flex flex-col justify-center items-center rounded-md m-2">
          <input
            className="rounded-md p-2 border-none drop-shadow-md text-center m-2 w-5/6"
            type="text"
            name="description"
            id="description-input"
            onChange={ handleChange }
            placeholder="Descrição"
          />
          <button
          className="rounded-md p-4 drop-shadow-md text-center w-52 m-8 bg-cyan-700 text-slate-50 text-xl font-semibold"
          id="submit-expense-button"
          onClick={ handleSubmit }
          >
            Adicionar Despesa
          </button>
        </div>

      </form>
    </div>
  )
}

export default ExpenseForm;