import React from 'react';
import './ExpenseForm.css';

export const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit, edit }) => {
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-item">
          <label htmlFor='charge'>지출 항목</label>
          <input
            type='text'
            id='charge'
            name='charge'
            placeholder='예) 렌트비'
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="input-item">
          <label htmlFor='amount'>비용</label>
          <input
            type='number'
            id='amount'
            name='amount'
            placeholder='예) 1000'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className="submit-button" type='submit'>
        {edit ? '수정' : '제출'}
      </button>
    </form>
  );
}
