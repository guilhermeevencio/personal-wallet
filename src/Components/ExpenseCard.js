import React, { useEffect, useState } from 'react';
import './Styles/ExpenseCard.css';
import { MdFastfood, MdWork, MdDirectionsBusFilled } from 'react-icons/md';
import { FaHospital, FaUmbrellaBeach } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpense } from '../features/saveExpense';
import ExpenseForm from './ExpenseForm';

const ExpenseCards = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveExpense = (event) => {
    event.preventDefault();
    const id = event.target.id;
    dispatch(removeExpense(id));
  }

  const handleEdit = (event) => {
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
    <div className="expense-container">
      {/* {console.log(propsState)} */}

      {isEditing
        ? <ExpenseForm />
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
        <button
          type="button"
          onClick={ handleEdit }
        >
          {isEditing ? 'Salvar' : 'Editar'}
        </button>
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

export default ExpenseCards