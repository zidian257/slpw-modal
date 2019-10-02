/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

export class ModalBase extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    // const { modalRoot } = this.props;
    // this.el.className = modalRoot || "modal-root";
  }

  componentDidMount() {
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

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

const Wrapper = styled.div`
  left: 0px;
  top: 0px;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  position: fixed;
  ${props =>
    props.show &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export default ({ show, children }) => (
  <ModalBase>
    <Wrapper show={show}>{show && children}</Wrapper>
  </ModalBase>
);
