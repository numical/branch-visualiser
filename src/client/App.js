import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import SVG from './SVG';
import data from './data';
import useWindowDimensions from "./useWindowDimensions";

function App() {

    const dimensions = useWindowDimensions();
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

