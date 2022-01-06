import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpenseDate from './ExpenseDate';

function Expenses(props){
    return (
        <div className='expenses'>
            {
                props.item.map(
                    (expense) => (
                        <ExpenseItem
                            date = {expense.expenseDate}
                            title = {expense.expenseTitle}
                            amount = { expense.expenseAmount}
                            />
                    )
                )
            }
        </div>
    )
}
export default Expenses