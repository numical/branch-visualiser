import React, { useState } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";

const nullFn = () => null;

const modalStyle = {
  content: {
    top: "25%",
    left: "25%",
    right: "auto",
    bottom: "auto"
  }
};

function useDialog() {
  const [Form, setForm] = useState(nullFn);
  const [showForm, hideForm] = useModal(() => {
    return (
      <ReactModal isOpen style={modalStyle}>
        {Form}
        <button className="cancel" onClick={hideForm}>
          Cancel
        </button>
      </ReactModal>
    );
  }, [Form]);
  const hideFormAfterSubmit = () => {
    const form = document.getElementById("contextForm");
    if (form && form.reportValidity()) {
      setTimeout(hideForm, 250);
    }
    return true;
  };
  return { setForm, showForm, hideForm: hideFormAfterSubmit };
}

export default useDialog;
