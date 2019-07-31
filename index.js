"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _loading = _interopRequireDefault(require("./img/loading.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  position: 'fixed',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  background: 'rgba(255, 255, 255, 0.8)',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  zIndex: '2147483647',
  opacity: '1'
};

var FullPageLoading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FullPageLoading, _React$Component);

  function FullPageLoading(props) {
    var _this;

    _classCallCheck(this, FullPageLoading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FullPageLoading).call(this, props));
    _this.state = {
      loading: true,
      newStyle: null
    };
    return _this;
  }

  _createClass(FullPageLoading, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        newStyle: styles
      });
      var timer = this.props.timer ? this.props.timer : 2000;
      setTimeout(function () {
        _this2.setState({
          newStyle: Object.assign({}, _this2.state.newStyle, _defineProperty({}, 'display', 'none'))
        });
      }, timer);
    }
  }, {
    key: "render",
    value: function render() {
      var newStyle = this.state.newStyle;
      return _react["default"].createElement("div", {
        style: newStyle
      }, _react["default"].createElement("img", {
        src: _loading["default"]
      }));
    }
  }]);

  return FullPageLoading;
}(_react["default"].Component);

exports["default"] = FullPageLoading;
