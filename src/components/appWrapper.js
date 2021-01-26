export default class AppWrapper extends React.Component {
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
                <label for="title">Title of new expense</label>
                <input id="title" name="title" type="text" />
              </div>
              <div className="form-group">
                <label for="amount">Title of new expense</label>
                <input id="amount" name="amount" type="number" />
              </div>
              <button className="form-button">Add new expense</button>
            </form>
          </div>
          <div className="expenses-list-wrapper">
            <ul className="expenses-list">
              <h3>Most recent expenses</h3>
              <li className="expense">
                <div className="details">
                  <h3 className="expense__title">
                    Bills for groceries
                  </h3>
                  <span className="expense__amount">$200.80</span>
                  <span className="expense__date">2021-01-12</span>
                </div>
                <div className="actions">
                  <button>Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    )
  }
}