import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useState } from "react";
import { render } from "react-dom";
import ReactModal from "react-modal";
import { ModalProvider, useModal } from "react-modal-hook";
import SVG from "./SVG";
import useWindowDimensions from "./useWindowDimensions";
import useRemoteData from "./useRemoteData";
import { RepoMenu, BranchMenu } from "./ContextMenus";
import generateSVGProps from "./generateSVGProps";
import "../../node_modules/react-contexify/dist/ReactContexify.css";

function App() {
  const data = useRemoteData();
  const dimensions = useWindowDimensions();
  const [focus, setFocus] = useState();
  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen>
        <pre>{JSON.stringify(focus, null, 2)}</pre>
        <button onClick={hideModal}>Hide modal</button>
      </ReactModal>
    ),
    [focus]
  );
  const menuProps = {
    showModal
  };

  const svgProps = {
    ...generateSVGProps(data, dimensions),
    setFocus
  };

  return (
    <div>
      <SVG {...svgProps} />
      <RepoMenu {...menuProps} />
      <BranchMenu {...menuProps} />
    </div>
  );
}

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("app")
);
