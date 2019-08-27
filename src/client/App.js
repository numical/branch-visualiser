import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import useRemoteData from "./useRemoteData";
import useWindowDimensions from "./useWindowDimensions";
import generateSVGModel from "./generateSVGModel";

function App() {

    const dimensions = useWindowDimensions();
    const data = useRemoteData();
    const svgProps = generateSVGModel(data, dimensions);

    return <SVG {...svgProps} />;
}

render(<App />, document.getElementById('app'));

