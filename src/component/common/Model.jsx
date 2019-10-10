import React from "react";
const Modal = ({ children, closeModal, modalState }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="innerContainer">
        <div className="modal-card" style={{ background: "#fff" }}>
          <span className="close" onClick={closeModal}>
            abc
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
