import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop} />;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElemente = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElemente)}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays> , portalElemente)}
    </Fragment>
  );
};

export default Modal;
