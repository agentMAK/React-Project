import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter' 
import { useState } from 'react'

function Expenses(props) {
  const [year,setYear] = useState("2022")
  const selectedYearHandler = currentYear => {
    setYear(currentYear)
    console.log(currentYear)
  }
  console.log(props.expenseList)
  return (<div>
    <Card className="expenses">
    <ExpenseFilter selectedYear={year} onSelectedYear={selectedYearHandler}/>
      {props.expenseList.map(expense => 
        <ExpenseItem 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />)}
    </Card>
    </div>
  );
}

export default Expenses