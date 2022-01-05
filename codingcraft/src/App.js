import './App.css'
import Expenses from './components/Expenses'
import ExpenseForm from './components/NewExpenses/ExpenseForm';
import './components/NewExpenses/NewExpense.css';

function App(){
   
    let expenses = [
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
    return (<div>
        <div class="new-expense">
     <ExpenseForm/>

        </div>
     
    <Expenses item = { expenses}/>
    </div>);
}
export default App;