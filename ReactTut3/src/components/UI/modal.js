import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart} />;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.modal}>{props.children}</div>
      </div>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
