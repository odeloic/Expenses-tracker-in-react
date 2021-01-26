var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SayHello = function (_React$Component) {
  _inherits(SayHello, _React$Component);

  function SayHello(props) {
    _classCallCheck(this, SayHello);

    var _this = _possibleConstructorReturn(this, (SayHello.__proto__ || Object.getPrototypeOf(SayHello)).call(this, props));

    _this.state = { name: 'Loic' };
    return _this;
  }

  _createClass(SayHello, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        ' Hello ',
        this.props.name,
        ' '
      );
    }
  }]);

  return SayHello;
}(React.Component);

export default SayHello;