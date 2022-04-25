import React from 'react';

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <input
          type="number"
          id="value-input"
        />
        <select
          id="currency-input"
        >

        </select>
        <select
          id="method-input"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          id="tag-input"
        >
          <option>Alimentaão</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <input />
      </form>
    </div>
  )
}

export default ExpenseForm;