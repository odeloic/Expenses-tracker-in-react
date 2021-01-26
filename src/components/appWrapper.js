import ExpensesList from './expensesList.js'
export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
  }
  render () {
    return (
      <div className="main-wrapper">
        <header className="app-header">
          <h3>Xpense Tracker</h3>
          <div className="budget-summary">
            <p className="total">
              <span>Total expenses</span>
              <span className="value">$280</span>
            </p>
          </div>
        </header>
        <main className="app-content">
          <div className="form">
            <form className="new-expense-form">
              <div className="form-group">
                <label>Title of new expense</label>
                <input id="title" name="title" type="text" />
              </div>
              <div className="form-group">
                <label>Title of new expense</label>
                <input id="amount" name="amount" type="number" />
              </div>
              <button className="form-button">Add new expense</button>
            </form>
          </div>
          <div className="expenses-list-wrapper">
            <ul className="expenses-list">
              <h3>Most recent expenses</h3>
              <ExpensesList expenses={this.props.data.expenses} />
            </ul>
          </div>
        </main>
      </div>
    )
  }
}