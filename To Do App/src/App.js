import './App.css'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';
import React, { useState } from 'react'


const App = () =>{
    let dummy_expense = [
        {
            id: 'e1',
            expenseDate : new Date(),
            expenseTitle : "School Fee",
            expenseAmount : 100 
        },
        {
            id: 'e2',
            expenseDate : new Date(),
            expenseTitle : "Food Charges",
            expenseAmount : 500 
        },
        {
            id: 'e3',
            expenseDate : new Date(),
            expenseTitle : "House Rent",
            expenseAmount : 300 
        }
    ]
   const [ expenses, setExpenses ] = useState(dummy_expense) 

    const addExpenseHandler = (expense)=>{

        const updatedExpense = [ expense, ...expenses]
        console.log(updatedExpense);
        setExpenses(updatedExpense)
    }
    return (<div>
        
     <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item = { expenses}/>
    </div>);
}
export default App;