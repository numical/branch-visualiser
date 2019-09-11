import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import { ModalProvider } from "react-modal-hook";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useRemoteData from "../hooks/useRemoteData";
import useDialog from "../hooks/useDialog";
import SVG from "./SVG";
import { RepoMenu, BranchMenu } from "./ContextMenus";
import generateSVGProps from "../util/generateSVGProps";
import "react-contexify/dist/ReactContexify.css";

Modal.setAppElement("#app");

function App() {
  const data = useRemoteData();
  const dimensions = useWindowDimensions();
  const menuProps = useDialog();
  const svgProps = generateSVGProps(data, dimensions);

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
