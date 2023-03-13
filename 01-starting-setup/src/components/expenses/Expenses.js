import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css"
import { useState } from 'react'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021')
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(ele => ele.date.getFullYear().toString() === filterYear)
  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses
