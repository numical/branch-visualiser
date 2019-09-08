import React, { useState } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";

function useDialog() {
  const [action, setAction] = useState();
  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen>
        <pre>{JSON.stringify(action, null, 2)}</pre>
        <button onClick={hideModal}>Hide modal</button>
      </ReactModal>
    ),
    [action]
  );
  return { showDialog: showModal, setAction };
}

export default useDialog;
