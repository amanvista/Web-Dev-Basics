import './NewExpense.css'
import React from "react"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    
const saveDataHandler =(enteredExpenseData) => {

    const expenseData = { 
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    // console.log("Hi whats up")

}

return (
    <div class="new-expense">
    <ExpenseForm onSaveExpenseData = {saveDataHandler} />
    <h1>Hi whats up girl</h1>
       </div>
)

}
export default NewExpense