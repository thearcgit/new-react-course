import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css"
import { useState } from 'react'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021')
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
        selected={filterYear} 
        onChangeFilter={filterChangeHandler} 
        />
        {props.items.map(expense =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)}

      </Card>
    </div>
  )
}

export default Expenses
