var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewExpenseForm = function (_React$Component) {
  _inherits(NewExpenseForm, _React$Component);

  function NewExpenseForm(props) {
    _classCallCheck(this, NewExpenseForm);

    var _this = _possibleConstructorReturn(this, (NewExpenseForm.__proto__ || Object.getPrototypeOf(NewExpenseForm)).call(this, props));

    _this.state = {
      title: '',
      amount: 0
    };

    _this.handleChangeTitle = _this.handleChangeTitle.bind(_this);
    _this.handleChangeAmount = _this.handleChangeAmount.bind(_this);
    _this.handleSubmitForm = _this.handleSubmitForm.bind(_this);
    return _this;
  }

  _createClass(NewExpenseForm, [{
    key: 'handleChangeTitle',
    value: function handleChangeTitle(event) {
      this.setState({ title: event.target.value });
    }
  }, {
    key: 'handleChangeAmount',
    value: function handleChangeAmount(event) {
      this.setState({ amount: parseFloat(event.target.value) });
    }
  }, {
    key: 'handleSubmitForm',
    value: function handleSubmitForm(event) {
      event.preventDefault();
      this.props.onAddNewExpense(Object.assign({}, this.state, { date: new Date().toLocaleDateString() }));
      this.setState({ title: '', amount: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { className: 'new-expense-form', onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            null,
            'Title of new expense'
          ),
          React.createElement('input', { id: 'title', name: 'title', type: 'text', value: this.state.title, onChange: this.handleChangeTitle })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            null,
            'Title of new expense'
          ),
          React.createElement('input', { id: 'amount', name: 'amount', value: this.state.amount, type: 'number', onChange: this.handleChangeAmount })
        ),
        React.createElement(
          'button',
          { className: 'form-button', onClick: this.handleSubmitForm },
          'Add new expense'
        )
      );
    }
  }]);

  return NewExpenseForm;
}(React.Component);

export default NewExpenseForm;