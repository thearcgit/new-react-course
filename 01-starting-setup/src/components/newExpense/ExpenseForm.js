import React, { useEffect, useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [ueserInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: 'p',
    //     enteredDate: 'vv',
    // })
    const titleChangeHandler = (e) => {
        // setUserInput({ ...ueserInput, enteredTitle: e.target.value, })
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        // setUserInput({ ...ueserInput, enteredAmount: e.target.value, })
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        // setUserInput({ ...ueserInput, enteredDate: e.target.value, })
        setEnteredDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    // useEffect(() => {
    //     console.log(ueserInput)
    // })

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={enteredAmount}  min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={enteredDate}  min='2023-02-01' max='2024-12-31' onChange={dateChangeHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )
}

export default ExpenseForm
