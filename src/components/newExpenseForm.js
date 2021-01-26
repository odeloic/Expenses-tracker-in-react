export default class NewExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      amount: 0
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeAmount = this.handleChangeAmount.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value })
  }

  handleChangeAmount(event) {
    this.setState({ amount: parseFloat(event.target.value) })
  }

  handleSubmitForm(event) {
    event.preventDefault()
    this.props.onAddNewExpense({...this.state, date: new Date().toLocaleDateString() })
    this.setState({ title: '', amount: 0 })
  }

  render () {
    return (
      <form className="new-expense-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title of new expense</label>
          <input id="title" name="title" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div className="form-group">
          <label>Title of new expense</label>
          <input id="amount" name="amount" value={this.state.amount} type="number" onChange={this.handleChangeAmount}/>
        </div>
        <button className="form-button" onClick={this.handleSubmitForm}>Add new expense</button>
      </form>
    )
  }
}