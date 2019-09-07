import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import useWindowDimensions from "./useWindowDimensions";
import useRemoteData from "./useRemoteData";
import { RepoMenu, BranchMenu } from "./ContextMenus";
import "../../node_modules/react-contexify/dist/ReactContexify.css";

function App() {

    const dimensions = useWindowDimensions();
    const data = useRemoteData();
    const svgProps = generateSVGModel(data, dimensions);

    return (
      <div>
        <SVG {...svgProps} />
        <RepoMenu />
        <BranchMenu />
      </div>
    );
}

render(<App />, document.getElementById('app'));

