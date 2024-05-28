import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  return (
    <li className="expense-item">
      <div className="expense-info">
        <span>{expense.charge}</span>
        <span>{expense.amount}</span>
      </div>
      <div className="expense-actions">
        <button className="edit-button" onClick={() => handleEdit(expense.id)}>
          수정
        </button>
        <button className="delete-button" onClick={() => handleDelete(expense.id)}>
          삭제
        </button>
      </div>
    </li>
  );
}
