import ExpensesList from './expensesList.js'
import NewExpenseForm from './newExpenseForm.js'
export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { budgetLimit: 0, expenses: [], totalExpenses: 0 }
    this.handleAddExpenseToList = this.handleAddExpenseToList.bind(this)
    this.deleteExpense = this.deleteExpense.bind(this)
  }

  handleAddExpenseToList(expense) {
    const expenses = [...this.state.expenses, expense]
    this.setState({ expenses })
    this.setState({ totalExpenses: this.state.totalExpenses + expense.amount })
  }

  deleteExpense(expenseId) {
    const expense = this.state.expenses[expenseId]
    const expenses = this.state.expenses
    expenses.splice(expenseId,1)
    this.setState({ expenses })
    this.setState({ totalExpenses: this.state.totalExpenses - expense.amount })
  }

  render () {
    return (
      <div className="main-wrapper">
        <header className="app-header">
          <h3>Xpense Tracker</h3>
          <div className="budget-summary">
            <p className="total">
              <span>Total expenses</span>
              <span className="value">${parseFloat(this.state.totalExpenses)}</span>
            </p>
          </div>
        </header>
        <main className="app-content">
          <div className="form">
            <NewExpenseForm onAddNewExpense={this.handleAddExpenseToList}/>
          </div>
          <div className="expenses-list-wrapper">
            <ul className="expenses-list">
              <h3>Most recent expenses</h3>
              <ExpensesList expenses={this.state.expenses} handleDeleteExpense={this.deleteExpense} />
            </ul>
          </div>
        </main>
      </div>
    )
  }
}