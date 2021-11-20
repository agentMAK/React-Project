import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseHandler = enteredExpenseData => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(expense)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;