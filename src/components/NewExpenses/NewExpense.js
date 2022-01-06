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
    
       </div>
)

}
export default NewExpense