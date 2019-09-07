import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import useWindowDimensions from "./useWindowDimensions";
import useRemoteData from "./useRemoteData";
import { RepoMenu, BranchMenu } from "./ContextMenus";
import generateSVGProps from "./generateSVGProps";
import "../../node_modules/react-contexify/dist/ReactContexify.css";

function App() {
    const data = useRemoteData();
    const dimensions = useWindowDimensions();
    const svgProps = generateSVGProps(data, dimensions);

    return (
      <div>
          <SVG {...svgProps} />
        <RepoMenu />
        <BranchMenu />
      </div>
    );
}

render(<App />, document.getElementById('app'));

