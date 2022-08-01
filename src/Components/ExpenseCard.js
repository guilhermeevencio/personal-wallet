import React, { useState } from 'react';
import './Styles/ExpenseCard.css';
import { MdFastfood, MdWork, MdDirectionsBusFilled } from 'react-icons/md';
import { FaHospital, FaUmbrellaBeach } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpense, editExpense } from '../features/saveExpense';

const ExpenseCards = (props) => {
const {
  value,
  description,
  currency,
  method,
  tag,
  exchangeRates,
  id } = props.expense;

  const [isEditing, setIsEditing] = useState(false);

  const [editedExpense, setEditedExpense] = useState({
    currency,
    description,
    method,
    tag,
    value,
    exchangeRates,
    id,
  });

  const currencies = useSelector(({ currenciesCode }) => currenciesCode.currencies)

  const dispatch = useDispatch();

  const handleRemoveExpense = (event) => {
    event.preventDefault();
    const id = event.target.id;
    dispatch(removeExpense(id));
  }

  const handleEdit = (event) => {
    setIsEditing(!isEditing);
  }

  const handleChange = ({ target }) => {
    setEditedExpense({
      ...editedExpense, 
      [target.name]: target.value,
    })
    console.log(editedExpense);
  }

  const handleSave = (event) => {
    dispatch(editExpense(editedExpense));
    setIsEditing(!isEditing);
  }

  const selectedIcon = () => {
    switch (props.expense.tag) {
    case 'Alimentação':
      return (<MdFastfood />)
    case 'Transporte':
      return (<MdDirectionsBusFilled />) 
    case 'Saúde':
      return (<FaHospital />)
    case 'Trabalho':
      return (<MdWork />)
    default:
        return (<FaUmbrellaBeach />)
    }
  }

  return (
    <div className="expense-container drop-shadow-xl">
      {isEditing
        ? <form id="edit-form" >
            <input
            onChange={ handleChange }
            type="number"
            name="value"
            value={ editedExpense.value }
            id="edit-description"/>
            <select
              id="edit-currency-input"
              name="currency"
              onChange={ handleChange }
              value={ editedExpense.currency }
            >
              { currencies.length !== 0
                && (currencies.map((currency, index) => (<option key={ index }>{currency}</option>)))
              }
            </select>
            <select
              id="edit-method-input"
              name="method"
              onChange={ handleChange }
              value={ editedExpense.method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
            <select
              id="edit-tag-input"
              name="tag"
              onChange={ handleChange }
              value={ editedExpense.tag }
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
              id="edit-description-input"
              onChange={ handleChange }
              placeholder="Descrição"
              value={ editedExpense.description }
            />

        </form>
        : <>
            <div className="expense-item icon">
              { selectedIcon() }
            </div>

            <div className="expense-item">
              <h4>{props.expense.description}</h4>
            </div>

            <div className="expense-item">
              <p>{`${props.expense.value} ${ props.expense.currency }`}</p>
            </div>

            <div className="expense-item">
              <p>150,00 BRL</p>
            </div>
          </>
      }

      <div className="expense-buttons">
        {!isEditing
          ? (
            <button
              type="button"
              onClick={ handleEdit }
              id={ props.expense.id }
            >
              Editar
            </button>
          )
          : (
            <button
            type="button"
            onClick={ handleSave }
            id={ props.expense.id }
            >
              Salvar
            </button>
          )
        }
        <button
          type="button"
          onClick={ handleRemoveExpense }
          id={ props.expense.id }
        >
          Remover
        </button>
      </div>
    </div>
  )
}

export default ExpenseCards;