import React from 'react';
import { ExpenseItem } from './ExpenseItem';
import './ExpenseList.css';

export const ExpenseList = ({ expenses, handleDelete, handleEdit }) => {
  return (
    <div className="expense-list-container">
      <ul className='expense-list'>
        {expenses.map(expense => {
          return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />
        })}
      </ul>
      <button className="clear-button">
        목록 지우기
      </button>
    </div>
  );
}
