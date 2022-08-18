import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import msm from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={msm.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={msm.modal}>
      <div className={msm.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
