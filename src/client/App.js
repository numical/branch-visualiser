import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import useRemoteData from "./useRemoteData";
import useWindowDimensions from "./useWindowDimensions";

function App() {

    const dimensions = useWindowDimensions();
    const data = useRemoteData();
    const svgProps = {
        data,
        dimensions
    };

    return (
      <div>
        <SVG {...svgProps} />
      </div>
    );
}

render(<App />, document.getElementById('app'));

