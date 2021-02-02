

export default function Expense(props) {
  function handleClickOnDelete(expenseId, e) {
    e.preventDefault();
    console.log('This expense', expenseId);
    console.log('Event', e);
  }
  return React.createElement(
    'div',
    { className: 'expense' },
    React.createElement(
      'div',
      { className: 'details' },
      React.createElement(
        'h3',
        { className: 'expense__title' },
        props.title
      ),
      React.createElement(
        'span',
        { className: 'expense__amount' },
        '$',
        props.amount
      ),
      React.createElement(
        'span',
        { className: 'expense__date' },
        props.date
      )
    ),
    React.createElement(
      'div',
      { className: 'actions' },
      React.createElement(
        'button',
        { onClick: function onClick() {
            return props.deleteExpense(props.id);
          } },
        'Delete'
      )
    )
  );
}