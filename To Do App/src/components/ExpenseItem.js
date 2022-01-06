import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import React, { useState } from 'react'
function ExpenseItem(props){

    const month = props.date.toLocaleString('en-US', {month:'long'})
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', {day:'2-digit'})
    const clickHandler = () => {
        setTitle(newTitle)
    }
    const changeHandler = (event) => {
        setNewTitle(event.target.value)
    }
    // let title = props.title
    const [newTitle, setNewTitle] = useState("Hi")
    const [title, setTitle] = useState(props.title)
    return (
        <div className='expense-item'>
            

            <ExpenseDate date = { props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
        
            </div>
    )
}
export default ExpenseItem ;