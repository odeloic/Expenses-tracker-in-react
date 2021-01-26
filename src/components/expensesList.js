import Expense from './expense.js'

export default function ExpensesList(props) {
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, index) => <li key={index}><Expense title={expense.title} amount={expense.amount} date={expense.date}/></li>)}
    </ul>
  )
}