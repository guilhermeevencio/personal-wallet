import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ExpenseForm = () => {
  const currencies = useSelector((state) => state.currenciesCodeSlice.currencies)
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

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(expense);
   } 
  return (
    <div>
      <form>
        <input
          type="number"
          name="value"
          id="value-input"
          onChange={ handleChange }
          defaultValue="0"
        />
        <select
          id="currency-input"
          name="currency"
          onClick={ handleChange }
        >
          { currencies.length !== 0
            && (currencies.map((currency, index) => (<option key={ index }>{currency}</option>)))
          }
        </select>
        <select
          id="method-input"
          name="method"
          onClick={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          id="tag-input"
          name="tag"
          defaultValue="Selecione a Categoria"
          onClick={ handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <input
          type="text"
          name="description"
          id="description-input"
          onChange={ handleChange }
          placeholder="Descrição"
        />
        <button
        id="submit-expense-button"
        onClick={ handleSubmit }
        >
          Adicionar Despesa
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm;