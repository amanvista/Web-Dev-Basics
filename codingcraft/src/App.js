import './App.css'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';

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
    const addExpenseHandler = (expense)=>{
        console.log(expense)
        console.log("from Parent");
    }
    return (<div>
       
     <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item = { expenses}/>
    </div>);
}
export default App;