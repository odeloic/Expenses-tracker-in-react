import Expense from './expense.js'

export default function ExpensesList(props) {
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, index) => <li key={index}><Expense id={index} title={expense.title} amount={expense.amount} date={expense.date} deleteExpense={props.handleDeleteExpense} /></li>)}
    </ul>
  )
}