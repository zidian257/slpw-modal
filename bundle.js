import React from 'react';
import ReactDOM from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var ModalBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalBase, _React$Component);

  function ModalBase(props) {
    var _this;

    _classCallCheck(this, ModalBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalBase).call(this, props));
    _this.el = document.createElement("div"); // const { modalRoot } = this.props;
    // this.el.className = modalRoot || "modal-root";

    return _this;
  }

  _createClass(ModalBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 在 Modal 的所有子元素被挂载后，
      // 这个 portal 元素会被嵌入到 DOM 树中，
      // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
      // 如果要求子组件在挂载时可以立刻接入 DOM 树，
      // 例如衡量一个 DOM 节点，
      // 或者在后代节点中使用 ‘autoFocus’，
      // 则需添加 state 到 Modal 中，
      // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
      document.body.appendChild(this.el);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
  }]);

  return ModalBase;
}(React.Component); // const Wrapper = styled.div`
//   left: 0px;
//   top: 0px;
//   z-index: 100;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-color: rgba(0, 0, 0, 0.5);
//   opacity: 0;
//   visibility: hidden;
//   transition: all 0.25s ease-in-out;
//   position: fixed;
//   ${props =>
//     props.show &&
//     css`
//       visibility: visible;
//       opacity: 1;
//     `};
// `;
// export default ({ show, children }) => (
//   <ModalBase>
//     <Wrapper show={show}>{show && children}</Wrapper>
//   </ModalBase>
// );

export { ModalBase };
