import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter' 
import { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [year,setYear] = useState("2021")
  const selectedYearHandler = currentYear => {
    setYear(currentYear)
  }
  const filteredExpenses = props.expenseList.filter(expense => expense.date.getFullYear().toString() === year)

  return (<div>
    <Card className="expenses">
    <ExpenseFilter selectedYear={year} onSelectedYear={selectedYearHandler}/>
    <ExpenseChart expenses={filteredExpenses} />
    <ExpenseList items={filteredExpenses} />
    </Card>
    </div>
  );
}

export default Expenses