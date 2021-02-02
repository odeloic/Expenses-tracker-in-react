

export default function Expense(props) {
  function handleClickOnDelete(expenseId, e) {
    e.preventDefault()
    console.log('This expense', expenseId)
    console.log('Event', e)
  }
  return (
    <div className="expense">
      <div className="details">
        <h3 className="expense__title">
          { props.title }
        </h3>
        <span className="expense__amount">${ props.amount }</span>
        <span className="expense__date">{ props.date }</span>
      </div>
      <div className="actions">
        <button onClick={() => props.deleteExpense(props.id)}>Delete</button>
      </div>
    </div>
  )
}