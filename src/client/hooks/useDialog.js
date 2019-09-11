import React, { useState } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";

const nullFn = () => null;

function useDialog() {
  const [dialogContent, setDialogContent] = useState(nullFn);
  const [showDialog, hideDialog] = useModal(() => {
    return (
      <ReactModal isOpen>
        {dialogContent}
        <button onClick={hideDialog}>Cancel</button>
      </ReactModal>
    );
  }, [dialogContent]);
  return { setDialogContent, showDialog };
}

export default useDialog;
