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
    <div className="bg-neutral-100 w-5/6 rounded-xl drop-shadow-xl flex md:flex-wrap md:w-fit m-auto md:m-4 flex-col justify-center items-center p-4 md:p-12">
      {isEditing
        ? <form id="edit-form" className="flex flex-col items-center justify-center mb-4" >
          <div>
            <input
              className="rounded-md p-2 border-none drop-shadow-md text-center w-32 m-2"
              onChange={handleChange}
              type="number"
              name="value"
              value={editedExpense.value}
              id="edit-description" />
            <select
              id="edit-currency-input"
              className="rounded-md p-2 border-none drop-shadow-md text-center w-28 m-2"
              name="currency"
              onChange={handleChange}
              value={editedExpense.currency}
            >
              {currencies.length !== 0
                && (currencies.map((currency, index) => (<option key={index}>{currency}</option>)))
              }
            </select>
          </div>
          <select
            className="rounded-md p-2 border-none drop-shadow-md text-center w-5/6 m-2"
            id="edit-method-input"
            name="method"
            onChange={handleChange}
            value={editedExpense.method}
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select
            className="rounded-md p-2 border-none drop-shadow-md text-center w-5/6 m-2"
            id="edit-tag-input"
            name="tag"
            onChange={handleChange}
            value={editedExpense.tag}
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <input
            className="rounded-md p-2 border-none drop-shadow-md text-center m-2 w-5/6"
            type="text"
            name="description"
            id="edit-description-input"
            onChange={handleChange}
            placeholder="Descrição"
            value={editedExpense.description}
          />

        </form>
        : <div className="flex flex-col items-center justify-center mb-4">
          <div className="text-4xl">
            {selectedIcon()}
          </div>

          <div className="">
            <h4>{props.expense.description}</h4>
          </div>

          <div className="">
            <p>{`${props.expense.value} ${props.expense.currency}`}</p>
          </div>

          <div className="">
            <p>150,00 BRL</p>
          </div>
        </div>
      }

      <div className="flex items-center flex-wrap justify-center">
        {!isEditing
          ? (
            <button
              className="rounded-md p-1 drop-shadow-lg text-center w-28 m-2 bg-cyan-700 text-slate-50 text-xl font-semibold"
              type="button"
              onClick={handleEdit}
              id={props.expense.id}
            >
              Editar
            </button>
          )
          : (
            <button
              className="rounded-md p-1 drop-shadow-lg text-center text-slate-50 w-28 m-2 bg-green-500 text-xl font-semibold"
              type="button"
              onClick={handleSave}
              id={props.expense.id}
            >
              Salvar
            </button>
          )
        }
        <button
          className="rounded-md p-1 drop-shadow-lg text-center text-slate-50 w-28 m-2 bg-red-400 text-xl font-semibold"
          type="button"
          onClick={handleRemoveExpense}
          id={props.expense.id}
        >
          Remover
        </button>
      </div>
    </div>
  )
}

export default ExpenseCards;