import React from 'react';
import { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [newExpenseOpen,setNewExpenseOpen] = useState(false)

  const saveExpenseHandler = enteredExpenseData => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(expense)
    setNewExpenseOpen(false)
  }

  const openExpenseFormHander = () => {
    setNewExpenseOpen(true)
  }

  const closeExpeneseForm = () => {
    setNewExpenseOpen(false)
  }
  
  return (
    <div className='new-expense'>
      {!newExpenseOpen && <button onClick={openExpenseFormHander}>Add New Expense</button>}
      {newExpenseOpen && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onExpenseFormClose={closeExpeneseForm}/>}
    </div>
  );
};

export default NewExpense;