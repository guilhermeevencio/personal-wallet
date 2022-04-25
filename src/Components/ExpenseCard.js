import React from 'react';
import './Styles/ExpenseCard.css';

const ExpenseCard = () => {
  return (
    <>
    <div className="expense-container">
      <div className="expense-item">
        <h4>Descrição</h4>
        <p>iFood</p>
      </div>
      <div className="expense-item">
        <h4>Tag</h4>
        <p>Alimentação</p>
      </div>
      <div className="expense-item">
        <h4>Valor</h4>
        <p>30,00 USD</p>
      </div>
      <div className="expense-item">
        <h4>Valor Convertido</h4>
        <p>150,00 BRL</p>
      </div>
      <div className="expense-buttons">
        <button>Editar</button>
        <button>Remover</button>
      </div>
    </div>
    <div className="expense-container">
      <div className="expense-item">
        <h4>Descrição</h4>
      </div>
      <div className="expense-item">
        <h4>Tag</h4>
      </div>
      <div className="expense-item">
        <p>30,00 USD</p>
      </div>
      <div className="expense-item">
        <p>150,00 BRL</p>
      </div>
      <div className="expense-buttons">
        <button>Editar</button>
        <button>Remover</button>
      </div>
    </div>
    </>
  )
}

export default ExpenseCard