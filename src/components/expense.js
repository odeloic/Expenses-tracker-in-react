export default function Expense(props) {
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
        <button>Delete</button>
      </div>
    </div>
  )
}