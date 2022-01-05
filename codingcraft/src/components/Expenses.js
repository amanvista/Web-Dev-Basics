import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpenseDate from './ExpenseDate';

function Expenses(props){
    return (
        <div className='expenses'>

<ExpenseItem
    date = {props.item[0].expenseDate}
    title = {props.item[0].expenseTitle}
    amount = { props.item[0].expenseAmount}
    />
    <ExpenseItem
    date = {props.item[1].expenseDate}
    title = {props.item[1].expenseTitle}
    amount = { props.item[1].expenseAmount}
    />
    <ExpenseItem
    date = {props.item[2].expenseDate}
    title = {props.item[2].expenseTitle}
    amount = { props.item[2].expenseAmount}
    />
        </div>
    )
}
export default Expenses