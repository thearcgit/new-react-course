import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const showFormHandler = () => {
        setShowForm(true)
    }
    const stopShowingForm = () => {
        setShowForm(false)
    }
    return (
        <div className='new-expense'>
            {!showForm ?
                <button onClick={showFormHandler}>Add New Expense</button>
                :
                <ExpenseForm
                    onSaveExpenseData = {saveExpenseDataHandler}
                    stopShowingForm = {stopShowingForm}
                />}
        </div>
    )
}

export default NewExpense
