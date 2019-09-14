import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import { ModalProvider } from "react-modal-hook";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useRemoteData from "../hooks/useRemoteData";
import useForm from "../hooks/useForm";
import SVG from "./SVG";
import Console from "./Console";
import { RepoMenu, BranchMenu, SVGMenu } from "./ContextMenus";
import generateSVGProps from "../util/generateSVGProps";
import "react-contexify/dist/ReactContexify.css";

Modal.setAppElement("#app");

function App() {
  const data = useRemoteData();
  const dimensions = useWindowDimensions();
  const menuProps = useForm();
  const svgProps = generateSVGProps(data, dimensions);

  return (
    <div>
      <SVG {...svgProps} />
      <SVGMenu {...menuProps} />
      <RepoMenu {...menuProps} />
      <BranchMenu {...menuProps} />
      <Console />
    </div>
  );
}

render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("app")
);
